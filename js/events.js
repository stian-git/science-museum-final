// Defines the targets to put the events and also sets the current date.
const newEventsContainer = document.querySelector(".main_newevents");
const pastEventsContainer = document.querySelector(".main_pastevents");
const reserveSeatModal = document.querySelector(".seat_modal");
const todaysDate = new Date();
const daysBeforeHidingEvents = 7000;
const earliestTimeStampToShow = new Date(Date.now() - daysBeforeHidingEvents * 24 * 60 * 60 * 1000);
const modalForm = document.querySelector(".reserve_form");
const modalBackButton = document.querySelector(".cta.back");
const reservedConfirmationText = document.querySelector(".reservation_confirmed");
const requiredText = document.querySelector(".seat_modal .requirement");
const modalReserveButton = document.querySelector(".cta.reserve");
reservedConfirmationText.style.display = "none";
reserveSeatModal.style.display = "none";
// disable the reservebutton by default.
modalReserveButton.classList.add("disabled");
modalReserveButton.disabled = "true";

// A for-loop to iterate through all events in eventsData.js
function displayEvents() {
    // Sort the events (newest on top). Replace function is required to work with iOS/Safari.
    const sortedEvents = events.sort((a, b) => new Date(a.date.replace(" ", "T")) - new Date(b.date.replace(" ", "T")));

    for (let i = 0; i < sortedEvents.length; i++) {
        // sets the date of the current event to nextDate. Replace function is required to work with iOS/Safari.
        let nextDate = new Date(sortedEvents[i].date.replace(" ", "T"));
        // Checks if the current event date is in the past
        let buttonContent = "";
        if (nextDate > todaysDate) {
            if (sortedEvents[i].seatsleft == 0) {
                buttonContent = `<button class="cta disabled" data-eventid="${sortedEvents[i].id}" data-seats="${sortedEvents[i].seatsleft}" disabled>No seats left</button>`;
            } else {
                buttonContent = `<button class="cta" data-eventid="${sortedEvents[i].id}" data-seats="${sortedEvents[i].seatsleft}">Reserve Seat (${sortedEvents[i].seatsleft} left)</button>`;
            }
            // This event is in the future and should be displayed.
            newEventsContainer.innerHTML += `
              <div class="eventcontainer" >
                <div class="wrapper">
                  <div>
                    <h3>${sortedEvents[i].title}</h3>  
                    <p class="eventdate">${sortedEvents[i].date}</p>
                  </div>
                  ${buttonContent}
                </div> 
                <div class="eventcontent"> 
                  <img src="${sortedEvents[i].image}" title="${sortedEvents[i].title}" alt="${sortedEvents[i].title}" aria-label="${sortedEvents[i].title}">      
                  ${sortedEvents[i].text}
                </div>
              </div>`;
            continue;
        } else if (nextDate < earliestTimeStampToShow) {
            // If the event is in the past and older than the threshold, it should be hidden.
            continue;
        } else {
            // If the event is in the past, but not older than the treshold it should be displayed in the recent events.
            pastEventsContainer.innerHTML += `
    <div class="eventcontainer">
      <h3>${sortedEvents[i].title}</h3>  
      <p class="eventdate">${sortedEvents[i].date}</p>
      <div class="eventcontent">  
        <img src="${sortedEvents[i].image}" title="${sortedEvents[i].title}" alt="${sortedEvents[i].title}" aria-label="${sortedEvents[i].title}">
        ${sortedEvents[i].text}
      </div>
    </div>`;
            continue;
        }
    }
}
displayEvents();
// Need to be run after the content has been displayed
const allReserveSeatButtons = document.querySelectorAll(".wrapper .cta");

allReserveSeatButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const eventId = event.target.dataset.eventid;
        const availableSeats = event.target.dataset.seats;
        if (availableSeats < 5) {
            removeSeats(availableSeats);
        }
        modalReserveButton.dataset.eventid = eventId;
        modalReserveButton.dataset.seats = availableSeats;
        reserveSeatModal.style.display = "flex";
    });
});

function removeSeats(seatsAvailable) {
    const allSeatOptions = document.querySelectorAll(".seat_modal option");
    seatsToRemove = allSeatOptions.length - seatsAvailable;
    for (i = allSeatOptions.length - 1; i > seatsAvailable - 1; i--) {
        allSeatOptions[i].style.display = "none";
    }
}

modalBackButton.addEventListener("click", (event) => {
    event.preventDefault();
    reserveSeatModal.style.display = "none";
    reservedConfirmationText.style.display = "none";
    modalReserveButton.disabled = false;
    modalReserveButton.classList.remove("disabled");
    modalBackButton.classList.add("grey");
    modalBackButton.classList.remove("disabled");
    reservedConfirmationText.style.display = "none";
    // show all seatOptions to reset if previously removed some
    const allSeatOptions = document.querySelectorAll(".seat_modal option");
    allSeatOptions.forEach((option) => {
        option.style.display = "block";
    });
});

modalReserveButton.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedSeats = document.querySelector("#seatnumbers").value;
    // Reset current selection to 1, to avoid having a default selection that is not available.
    document.querySelector("#seatnumbers").value = 1;
    const newSeatCount = event.target.dataset.seats - selectedSeats;
    const eventId = event.target.dataset.eventid;
    const reserveSeatButton = document.querySelector(`[data-eventid="${eventId}"]`);
    reserveSeatButton.dataset.seats = newSeatCount;
    reserveSeatButton.innerText = `Reserve Seat (${newSeatCount} left)`;
    if (newSeatCount == 0) {
        // Disable reserve-button
        reserveSeatButton.innerText = `No seats left`;
        reserveSeatButton.disabled = true;
        reserveSeatButton.classList.add("disabled");
    } else {
        reserveSeatButton.innerText = `Reserve Seat (${newSeatCount} left)`;
    }

    const normalButtonText = modalReserveButton.innerText;
    // Some fuzz to switch buttons in modal, with effect to temp. disable back-button.
    modalReserveButton.innerText = "Reserving...";
    modalReserveButton.disabled = true;
    modalBackButton.disabled = true;
    modalBackButton.classList.add("grey");
    modalBackButton.classList.add("disabled");
    setTimeout(() => {
        modalReserveButton.innerText = normalButtonText;
        modalReserveButton.classList.add("disabled");
        modalBackButton.classList.remove("grey");
        modalBackButton.classList.remove("disabled");
        modalBackButton.disabled = false;
        reservedConfirmationText.style.display = "block";
    }, 2000);
});

modalForm.addEventListener("input", () => {
    document.querySelector("#email").value;
    const currentEmail = document.querySelector("#email").value;
    if (validateEmail(currentEmail)) {
        // Enable reserve-button;
        modalReserveButton.disabled = false;
        modalReserveButton.classList.remove("disabled");
        requiredText.style.display = "none";
    } else {
        // Disable Reserve-button
        modalReserveButton.disabled = true;
        modalReserveButton.classList.add("disabled");
        requiredText.style.display = "block";
    }
});

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
