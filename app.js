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

let numberCPU;
const user = document.getElementById("inputNumber");
const playGame = document.querySelector(".gameContainer");
const lifes = document.getElementById("lifes");
const difficulty = document.querySelector(".difficultyContainer");
const descriptionDifficulty = document.getElementById("descriptionDifficulty");

const stylesDifficulty = (color) => {
  descriptionDifficulty.style.backgroundColor = color;
  descriptionDifficulty.style.boxShadow = `0px 0px 10px ${color}`;
};

const difficultyStatement = (maxNumber, level) => {
  numberCPU = Math.ceil(Math.random() * maxNumber);
  descriptionDifficulty.textContent = `Nivel ${level}: del 1 al ${maxNumber}`;
  inputNumber.setAttribute("min", 1);
  inputNumber.setAttribute("max", maxNumber);
};

difficulty.value = "begin";
numberCPU = Math.ceil(Math.random() * 10);
descriptionDifficulty.textContent = "Nivel Facil: del 1 al 10";
inputNumber.setAttribute("min", 1);
inputNumber.setAttribute("max", 10);
stylesDifficulty("#43ff43");

lifes.textContent = 3;

difficulty.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "begin":
      difficultyStatement(10, "Fácil");
      stylesDifficulty("#43ff43");
      break;
    case "normal":
      difficultyStatement(20, "Normal");
      stylesDifficulty("#e0ff2e");
      break;
    case "hard":
      difficultyStatement(35, "Difícil");
      stylesDifficulty("#ffa014");
      break;
    case "expert":
      difficultyStatement(50, "Experto");
      stylesDifficulty("#ff1e1e");
      break;
    default:
      break;
  }
});

playGame.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberUser = user.value;
  if (lifes.textContent > 1) {
    if (numberUser != numberCPU && numberUser < numberCPU) {
      backgroundColorResult("#ff4949");
      lifes.textContent--;
      textComparation("El número es mayor!!");
    } else if (numberUser != numberCPU && numberUser > numberCPU) {
      backgroundColorResult("#ff4949");
      lifes.textContent--;
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
