document.getElementById("tossBtn").addEventListener("click", toss);
document.addEventListener("DOMContentLoaded", hideApp("toss", "work"));
const output = document.getElementById("output");
const workOutput = document.getElementById("workOutput");

function toss(e) {
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const number = Math.floor(Math.random() * 2);
  output.innerHTML = `
        <div class="d-flex justify-content-center">
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        `;
  setTimeout(() => {
    tossOutput(number === 1 ? option1 : option2);
  }, 3000);

  e.preventDefault();
}
function tossOutput(option) {
  output.innerHTML = `
        <div class="d-flex justify-content-center">
          <h1 class="btn bg-danger text-light fw-bold">Toss Won by : ${option}</h1>
        </div>
        `;
}
function fetchWork() {
  fetch("http://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  workOutput.innerHTML = `
        <h4>
           <span class="badge bg-success">You can do this</span>
           <span class="badge text-dark bg-warning">${
             data.type.charAt(0).toUpperCase() +
             data.type.slice(1).toLowerCase()
           }</span> 
        </h4>
        <h2 class="text-primary">${data.activity}</h2>
        `;
  document.getElementById("workBtn").innerText = "Load Another";
}
function hideApp(show, hide) {
  document.getElementById(`${show}`).style.display = "block";
  document.getElementById(`${hide}`).style.display = "none";
}
