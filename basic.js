const cartItems = [];
let currentIndex = -1;
let showHidden = false; // Track the toggle status

// Function to add new items to the cart
function addData() {
    const name = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;

    if (!quantity || !name || !price) {
        alert("Please fill in all fields.");
        return;
    }

    const totalPrice = price * quantity;

    const item = {
        name: name,
        quantity: quantity,
        price: price,
        totalPrice: totalPrice,
        hidden: false // Default: item is not hidden
    };

    cartItems.push(item);
    updateCartTable();

    document.getElementById("name").value = '';
    document.getElementById("quantity").value = '';
}

// Function to update the cart table dynamically
function updateCartTable() {
    const table = document.getElementById('cartTableBody');
    table.innerHTML = '';

    cartItems.forEach((item, index) => {
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        cell1.textContent = item.name;
        cell2.textContent = item.quantity;
        cell3.textContent = item.price;
        cell4.textContent = item.totalPrice;

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => openUpdateModal(index);
        cell5.appendChild(updateButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => openDelmodel(index);
        cell6.appendChild(deleteButton);

        if (item.hidden) {
            if (showHidden) {
                newRow.style.display = '';
                newRow.style.opacity = '0.5'; // Make the row semi-transparent
            } else {
                newRow.style.display = 'none'; // Hide the row if not toggled
            }
        } else {
            newRow.style.display = ''; // Show normal rows
            newRow.style.opacity = '1'; // Fully opaque for visible items
        }
    });
}


function openDelmodel(index) {
    currentIndex = index;
    document.getElementById("del-model").style.display = "block";
}


function deleteItem(index) {
    cartItems[index].hidden = true; // Mark the item as hidden
    updateCartTable();  
    alert("Item will be deleted.");
    closeModal();
}


function closeModal() {
    document.getElementById("del-model").style.display = "none";
}


function toggleHiddenItems() {
    showHidden = !showHidden; 
    updateCartTable(); 
}


function openUpdateModal(index) {
    const item = cartItems[index];
    currentIndex = index;

    document.getElementById("editName").value = item.name;
    document.getElementById("editQuantity").value = item.quantity;
    document.getElementById("editPrice").value = item.price;

    document.getElementById("myModal").style.display = "block";
}

function saveChanges() {
    const updatedName = document.getElementById("editName").value;
    const updatedQuantity = document.getElementById("editQuantity").value;
    const updatedPrice = document.getElementById("editPrice").value;

    cartItems[currentIndex] = {
        // ...cartItems[currentIndex],
        name: updatedName,
        quantity: updatedQuantity,
        price: updatedPrice,
        totalPrice: updatedQuantity * updatedPrice
    };

    document.getElementById("myModal").style.display = "none";
    updateCartTable();
    alert("Item has been updated.");
}


const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//function sorting(){
//cartItems.sort((a,b) => {a.name - b.name}
//console.log(cartItems);
//updateCartTable();
//}


let sortCriteria = '';
let sortOrder = ''; 

function setCriteria(value) {
    sortCriteria = value; // Set value based on dropdown selection
}

function setOrder(value) {
    sortOrder = value; // Set value based on dropdown selection
}

function sortTable() {
    if (!sortCriteria || !sortOrder) {
        alert("Please select both criteria and sort order.");
        return;
    }

    if (sortCriteria === 'name') {
        if (sortOrder === 'asc') {
            sortItemAsc();
        } else {
            sortItemDesc();
        }
    } else if (sortCriteria === 'price') {
        if (sortOrder === 'asc') {
            sortPriceAsc();
        } else {
            sortPriceDesc();
        }
    }
}

function sortItemAsc() {
    cartItems.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    updateCartTable();
}

function sortItemDesc() {
    cartItems.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
    updateCartTable();
}

function sortPriceAsc() {
    cartItems.sort((a, b) => a.price - b.price);
    updateCartTable();
}

function sortPriceDesc() {
    cartItems.sort((a, b) => b.price - a.price);
    updateCartTable();
}

