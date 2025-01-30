console.log("det funker")

const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    }, 
]
// Dette er mitt eget arbeid, klarte å fullføre 60% av oppgaven helt selv. Etter 10 min prat med studentass og fikk med meg masse gode svar til mine problemer, med engang jeg gikk tilbake
// på plassen for å sette meg ned å fortsette med det jeg fikk veiledning for, så var det så mange andre detaljer som ikke ble forklart. Endte opp med å bli stuck med ANDRE unike problemer






// let innhold = ""



// document.getElementById("info").innerHTML = innhold

// let titles = ""
// resources.map((headline)=> titles +=
// `
//             <li> <button class="knapper" > ${headline.category}</button</li>`)

// document.getElementById("title").innerHTML = titles



// let test = resources.filter(resource => resource.category === 'HTML').map(resource => document.getElementById("info").innerHTML += `<h1>${resource.category}</h1>
//                 <p>${resource.text}</p>

                
        
//                 <ul id="linker">
//                     <li><a href="#">W3Schools</a></li>
//                     <li><a href="#">HTML Living standard</a></li>
//                     <li><a href="#">HTMLcom Tutorials</a></li>
//                 </ul>`)




document.getElementById("title").innerHTML = resources
    .map(resource => `<li><button class="knapper">${resource.category}</button></li>`)
    .join("");

// Function to update content dynamically
function updateContent(category) {
    let content = resources
        .filter(resource => resource.category === category)
        .map(resource => `
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul id="linker">
                ${resource.sources
                    .map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`)
                    .join("")
                }
            </ul>
        `)
        .join(""); 

    document.getElementById("info").innerHTML = content;
}

// Add event listeners to buttons
document.querySelectorAll('.knapper').forEach(button => {
    button.addEventListener('click', event => {
        updateContent(event.target.textContent);
    });
});

// ✅ Automatically load "HTML" category when page loads
window.onload = () => {
    updateContent("HTML");
};




//Jeg hadde GJERNE ønsket en fasit på hvordan denne arbeidskravet skulle ha blitt gjennomført.
// Det er den eneste måten for meg å lære. Ved å kunne sammenligne med fasit og finne ut hvor jeg tok feil eller gjorde unødvendig koding. 
  