//javascriptの復習

//DOM操作
const button = document.getElementById("button");

//組み込みオブジェクト
//Dateオブジェクト.引数なしの場合現在の時間を返す
const date = new Date();
console.log(date);

//DateオブジェクトのgetFullYearメソッド.年を返す
const year = date.getFullYear();
console.log(year);

//月を返す
const month = date.getMonth() + 1;
console.log(month);

//日を返す
const day = date.getDate();
console.log(day);

//時間を返す
const hours = date.getHours();
console.log(hours);

//分を返す
const minutes = date.getMinutes();
console.log(minutes);

//秒を返す
const seconds = date.getSeconds();
console.log(seconds);

button.addEventListener("click", () => {
  alert(`今日は${year}年${month}月${day}日です`);
});

const button3 = document.getElementById("button3");
const p = document.getElementById("p");
button3.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 11);
  p.innerHTML = `<h1>${random}</h1>`;
});