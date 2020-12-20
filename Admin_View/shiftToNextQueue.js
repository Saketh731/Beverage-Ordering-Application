//Add onclick event for inTheQueue article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)



var inTheQueue = document.getElementById("inTheQueue");
inTheQueue.onclick = function(event){
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
        var newCustomerOrderDiv = shiftToNextQueue(customerOrderDiv, inTheQueue.nextElementSibling);
        updateLocalStorage(newCustomerOrderDiv, customerId, inTheQueue.nextElementSibling.id);
    }
}


//Add onclick event for beingMixed article, so that a callback function is executed when any of 
//the customerOrders is clicked from that queue. - (This happens because of Event bubbling)

var beingMixed = document.getElementById("beingMixed");
beingMixed.onclick = function(event){
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
        var newCustomerOrderDiv = shiftToNextQueue(customerOrderDiv, beingMixed.nextElementSibling);
        updateLocalStorage(newCustomerOrderDiv, customerId, beingMixed.nextElementSibling.id);
    }
}

function shiftToNextQueue(customerOrderDiv, nextQueue){
    var newCustomerOrderDiv = customerOrderDiv.cloneNode(true);
    nextQueue.appendChild(newCustomerOrderDiv);
    customerOrderDiv.remove();
    return newCustomerOrderDiv;
}


function updateLocalStorage(newCustomerOrderDiv, customerId, queueName){
    var customerOrders = JSON.parse(localStorage.getItem("customerOrders"));
    var index = parseInt(localStorage.getItem("index"));

    //Update to the customerId with new Queue
    localStorage.removeItem(customerId);
    localStorage.setItem(index, queueName);
    customerId = parseInt(customerId);

    //Delete the customerData and update to new one
    var customerData = customerOrders[customerId];
    delete customerOrders[customerId];
    customerOrders[index] = customerData;
    localStorage.setItem("customerOrders", JSON.stringify(customerOrders));
    localStorage.removeItem(customerId);

    newCustomerOrderDiv.id = index;

    //Update the index count in localStorage
    index++
    localStorage.setItem("index", index);
}
