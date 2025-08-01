function newCardGenerator() {
  const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10" , "J", "Q", "K"];
  const suit = ["♥", "♦", "♠", "♣"]; 

  const randomNumber = number[Math.floor(Math.random() * number.length)];
  const randomSuit = suit[Math.floor(Math.random() * suit.length)];

  document.querySelector(".topsuit p").innerText = randomSuit;
  document.querySelector(".number p").innerText = randomNumber;
  document.querySelector(".bottomsuit p").innerText = randomSuit; 

  const card = document.querySelector(".card");
  card.classList.remove("heart", "diamond", "spade", "club");

  if (randomSuit === "♥") card.classList.add("heart");
    else if (randomSuit === "♦") card.classList.add("diamond");
    else if (randomSuit === "♠") card.classList.add ("spade");
    else if (randomSuit === "♣") card.classList.add ("club")
  }

window.onload = newCardGenerator; 

document.querySelector(".changeCardButton").addEventListener("click", newCardGenerator);



