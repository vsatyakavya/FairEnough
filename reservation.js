

$("#submit-btn").on("click", function(event){
    const newReservation = {
        name: $("#name").val(),
        phoneNum: $("#phone-number").val(),
        email: $("#email").val(),
        id: $("#id").val()
    };
    $.post("/api/reserve", newReservation)
        .then(function(data){
            console.log("Reservation: " + data);
        })
})

module.exports = Reservation
