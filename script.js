const infoCollected = [
  {
    name: "GLIESE 667CC",
    type: "SuperEarth",
    mass: "4.5 - 5",
    radius: "1.5",
    info: "Gliese 667 Cc is significant in the study of exoplanets because of its potential habitability and proximity to Earth. It serves as a target for further astronomical observations to understand more about its atmosphere and surface conditions.",
    link: "https://www.solarsystemquick.com/universe/gliese-667cc",
    img: "gliese-667cc-removebg-preview.png",
    height: 200,
    width: 260,
  },
  {
    name: "Kepler-22b",
    type: "SuperEarth",
    mass: "2.4 - 6.6",
    radius: "2.4",
    info: "Kepler-22b is significant for the study of potentially habitable exoplanets. It was one of the first confirmed planets in the habitable zone of a star similar to our Sun, making it a key target for understanding the conditions that could support life beyond Earth",
    link: "https://www.space.com/24128-kepler-22b.html",
    img: "mainimage_Kepler22b_Planet-removebg-preview.png",
    height: 233,
    width: 280,
  },
  {
    name: "KEPLER-62f",
    type: "SuperEarth",
    mass: "1.4 - 3",
    radius: "1.4",
    info: "Kepler-62f is significant in the search for potentially habitable exoplanets. It represents one of the many Earth-sized candidates that could possess the right conditions for life, making it an important target for future observations and studies in astrobiology.",
    link: "https://phys.org/news/2016-05-combined-climate-orbit-kepler-62f-sustain.html",
    img: "5748162991463-removebg-preview.png",
    height: 180,
    width: 280,
  },
  {
    name: "PROXIMA CENTAURI B",
    type: "Earth-like",
    mass: "1.17",
    radius: "1.08",
    info: "Proxima Centauri b is particularly significant because it is the closest potentially habitable exoplanet to Earth, making it a prime target for future studies and observations in the search for extraterrestrial life. Its proximity offers unique opportunities for exploration and potential future missions.",
    link: "https://theplanets.org/proxima-centauri-b/",
    img: "Proxima-Centauri-b-removebg-preview.png",
    height: 180,
    width: 250,
  },
  {
    name: "TRAPPIST-1e",
    type: "Earth-like",
    mass: "0.77",
    radius: "0.91",
    info: "The planet is one of the most Earth-like worlds found. It is extremely similar to Earth physically, with 91% the radius, 77% the mass, 102.4% the density (5.65 g/cm3), and 93% the surface gravity of Earth. TRAPPIST-1e is confirmed to be a terrestrial planet with a solid, rocky surface. It is cool enough for liquid water to pool on the surface, but not too cold for it to freeze like on TRAPPIST-1f, g, and h. The planet receives a stellar flux 0.604 times that of Earth, about a third lower than that of Earth but significantly more than that of Mars. ",
    link: "https://astronomical.fandom.com/wiki/TRAPPIST-1e",
    img: "TRAPPIST-1e_2018_impression-removebg-preview.png",
    height: 200,
    width: 200,
  },
];

const planetConatinerWrapper = document.querySelector(
  "#planetConatinerWrapper"
);

infoCollected.forEach((element) => {
  let node_ = `
    <div class="planetContainer">
        <div class="info">
        <h1>${element.name} <span>${element.type}</span></h1>
        <div>
            <span class="p_mass"><b>Mass: </b>${element.mass} times earth</span>
            <span class="p_radius"><b>Radius: </b>${element.radius} times earth</span>
            <p>${element.info} <br> <a href="${element.link}">Learn more</a>
            </p>
        </p>
        </div>
    </div>
    <img
    src="./images/${element.img}" alt="${element.name}"
    height="${element.height}px"
    width="${element.width}px"
    />`;

  planetConatinerWrapper.innerHTML =
    planetConatinerWrapper.innerHTML.concat(node_);
});
