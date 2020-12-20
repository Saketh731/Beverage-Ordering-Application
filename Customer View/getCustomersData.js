
    //Get customerOrders from localStorage
    var customerOrders = JSON.parse(localStorage.getItem("customerOrders"));
    var customerIDs = Object.keys(customerOrders);

    customerIDs.forEach(function(id){
        //The Queue in which the data belong to
        var queue = localStorage.getItem(id);

        //Get Cutomer Name and Order based on his ID
        var customerData = customerOrders[id];
        var customerDataArray = customerData.split("$");
        var customerName = customerDataArray[0];
        var beverage = customerDataArray[1];

        //Create customerOrder block to store in the respective Queue
        var customerOrderDiv = document.createElement("div");
        customerOrderDiv.classList.add("name_drink");
        customerOrderDiv.id = id;
        var beverageDiv = document.createElement("div");
        beverageDiv.classList.add("drink");
        beverageDiv.innerHTML = beverage;
        var customerNameDiv = document.createElement("div");
        customerNameDiv.classList.add("name");
        customerNameDiv.innerHTML = customerName;
        customerOrderDiv.appendChild(beverageDiv);
        customerOrderDiv.appendChild(customerNameDiv);
        
        document.getElementById(queue).appendChild(customerOrderDiv);
    });