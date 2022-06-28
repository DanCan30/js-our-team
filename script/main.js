
    // Create a variable for DOM elements
const wrapper = document.getElementById("wrapper");
let addMember = document.getElementById("add-member");

    // Create an array of images that will be chosen casually when the user will create a new card
let imgPool = [
    "new-team-member-01.jpg",
    "new-team-member-02.jpg",
    "new-team-member-03.jpg",
    "new-team-member-04.jpg",
]

    // Create an empty object that will store the values of the inputs and a random image
let newMember = {};

    // Array of objects (members)
let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        imgSrc: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        imgSrc: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        imgSrc: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        imgSrc: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        imgSrc: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        imgSrc: "barbara-ramos-graphic-designer.jpg",
    },
]

createCard(0);

    // Add onclick function on the submit button
addMember.addEventListener("click", function() {

        // Take the value of the inputs
    const userName = document.getElementById("user-full-name").value;
    const userRole = document.getElementById("user-competences").value;
    
        // Store the values in the newMember empty object created before
    newMember = {
        name: userName,
        role: userRole,
        imgSrc: imgPool[randomNumber(4)],
    };
        // Push the new object in the members array
    teamMembers.push(newMember);

    createCard(teamMembers.length - 1);
});








//                                          FUNCTIONS

    // Function to create a new card
function createCard(initialIndex) {

    for ( let i = initialIndex; i < teamMembers.length; i++) {
    
            // Create a div and give it class "card"
        let card = document.createElement("div");
        card.classList.add("card");
    
            // Set the innerHTML of the div with the infos of the current member
        card.innerHTML = `
        <div class="img-container">
            <img src="./img/${teamMembers[i].imgSrc}" alt="${teamMembers[i].name}">
        </div>
        <div class="info-container">
            <h4>${teamMembers[i].name}</h4>
            <span>${teamMembers[i].role}</span>
        </div>`;
    
            // Create strings with all infos and print them in console
        let memberInfo = `${teamMembers[i].name}, ${teamMembers[i].role}, ${teamMembers[i].imgSrc}`;
        console.log(memberInfo);

            // Add the div created to the DOM
        wrapper.append(card);
    
    };
}

        // Function to generate a random number, userd to pick a random image from the imgPool array for each new card created
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }

