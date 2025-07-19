const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

console.log(attendee);

// Function to log the attendee's name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}

// Call the function to see the result
logAttendeeName(attendee);

// Function to log the attendee's ticket price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

// Call the function to see the result
logTicketPrice(attendee);

// Function to update the ticket type
function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
    return attendee;
}

// Call the function to update and verify the result
updateTicketType(attendee, "Standard");
console.log(attendee.ticketType); // Should now log: Standard

// Function to update the ticket price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
    return attendee;
}

// Call the function to update and verify the result
updateTicketPrice(attendee, 100);
console.log(attendee.ticketPrice); // Should now log: 100

// Function to remove the 'event' property
function removeEventProperty(attendee) {
    delete attendee.event;
    return attendee;
}

// Call the function to remove and verify the result
removeEventProperty(attendee);
console.log(attendee); // Should no longer include 'event'

// Function to add a 'checkedIn' property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
    return attendee;
}

// Call the function to add and verify the result
addCheckedInProperty(attendee);
console.log(attendee); // Should now include 'checkedIn: true'