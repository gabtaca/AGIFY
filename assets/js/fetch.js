function fetchFirstName(firstName) {
  fetch(`https://api.agify.io?name=${firstName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.age) {
        resultText.textContent = `L'âge prédit de ${firstName} est ${data.age}.`;
        addToHistory(firstName, data.age); 
      } else {
        resultText.textContent = `Désolé, nous n'avons pas trouvé de données pour: "${firstName}".`;
      }
    })
    .catch((error) => {
      console.error("Erreur en récupérant le data:", error);
      resultText.textContent = "Erreur!";
    });
}

const input = document.querySelector("#input_name");
const resultText = document.querySelector(".result");
const search = document.querySelector(".btn_search");

search.addEventListener("click", (event) => {
  event.preventDefault();  
  const firstName = input.value.trim(); 
  if (firstName) {
    fetchFirstName(firstName); 
  } else {
    resultText.textContent = "Veuillez entrer un prénom.";
  }
});

function addToHistory(firstName, age) {
  let history = JSON.parse(localStorage.getItem("nameHistory")) || [];
  
  const entry = [firstName, age];
  history.push(entry);

  if (history.length > 10) {
    history = history.slice(-10);
  }

  localStorage.setItem("nameHistory", JSON.stringify(history));
  displayHistory();
}

function displayHistory() {
  const historyList = document.querySelector(".list_history"); 
  historyList.innerHTML = ''; 

  const history = JSON.parse(localStorage.getItem("nameHistory")) || [];
  
  history.forEach(([name, age]) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${name},${age}`;
    historyList.appendChild(listItem);
  });
}

window.onload = displayHistory;