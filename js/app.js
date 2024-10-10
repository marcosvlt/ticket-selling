function buy() {
    let type = document.getElementById('ticket-type');
    let text = type.options[type.selectedIndex].text    
    let quantity = parseInt(document.getElementById('qtt').value);   
    let avQuantity = parseInt(document.getElementById(`qtd-${type.value}`).innerText);

    if (quantity > avQuantity) {
        alert(`Quantity unavailable for ${text}`);
    } else {
        avQuantity = avQuantity - quantity;
        document.getElementById(`qtd-${type.value}`).innerText = avQuantity
        alert('Purchase completed successfully!')
    }


    
}
