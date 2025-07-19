const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Function to log the attendee's name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}

// Function to log the attendee's ticket price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

// Function to update the ticket type
function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
    return attendee;
}

// Function to update the ticket price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
    return attendee;
}

// Function to remove the 'event' property
function removeEventProperty(attendee) {
    delete attendee.event;
    return attendee;
}

// Function to add a 'checkedIn' property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
    return attendee;
}

module.exports = {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
};