var orderForm = document.getElementById("orderForm");
orderForm.onsubmit = function(e){
    
    //Create customerOrders object in localStorage
    if(localStorage.getItem("customerOrders") === null){
        localStorage.setItem("customerOrders", "{}");
    }
    if(localStorage.getItem("currentCustomersCount") === null){
        localStorage.setItem("currentCustomersCount", "0");
    }
    if(localStorage.getItem("totalCustomersCount") === null){
        localStorage.setItem("totalCustomersCount", "0");
    }

    var customerName = document.getElementById("customerName").value;
    var beverage = document.getElementById("beverageList").value;
    var customerName_beverage = customerName+"$"+beverage;
    if(beverage){
        //Get Data from localStorage
        var customerOrders = JSON.parse(localStorage.getItem("customerOrders"));
        var currentCustomersCount = parseInt(localStorage.getItem("currentCustomersCount"));
        var totalCustomersCount = parseInt(localStorage.getItem("totalCustomersCount"));
        customerOrders[totalCustomersCount] = customerName_beverage;
        storeCustomerData(customerOrders, currentCustomersCount, totalCustomersCount);
    }

    //Store Customer Data in localStorage
    function storeCustomerData(customerOrders, currentCustomersCount, totalCustomersCount){
        localStorage.setItem("customerOrders", JSON.stringify(customerOrders));
        localStorage.setItem(totalCustomersCount, "inTheQueue");
        totalCustomersCount++;
        currentCustomersCount++;
        localStorage.setItem("totalCustomersCount", totalCustomersCount);
        localStorage.setItem("currentCustomersCount", currentCustomersCount);
    }
    customerName.value = "";
}