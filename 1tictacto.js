let blocks = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let winnerb = document.querySelector(".winnerb");
let newgame = document.querySelector(".newgame");
let home =document.querySelector(".home");
home.addEventListener("click",()=>{
   window.location.href="./0index.html"
})
let msg = document.querySelector("p");
let turn0 = true;
let winpatterns = [
   [0, 1, 2], [0, 3, 6],
   [0, 4, 8], [3, 4, 5],
   [6, 7, 8], [1, 4, 7],
   [2, 5, 8], [2, 4, 6],
];

blocks.forEach((box) => {
   box.addEventListener("click", () => {
      console.log("clicked");
      if (turn0) {
         box.innerText = "O";
         turn0 = false;
      } else {
         box.innerText = "X";
         turn0 = true;
      }
      box.disabled = true;
      winner();
   });
});

const winner = () => {
   for (let pattern of winpatterns) {
      let pos1 = blocks[pattern[0]].innerText;
      let pos2 = blocks[pattern[1]].innerText;
      let pos3 = blocks[pattern[2]].innerText;
      // console.log(pattern[0],pattern[1],pattern[2]);
      // console.log(pos1,pos2,pos3)     ;
      if (pos1 != "" && pos1 === pos2 && pos2 === pos3) {
         setTimeout(() => {
            msg.innerText = `Winner is ${pos1}!!`;
            winnerb.classList.add("flashb");
            winnerb.classList.remove("hide");
            blocks.forEach((box) => (box.disabled = true));
         }, 1000);
         blocks[pattern[0]].classList.add("flash");
         blocks[pattern[1]].classList.add("flash");
         blocks[pattern[2]].classList.add("flash");
      }
   }
};
winnerb.classList.add("hide");
resetbtn.addEventListener("click", () => {
   blocks.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
      box.classList.remove("flash");
      winnerb.classList.add("hide");
   });
   msg.innerText = "";
   winnerb.classList.remove("flashb");

   turn0 = true;
});
newgame.addEventListener("click", () => {
   blocks.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
      box.classList.remove("flash");
   });
   msg.innerText = "";
   winnerb.classList.remove("flashb");
   winnerb.classList.add("hide");
   turn0 = true;
});
