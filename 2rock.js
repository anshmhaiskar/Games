let usersc = 0;
let compsc = 0;
let user = document.querySelector("#usersc");
let comp = document.querySelector("#compsc");
let msgid = document.querySelector("#msg");
let resetbtn = document.querySelector(".resetbtn");
let home =document.querySelector(".home");
home.addEventListener("click",()=>{
   window.location.href="./index.html"
})
const choices = document.querySelectorAll(".section");

const getrandomcompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};

const draw = () => {
  msgid.innerText = "it's draw";
};

const showwinner = (userwin) => {
  if (userwin) {
    usersc = usersc + 1;
    user.innerText = usersc;
    msgid.innerText = "You Win !!";
  } else {
    compsc = compsc + 1;
    comp.innerText = compsc;
    msgid.innerText = "Comp Win !!";
  }
};

const game = (userchoice) => {
  console.log("user choice", userchoice);
  const compchoice = getrandomcompchoice();
  console.log("comp choice", compchoice);
  if (compchoice === userchoice) {
    draw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "rock" ? true : false;
    } else if (userchoice === "scissor") {
      userwin = compchoice === "paper" ? false : true;
    }
    showwinner(userwin);
    reset();
  }
};

choices.forEach((section) => {
  console.log(section);
  section.addEventListener("click", () => {
    const userchoice = section.getAttribute("id");
    game(userchoice);
    resetbtn.classList.remove("hide");
  });
});

const reset = () => {
  resetbtn.addEventListener("click", () => {
    usersc = 0;
    compsc = 0;
    user.innerText = "0";
    comp.innerText = "0";
    msgid.innerText = "Play again ";
    resetbtn.classList.add("hide");
  });
};
