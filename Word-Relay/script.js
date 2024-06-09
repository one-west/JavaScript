const number = Number(prompt("참가자는 몇 명인가요?"));
const $input = document.querySelector("input");
const $order = document.querySelector("#order");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
let newWord;
let word;
const onInput = (e) => {
  newWord = e.target.value;
};

const onClickButton = () => {
  if (!number) {
    return;
  }

  if (newWord.length !== 3) {
    alert("세글자가 아닙니다. 다시 입력하세요");
    return;
  }

  if (!word || word.at(-1) === newWord[0]) {
    word = newWord;
    $word.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 > number) {
      // 다음 순서를 1로
      $order.textContent = 1;
    } else {
      // 다음 순서를 현재 순서의 + 1로
      $order.textContent = order + 1;
    }
  } else {
    alert("틀린 단어입니다.");
    return;
  }
  $input.value = "";
  $input.focus();
};

$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);