window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
        "--scroll",
        Math.min(window.pageYOffset / (document.body.offsetHeight - window.innerHeight), 0.9999)
        );
    },
    false
);


function loadArt() {
    for(item of artPieces) {
        document.getElementById("art").appendChild(createContainer(item));
    }
}

function createContainer(item) {
    let container = document.createElement("div");
    container.setAttribute("class", "artContainer");
    container.appendChild(createArtItem(item))
    return container;
}

function createArtItem(item) {
    let artItem = document.createElement("div");
    artItem.appendChild(createImage(item.alt, item.file));
    artItem.appendChild(createSubtitle(item));
    return artItem;
}

function createImage(alt, file) {
    let img = document.createElement("img")
    img.setAttribute("alt", alt)
    img.setAttribute("src", "art/" + file);
    return img;
}

function createSubtitle(item) {
    let paragraph = document.createElement("p");
    let text = document.createTextNode(item.title);
    paragraph.appendChild(text);
    return paragraph;
}

const artPieces = [
    {
        file: "keeping you around.jpg",
        alt: "art for keeping you around - girl with slumped body language, head hanging, holding a floating balloon. Muted colours",
        title: "keeping you around."
    },
    {
        file: "nahida.jpg",
        alt: "drawing of nahida from genshin impact in a green orb, sleeping",
        title: "nahida."
    },
    {
        file: "swimming.jpg",
        alt: "painting of a girl swimming from below, background (the water surface) resembles a night sky",
        title: "swimming."
    },
    {
        file: "try not to fall apart.jpg",
        alt: "painting of a woman, splitting in two from the top, trying to hold herself together. flowers growing from the tear.",
        title: "try not to fall apart."
    },
    {
        file: "blooming.jpg",
        alt: "oil painting showing a hand and flowers growing out of the sleeve",
        title: "blooming."
    },
    {
        file: "venus.png",
        alt: "chibi drawing of sailor venus",
        title: "venus."
    },
    {
        file: "welcome to the dcc.jpg",
        alt: "painting of a laughing woman, looks like a poster. one eye is ripped off, revealing the same eye, but with a shocked expression.",
        title: "welcome to the dcc."
    },
    {
        file: "somewhere i belong.jpg",
        alt: "profile view drawing of a man, background full of red particles",
        title: "somewhere i belong."
    },
    {
        file: "mora l panic.jpg",
        alt: "digital painting of a girl",
        title: "mora l. panic"
    },
    {
        file: "figure 8.jpg",
        alt: "girl floating through stars, her body and some text forming a lying figure 8",
        title: "figure 8."
    },
    {
        file: "hitsugaya.jpg",
        alt: "digital painting of hitsugaya in bankai form, a dragon surrounding him",
        title: "hitsugaya."
    },
    {
        file: "clean.jpg",
        alt: "digital drawing of a girl",
        title: "clean."
    },
    {
        file: "don't. run.jpg",
        alt: "fineliner drawing of a man, and the man running away, both forms connected by their own lines breaking up and connecting",
        title: "don't. run."
    },
    {
        file: "shinigami ayaka.jpg",
        alt: "chibi drawing of ayaka from genshin impact in clothes of a shinigami captain from bleach",
        title: "shinigami ayaka."
    },
    {
        file: "soda.jpg",
        alt: "oil painting of a girl floating with bubbles",
        title: "soda."
    },
    {
        file: "king of the clouds-1.jpg",
        alt: "digital drawing of a girl, rays emitting from her hand",
        title: "king of the clouds."
    },
    {
        file: "king of the clouds-2.jpg",
        alt: "digital drawing of a girl, breath turning into a cloud",
        title: "king of the clouds."
    },
    {
        file: "king of the clouds-3.jpg",
        alt: "digital drawing of a girl, crying rays",
        title: "king of the clouds."
    },
    {
        file: "ayaka day off.jpg",
        alt: "painting of ayaka from genshin impact, on a hill, relaxed atmosphere",
        title: "ayaka."
    }
]