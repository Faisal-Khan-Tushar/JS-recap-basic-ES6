const friendContainer = document.getElementById('friend-container');
//After clicking on the add border button, a border will be added to the firend contianer
document.getElementById('add-border').addEventListener('click', function () {
  friendContainer.style.border = '2px solid red';
})
//after clicking on the add background color, a background color will be added to all of the friends, using onclick
function addBackgroundcolor() {
  const friends = document.getElementsByClassName('friend');
  for (const friend of friends) {
    friend.style.backgroundColor = 'orange';
  }
}
//after clicking the add firend button a new friend will be added in the block
document.getElementById('add-friend').addEventListener('click', function () {
  const friendDiv = document.createElement('div');
  friendDiv.classList.add('friend');
  friendDiv.innerHTML = `
  <h3 class="friend-name">Notun Bondhu Amader</h3>
  <p>Eius, sequi?</p>
  `;
  friendContainer.appendChild(friendDiv);
})
