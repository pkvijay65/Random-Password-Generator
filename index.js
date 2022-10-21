// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let passwordLength = 8;


const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const password3El = document.getElementById("password3-el");
const password4El = document.getElementById("password4-el");


const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("sliderNumber");

slider.addEventListener("input", function () {
  sliderNumber.textContent = `${slider.value}`;
  passwordLength = slider.value;
});

// Creates a function generatePasswords() that return a random password composed of passwordLength characters
function generatePasswords() {
  // Declares a variable called password and assign its value to an empty string
  let password = "";
  for (let j = 0; j < passwordLength; j++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    // Adds the new random chars to the password string
    password += chars[randomIndex];
  }
  return password;
}

// Creates a function getGeneratePasswords() that displays generated passwords in HTML document
function getGeneratePasswords() {
  // Displays the message in the messageEl using messageEl.textContent
  password1El.innerHTML = `<input type="text" id="1" value="${generatePasswords()}" >`;
  password2El.innerHTML = `<input type="text" id="2" value="${generatePasswords()}" >`;
  password3El.innerHTML = `<input type="text" id="3" value="${generatePasswords()}">`;
  password4El.innerHTML = `<input type="text" id="4" value="${generatePasswords()}">`;

}










