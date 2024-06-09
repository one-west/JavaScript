const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

let numOne = "";
let operator = "";
let numTwo = "";

const onClickNumber = (e) => {
  if (!operator) {
    numOne += e.target.textContent;
    $result.value = e.target.textContent;
    return;
  }
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += e.target.textContent;
  $result.value += numTwo;
};

const onClickOperator = (op) => () => {
  if (numTwo) {
    onClickCalculate();
    operator = op;
    $operator.value = operator;
  } else if (numOne) {
    operator = op;
    $operator.value = operator;
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
};

const onClickCalculate = () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = Number(numOne) + Number(numTwo);
        break;
      case "-":
        $result.value = Number(numOne) - Number(numTwo);
        break;
      case "*":
        $result.value = Number(numOne) * Number(numTwo);
        break;
      case "/":
        $result.value = Number(numOne) / Number(numTwo);
        break;
      default:
        alert("선택된 연산자가 없습니다.");
        break;
    }
    $operator.value = "";
    operator = "";
    numOne = $result.value;
    numTwo = "";
  } else {
    alert("계산할 숫자를 입력해주세요.");
  }
};
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document
  .querySelector("#minus")
  .addEventListener("click", onClickOperator("-"));
document
  .querySelector("#multiply")
  .addEventListener("click", onClickOperator("*"));
document
  .querySelector("#divide")
  .addEventListener("click", onClickOperator("/"));

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  numTwo = "";
  operator = "";
  $operator.value = "";
  $result.value = "";
});

document
  .querySelector("#calculate")
  .addEventListener("click", onClickCalculate);
