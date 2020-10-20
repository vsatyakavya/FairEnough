// reservationArray is the array of objects for each 

function postReservation() {
    $.post("/api/tables", newReservation)
        .then(function(data){
            console.log("Reservation: " + data);
        })
}

function postWaitlist() {
    $.post("/api/waitlist", newReservation)
        .then(function(data){
            console.log("Waitlist Reservation: " + data);
        })
}

$("#submit-btn").on("click", function(event){
    const newReservation = {
        name: $("#name").val(),
        phoneNum: $("#phone-number").val(),
        email: $("#email").val(),
        id: $("#id").val()
    };

    if (reservationArray.length >= 5) {
        postReservation();
    } else {
        postWaitlist();
    }
})

module.exports = Reservation

