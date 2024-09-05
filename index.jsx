import React from "react"
import ReactDOM from "react-dom"

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generateBtn = document.getElementById("generate-btn")

let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

function App() {
    return (
      <div id="container">
          <div id="pw-container">
              <small id="pw">{generateRandomPassword()}</small>
          </div>
          <div id="pw-container">
              <small id="pw">{generateRandomPassword()}</small>
          </div>
          <div id="pw-container">
              <small id="pw">{generateRandomPassword()}</small>
          </div>
          <div id="pw-container">
              <small id="pw">{generateRandomPassword()}</small>
          </div>
        </div>
    )
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'))

generateBtn.addEventListener('click', function(){
    root.render(<App />)
})
