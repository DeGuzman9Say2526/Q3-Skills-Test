function register() {
    var name = document.getElementById('fullname').value;
    var qty = parseInt(document.getElementById('ticketqty').value);
    
    const TICKET_PRICE = 250;
    const ADMIN_FEE = 50;

    if (name === "" || isNaN(qty) || qty <= 0) {
        alert("Please enter a name and a valid number of tickets.");
        return;
    }

    var subtotal = qty * TICKET_PRICE;
    var grandTotal = subtotal + ADMIN_FEE;

    document.getElementById('subtotal').value = subtotal.toFixed(2) + " Pesos";
    document.getElementById('adminfee').value = ADMIN_FEE.toFixed(2) + " Pesos";
    document.getElementById('total').value = grandTotal.toFixed(2) + " Pesos";

    document.getElementById('message').innerText = "Successfully registered: " + name;
    
    window.alert("Total: " + grandTotal.toFixed(2) + " Pesos");
}