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

const book1Status = document.querySelector('#book1 .status');
const book1Reserve = document.querySelector('#book1 .reserve');
const book1Checkout = document.querySelector('#book1 .checkout');
const book1Checkin = document.querySelector('#book1 .checkin');

const book2Status = document.querySelector('#book2 .status');
const book2Reserve = document.querySelector('#book2 .reserve');
const book2Checkout = document.querySelector('#book2 .checkout');
const book2Checkin = document.querySelector('#book2 .checkin');

const book3Status = document.querySelector('#book3 .status');
const book3Reserve = document.querySelector('#book3 .reserve');
const book3Checkout = document.querySelector('#book3 .checkout');
const book3Checkin = document.querySelector('#book3 .checkin');

function updateBookStatus(statusElement, reserveButton, checkoutButton, checkinButton, status) {
  const statusProperties = STATUS_MAP[status];
  statusElement.style.color = statusProperties.color;
  reserveButton.disabled = !statusProperties.canReserve;
  checkoutButton.disabled = !statusProperties.canCheckout;
  checkinButton.disabled = !statusProperties.canCheckIn;
}

updateBookStatus(book1Status, book1Reserve, book1Checkout, book1Checkin, 'overdue');
updateBookStatus(book2Status, book2Reserve, book2Checkout, book2Checkin, 'reserved');
updateBookStatus(book3Status, book3Reserve, book3Checkout, book3Checkin, 'shelf');



