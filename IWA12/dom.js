const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}


const book1 = document.getElementById('book1');
const status1 = book1.querySelector('.status');
const reserve1 = book1.querySelector('.reserve');
const checkout1 = book1.querySelector('.checkout');
const checkin1 = book1.querySelector('.checkin');


const book2 = document.getElementById('book2');
const status2 = book2.querySelector('.status');
const reserve2 = book2.querySelector('.reserve');
const checkout2 = book2.querySelector('.checkout');
const checkin2 = book2.querySelector('.checkin');


const book3 = document.getElementById('book3');
const status3 = book3.querySelector('.status');
const reserve3 = book3.querySelector('.reserve');
const checkout3 = book3.querySelector('.checkout');
const checkin3 = book3.querySelector('.checkin');



function updateBookStatus(statusElement, reserveButton, checkoutButton, checkinButton, status) {
  const statusProperties = STATUS_MAP[status];  
  statusElement.style.color = statusProperties.color; //statusElement: This DOM element represents the status of a book, such as "Available" or "Checked out", influence change of color.
  reserveButton.disabled = !statusProperties.canReserve; // This is a button element that represents the reserve button for the book
  checkoutButton.disabled = !statusProperties.canCheckout; // This is a button element that represents the check out button for the book
  checkinButton.disabled = !statusProperties.canCheckIn; // This is a button element that represents the check in button for the book
}

updateBookStatus(status1, reserve1, checkout1, checkin1, 'overdue');
updateBookStatus(status2, reserve2, checkout2, checkin2, 'reserved');
updateBookStatus(status3, reserve3, checkout3, checkin3, 'shelf');

