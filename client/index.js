const fortuneBtn = document.getElementById("fortuneBtn");
const quotesBtn = document.getElementById("quotes");
const divEl = document.querySelector("div");
const removeBtn = document.getElementById("removeQuote");

fortuneBtn.addEventListener("click", () => {
  axios.get("http://localhost:4000/api/fortune").then(function (response) {
    const data = response.data;
    alert(data);
  });
});


quotesBtn.addEventListener("click", () => {
  axios.get("http://localhost:4000/api/quotes").then(function (response) {
    const h2 = document.createElement("h2");
    const text = document.createTextNode(`${response.data}`);
    h2.appendChild(text);
    divEl.appendChild(h2);
  });
});
function clearQuotes() {
  divEl.innerHTML = "";
}
removeBtn.addEventListener("click", clearQuotes);