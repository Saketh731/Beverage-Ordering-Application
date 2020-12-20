//Remove Customer Order from the Queue after the Customer collects his order


//Add onclick event for inTheQueue article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)

var readyToCollect = document.getElementById("readyToCollect");
readyToCollect.onclick = function(event){
    if(event.target.classList[0] == "name_drink" || event.target.parentElement.classList[0] == "name_drink"){
        var customerOrderDiv;
        var customerId;
        if(event.target.classList[0] == "name_drink"){
            customerOrderDiv = event.target;
        } 
        else{
            customerOrderDiv = event.target.parentElement;
        }
        //customerId is the index number to access the customer's data in the localStorage
        customerId = customerOrderDiv.id;
        
        deleteOrderFromQueue(customerOrderDiv, customerId);
        //console.log(customerId);
    }
}


function deleteOrderFromQueue(customerOrderDiv, customerId){
    //Remove the customer's order from readyToCollect queue
    customerOrderDiv.remove();

    customerId = parseInt(customerId);

    var customerOrders = JSON.parse(localStorage.getItem("customerOrders"));
    var currentCustomersCount = parseInt(localStorage.getItem("currentCustomersCount"));

    //Delete the customer's data from localStorage
    delete customerOrders[customerId];
    localStorage.setItem("customerOrders", JSON.stringify(customerOrders));
    localStorage.removeItem(customerId);
    currentCustomersCount--;
    localStorage.setItem("currentCustomersCount", currentCustomersCount);

    if(currentCustomersCount === 0){
        localStorage.clear()
    }
}