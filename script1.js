const nameSpan = document.getElementById("friendName");
const messagePara = document.getElementById("friendMessage");

let friendName = localStorage.getItem("friendName");

if (!friendName) {
  friendName = prompt("Hey! What's your name?");
  if (friendName && friendName.trim() !== "") {
    friendName = friendName.trim();
    localStorage.setItem("friendName", friendName);
  } else {
    friendName = "Friend";
  }
}

nameSpan.textContent = friendName;

// normalize safely
let normalizedName = friendName.toLowerCase();

/* ---- Aniket ambiguity handling ---- */
if (normalizedName === "aniket") {
  const fullName = prompt(
    "There are two Anikets 😄\nPlease enter your full name"
  );

  if (fullName && fullName.trim() !== "") {
    friendName = fullName.trim();
    normalizedName = friendName.toLowerCase();
    nameSpan.textContent = friendName;
    localStorage.setItem("friendName", friendName);
  }
}

// default message
let message =
  "Glad you're here. This page is better with you in it. Since you're reading this, know that I really enjoyed your company this year and will for the next years. Kudos to another year of friendship!! Happy new year !";

// specific cases
if(normalizedName === "aniket narayan biswas") {
  message =
    "Dear sugar brother,\nDekhte dekhte 14 bochor hoye gelo.\nHere’s to many more years of friendship!Wish you a very happy new year and a successfull one as well!";
}else if (normalizedName === "spandan") {
  message =
    "Batu,\ncheers to our 14 years of friendship.\nStay till the end,love you bhai. Happy new year !";
 }else if (normalizedName === "pritama") {
  message =
    "Hey P!\nThanks for being an amazing friend and sister.\nYou helped me a lot in tough times (and bullied me too). Love you a lot ! Happy new year !";
} else if (normalizedName === "purbasa") {
  message =
    "Purbasa,\nthanks for the year long supposrt you gave me especially in tough times :)\nSachhe dil se shukriya. Happy new year ! Khush raho (touchwood)";
} else if (normalizedName === "swastik") {
  message =
    "Dear Swastik(Better call Nigga),\nPick my calls more often.\nCheers to another year of friendship and lets make Lancers propell. Happy new year !";
} else if (normalizedName === "suprojit") {
  message =
    "Supro,\nFrom class to COD to hackathons — absolute wingman.\nLet’s win together and build Lancers together. Happy new year !";
} 
else if (normalizedName === "anirban") {
  message =
    "Anirban,\nEven if we talk less, you’re still close to me.\nAll the best, future doctor.";
} else if (normalizedName === "sudeshna") {
  message =
    "Sudeshna,\nThanks for being there in tough times.\nNever hesitate to ask for help. Happy new year ! Also bhai keo happy new year ! Keep up the good work ami tor support e achi :)";
} else if (normalizedName === "aniket mitra") {
  message =
    "Nutu kudos to all the gaming sessions and addas !\nHere’s to another year of bakchodi and friendship.\nAr bhai khota kom de ektu baap amar :) Let's now work on Lancers this year. Happy new year !";
}else if(normalizedName === "anagh"){
    message = "Nesha ta koma and keep working hard bhai ami tor help korte always achi ;) Happy new year bhai! Wish you a very successful year ahead ! Keep up the hard work for yourself and her :)";
}else if(normalizedName === "arka"){
    message = "Happy new year mere bhai! Wishing you a very successful year ahead. To another year of bakchodi !";
}else if (normalizedName === "aniket") {
  message =
    "Two Anikets exist.\nPlease refresh and enter your full name, bhai.";
}
messagePara.textContent = message;
