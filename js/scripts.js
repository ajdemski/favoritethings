window.addEventListener ("load", function() {
  document.getElementById("idForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
  
    const person1input = document.getElementById("person1Input").value;
    const person2input = document.getElementById("person2Input").value;
    const person3input = document.getElementById("person3Input").value;
  
    const favoriteThings = [person1input, person2input, person3input];
  
    const newArray = [];
    newArray.push(favoriteThings[1]);
    newArray.push(favoriteThings[0]);
    newArray.push(favoriteThings[2]);
  
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
  
    newArray.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      resultList.appendChild(li);
    })
  }); 
});


