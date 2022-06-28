
const wrapper = document.getElementById("wrapper");

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

for ( let i = 0; i < teamMembers.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="img-container">
        <img src="./img./${teamMembers[i].imgSrc}" alt="${teamMembers[i].name}">
    </div>
    <div class="info-container">
        <h4>${teamMembers[i].name}</h4>
        <span>${teamMembers[i].role}</span>
    </div>`;






    let memberInfo = `${teamMembers[i].name}, ${teamMembers[i].role}, ${teamMembers[i].imgSrc}`;
    console.log(memberInfo);
    wrapper.append(card);
}