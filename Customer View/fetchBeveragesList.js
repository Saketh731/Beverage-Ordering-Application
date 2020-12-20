//Fetches beverages list from json data
window.onload = function(){
    var jsonData;
    fetch("beveragesList.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        jsonData = data.filter(function(obj){
            return obj.available === true;
        });
        
        //Create and append the beverage block
        var menuSection = document.getElementById("menuSection");
        jsonData.forEach(function(obj){
            var beverage = document.createElement('div');
            beverage.innerHTML = obj.name;
            beverage.classList.add("drinkName");
            menuSection.appendChild(beverage);
        });
    })
    .catch(function(error){
        throw "Unable to load JSON data";
    });
    
}