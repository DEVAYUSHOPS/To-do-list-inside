var addNew = document.querySelector("#ok");
var eventInput = document.querySelector("#events");
var venueInput = document.querySelector("#venue");
var timeInput = document.querySelector("#time");
var li = document.querySelector("ol");
addNew.addEventListener("click", function () {
    
    let eventValue = eventInput.value;
    let venueValue = venueInput.value;
    let timeValue = timeInput.value;
    // alert(eventValue + ' ' +venueValue+ ' ' + timeValue);
    if (eventValue === '' || venueValue === '' || timeValue === '') {
        alert("Please fill all cols!");
    } else {
        var listItem = '<li class="list-group-item d-flex justify-content-between align-items-start">' + 
                        '<div class="ms-2 me-auto">'+
                        '<div class="fw-bold" id="eventVal"></div>'+
                        '<p id="venueVal"></p>'+
                        '<p id="timeVal"></p>'+
                        '</div>'+
                        '<span class="badge bg-dark close"><i class="fa fa-trash fa-3x" aria-hidden="true"></i></span>'+
                        '</li>';
        li.insertAdjacentHTML('afterend',listItem);

        let asEvent  = document.querySelector("#eventVal");
        let asVenue = document.querySelector("#venueVal");
        let asTime  = document.querySelector("#timeVal");


        asEvent.innerHTML = "Event: " + eventValue;
        asVenue.innerHTML= "Venue: " + venueValue;
        asTime.innerHTML = "Time: " + timeValue;


        eventInput.value = '';
        venueInput.value = '';
        timeInput.value = '';
    }
    
});

document.addEventListener("click", function(event){
    if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
    else if (event.target.tagName === "I"){
        event.target.parentElement.parentElement.remove();
    }
});
