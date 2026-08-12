const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

yesBtn.addEventListener("click", () => {
  question.innerHTML = "zay a thừa nhận e xink gòi á nhaa🥰😘";
  gif.src =
    "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyajhocmh0aDVrNm81amE2azk4aWpmazJ5MXJvbnVpdTRyb2RvMjRrbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/125E8v90blHqtr4HrB/giphy.gif";

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
