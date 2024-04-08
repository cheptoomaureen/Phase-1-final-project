function showMore() {
    let moreInfo = document.getElementById("more-info");
    let btn = document.getElementById("show-more-btn");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block"; // Show the additional information
        btn.innerHTML = "Show Less"; // Change button text
    } else {
        moreInfo.style.display = "none"; // Hide the additional information
        btn.innerHTML = "Show More"; // Change button text
    }
    // Function to add additional information dynamically
function addAdditionalInfo() {
  let moreInfo = document.getElementById("more-info");

  // Create elements for additional information
  let heading = document.createElement("h3");
  heading.textContent = "Additional Information";

  let paragraph = document.createElement("p");
  paragraph.textContent = "This is additional information that is added dynamically.";

  // Append elements to the more-info div
  moreInfo.appendChild(heading);
  moreInfo.appendChild(paragraph);
}
}
function showCMOContacts() {
    let cmoContacts = document.getElementById("cmo-contacts");
    let btn = document.getElementById("show-cmo-contacts-btn");

    if (cmoContacts.style.display === "none") {
        cmoContacts.style.display = "block"; // Show the CMO contacts
        btn.innerHTML = "Hide CMO Contacts"; // Change button text
    } else {
        cmoContacts.style.display = "none"; // Hide the CMO contacts
        btn.innerHTML = "Show CMO Contacts"; // Change button text
    }
}
function fetchData() {
  fetch('http://localhost:3000/equipment') // Replace 'data.json' with the path to your JSON file
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then(data => {
      displayEquipment(data.equipment); // Display equipment data
      displayCrewMembers(data.crew_members); // Display crew members data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
// Function to display equipment data
function displayEquipment(equipment) {
  const equipmentList = document.getElementById('equipment-list');
  equipment.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.description} (Manufacturer: ${item.manufacturer}, Price: $${item.price.toFixed(2)})`;
    equipmentList.appendChild(listItem);
  });
}

// Function to display crew members data
function displayCrewMembers(crewMembers) {
  const crewList = document.getElementById('crew-list');
  crewMembers.forEach(member => {
    const listItem = document.createElement('li');
    listItem.textContent = `${member.name} - ${member.position} - Email: ${member.email}, Phone: ${member.phone}`;
    crewList.appendChild(listItem);
  });
}

// Fetch data when the page loads
window.onload = fetchData;

   const flightAttendantsData = [
    { name: "Alice Johnson", contact: "(+25426353337)" ,cabin:"First class"},
    { name: "Bob Smith", contact: "(+25431725252)",cabin:"First Class" },
    { name: "Charlie Brown", contact: "(+25412387579)",cabin:"First Class" },
    {name  :"Alicia Jacob",contact:"(+254 13242541)",cabin:"Business "},
    {name  :"Ann Wainaina",contact:"(+25413522347)",cabin:"Business"},
    {name  :"Ashley Adipo",contact:"(+25497877664)",cabin:"Premium economy"},
    {name  :"Daisy Langat",contact:"(+25476888989)",cabin:"Premium economy"},
    {name  :"Emily Kyengo",contact:"(+25427678728)",cabin:"Premium economy"},
    {name  :"Mohamed Abdi",contact:"(+25476599987)",cabin:"Economy"},
    {name  :"Dolly Nelson",contact:"(+254767287893)",cabin:"Economy"},
];
// Function to display flight attendants' names and contacts
function showFlightAttendants() {
    const flightAttendantsList = document.getElementById('flight-attendants-list');
    flightAttendantsList.innerHTML = ''; // Clear previous content

    // Iterate through the flight attendants data and create list items
    flightAttendantsData.forEach(function(attendant) {
        const listItem = document.createElement('div');
        listItem.textContent = 'Name: ' + attendant.name + ', Contact: ' + attendant.contact +',cabin:' +attendant.cabin;
        flightAttendantsList.appendChild(listItem);
    });

    // Show the flight attendants list
    flightAttendantsList.style.display = 'block';
}

// Add event listener to the "Show Flight Attendants" button
document.getElementById('show-contacts-btn').addEventListener('click', function() {
    showFlightAttendants();
});
