//Direct the customer to the customerView page
window.onload = function(){
    var customerButton = document.getElementById("customer");
    customerButton.onclick = function(e){
        e.preventDefault();
        location.href = "../Customer_View/customerView_Page.html";
    }

    var adminButton = document.getElementById("admin");
    adminButton.onclick = function(e){
        e.preventDefault();
        location.href = "../Admin_View/adminView.html";
    }
}


//Direct the admin to the adminView page