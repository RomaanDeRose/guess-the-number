const bigOrSmall = document.getElementById("bigOrSmall");

const textComparation = (texto) => (bigOrSmall.textContent = texto);

const backgroundColorResult = (color) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
  }, 10);
  setTimeout(() => {
    document.body.style.backgroundColor = "#121212";
  }, 180);
};

const buttonReload = document.getElementById("reset");

buttonReload.addEventListener("click", () => {
  document.location.reload();
});

const modal = document.querySelector(".modalWinOrLose");
const modalText = document.getElementById("modalText");
const icon = document.getElementById("iconReload");
const modalNumber = document.getElementById("numberCPU");

const winOrLose = (boolean) => {
  const result = boolean;
  modal.classList.add("active");
  modalNumber.textContent = numberCPU;
  if (result) {
    modalText.textContent = "Ganaste!!";
    modal.style.backgroundColor = "#40ff4ae0";
    icon.style.color = "#40ff4a";
  } else {
    modalText.textContent = "Perdiste! :(";
    modal.style.backgroundColor = "#ff4949e7";
    icon.style.color = "#ff4949";
  }
};

const numberCPU = Math.ceil(Math.random() * 10);
const user = document.getElementById("inputNumber");
const buttonPlay = document.getElementById("buttonPlay");
const lifes = document.getElementById("lifes");
let life = 3;

buttonPlay.addEventListener("click", (e) => {
  e.preventDefault();
  const numberUser = user.value;
  if (life > 1) {
    if (numberUser != numberCPU && numberUser < numberCPU) {
      backgroundColorResult("#ff4949");
      life--;
      lifes.textContent = life;
      textComparation("El número es mayor!!");
    } else if (numberUser != numberCPU && numberUser > numberCPU) {
      backgroundColorResult("#ff4949");
      life--;
      lifes.textContent = life;
      textComparation("El número es menor!!");
    } else {
      winOrLose(true);
      textComparation("");
    }
  } else {
    if (numberUser == numberCPU) {
      backgroundColorResult("#40ff49");
      winOrLose(true);
      textComparation("");
    } else {
      winOrLose(false);
      textComparation("");
    }
  }
});
