let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
let userInput = document.getElementById("user-inp").value;
if(userInput.length == 0){
    result.innerHTML=`<h3 class="msg">Theiput field cannot be empty </h3>`;
}
else{
    fetch(url + userInp).then(response => response.json())
    .then((data) => {
       console.log(data);
       console.log(data.drinks[0]);
      let myDrink = data.drinks[0];
      console.log(myDrink) 
    });
}