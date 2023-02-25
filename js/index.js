console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}
handleUserLogin(showMessage);

//--//

handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`);
});
