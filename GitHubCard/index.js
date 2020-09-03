import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/lbu0413')
  .then(stuff => {
    const paulData = stuff.data;
    // console.log(paulData);
    accountMaker(paulData);
    const myCard = accountMaker(paulData);
    cards.appendChild(myCard);

  })
  .catch(err => {
    debugger
  })

console.log(cards);

  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
    .then(stuff => {
      const paulData = stuff.data;
      // console.log(paulData);
      accountMaker(paulData);
      const myCard = accountMaker(paulData);
      cards.appendChild(myCard);
    })
    .catch(err => {
      debugger
    })

    
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function accountMaker(obj){
  const cardDiv = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const githubName = document.createElement('p');
  const userLoc = document.createElement('p');
  const userProfile = document.createElement('p');
  const userAddress = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(githubName);
  cardInfo.appendChild(userLoc);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userAddress);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  cardDiv.classList.add('.card');
  cardInfo.classList.add('.card-info');
  userName.classList.add('.name');
  githubName.classList.add('.username');
  // console.log(obj);
  userImg.src = obj.avatar_url;
  userName.textContent = obj.name;
  githubName.textContent = obj.login;
  userLoc.textContent = obj.location;
  userAddress.href = obj.html_url;
  userAddress.textContent = obj.html_url;
  userFollowers.textContent = obj.followers;
  userFollowing.textContent = obj.following;


  return cardDiv;

  
  
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
