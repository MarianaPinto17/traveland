const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const containerform = document.getElementById('containerform');

signUpButton.addEventListener('click', () => {
	containerform.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	containerform.classList.remove("right-panel-active");
});