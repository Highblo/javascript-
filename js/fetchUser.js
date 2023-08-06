const ol = document.querySelector(".ol");
const button = document.querySelector(".button");

button.addEventListener("click", async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const user = await res.json();

  user.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = user.name;
    ol.appendChild(li);
  });
});
