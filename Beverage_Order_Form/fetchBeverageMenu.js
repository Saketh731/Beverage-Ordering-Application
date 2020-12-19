window.onload = function(){
    var jsonData;
    fetch("/Customer_View/beveragesList.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        jsonData = data.filter(function(obj){
            return obj.available === true;
        });
       
        //Create a dropdown list with the json data
        jsonData.forEach(function(obj){
            var select = document.getElementById("beverageList");
            var option = document.createElement("option");
            option.value = obj.name;
            option.innerHTML = obj.name; 
            select.appendChild(option);
        });
    })
    .catch(function(error){
        throw "Unable to load JSON data";
    });
}