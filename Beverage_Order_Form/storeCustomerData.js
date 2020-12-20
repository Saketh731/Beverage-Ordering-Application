var orderForm = document.getElementById("orderForm");
orderForm.onsubmit = function(e){
    
    //Create customerOrders object in localStorage
    if(localStorage.getItem("customerOrders") === null){
        localStorage.setItem("customerOrders", "{}");
    }
    if(localStorage.getItem("currentCustomersCount") === null){
        localStorage.setItem("currentCustomersCount", "0");
    }
    if(localStorage.getItem("index") === null){
        localStorage.setItem("index", "0");
    }

    var customerName = document.getElementById("customerName").value;
    var beverage = document.getElementById("beverageList").value;
    var customerName_beverage = customerName+"$"+beverage;
    if(beverage){
        //Get Data from localStorage
        var customerOrders = JSON.parse(localStorage.getItem("customerOrders"));
        var currentCustomersCount = parseInt(localStorage.getItem("currentCustomersCount"));
        var index = parseInt(localStorage.getItem("index"));
        customerOrders[index] = customerName_beverage;
        storeCustomerData(customerOrders, currentCustomersCount, index);
    }

    //Store Customer Data in localStorage
    function storeCustomerData(customerOrders, currentCustomersCount, index){
        localStorage.setItem("customerOrders", JSON.stringify(customerOrders));
        localStorage.setItem(index, "inTheQueue");
        index++;
        currentCustomersCount++;
        localStorage.setItem("index", index);
        localStorage.setItem("currentCustomersCount", currentCustomersCount);
    }
}