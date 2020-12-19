//Direct the customer to the customerView page
window.onload = function(){
    var customerButton = document.getElementById("customer");
    customerButton.onclick = function(e){
        e.preventDefault();
        window.open("../Customer_View/customerView_Page.html");
    }
}


//Direct the admin to the adminView page