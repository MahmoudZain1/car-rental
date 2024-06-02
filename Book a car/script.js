document.addEventListener('DOMContentLoaded', function () {
    const reservationButton = document.querySelector('.sayed');

    reservationButton.addEventListener('click', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const car = document.getElementById('car').value;
        const pickupDate = document.getElementById('pickup-date').value;
        const returnDate = document.getElementById('return-date').value;

        if (name && email && phone && car && pickupDate && returnDate) {
            alert('The car has been booked successfully');
        } else {
            alert('Please fill in all data!!!');
        }
    });
});
