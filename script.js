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







var active = "nbt";

function favActive(id){
    document.getElementById(active).classList.add('inactive');
    document.getElementById(id).classList.remove('inactive');
    active = id;
    
    switch(id){
        case 'nbt': 
            favName = "nothing but thieves";
            break;
        case 'localnatives':
            favName = "local natives";
            break;
        case 'theoralcigarettes':
            favName = "the oral cigarettes (fixion)";
            break;
        case 'coldplay':
            favName = "coldplay";
            break;
        case 'youmeatsix':
            favName = 'you me at six';
            break;
        case 'bastille':
            favName = "bastille (esp. vs)";
            break;
        case 'onerepublic':
            favName = "one republic (esp dreaming out loud)";
            break;
        case 'everythingeverything':
            favName = "everything everything";
            break;
        case 'katenash':
            favName = "made of bricks by kate nash";
            break;
        case "linkinpark":
            favName = "linkin park";
            break;
        case "thefray":
            favName = "how to save a life and the fray by the fray";
            break;
        case 'thescript':
            favName = "the script by the script";
            break;
        case 'broods':
            favName = "evergreen by broods";
            break;
        case 'qotsa':
            favName = "queens of the stone age";
            break;
        case 'sohn':
            favName = "sohn";
            break;
    }
    
    document.getElementById('favName').innerHTML = favName;
}



function musicRotate(){
    setInterval(rotateMusic, 2500);
}

var nbt = ["music/nbt1.jpg", "music/nbt2.jpg", "music/nbt3.jpg"];
var nbtCounter = 0;

var localnatives = ["music/localnatives3.jpg", "music/localnatives4.jpg", "music/localnatives1.jpg", "music/localnatives2.jpg"];
var localnativesCounter = 0;

var coldplay = ["music/coldplay6.jpg", "music/coldplay7.jpg", "music/coldplay1.jpg", "music/coldplay2.jpg", "music/coldplay3.jpg", "music/coldplay4.jpg", "music/coldplay5.jpg"];
var coldplayCounter = 0;

var youmeatsix = ["music/youmeatsix6.jpg", "music/youmeatsix1.jpg", "music/youmeatsix2.jpg", "music/youmeatsix3.jpg", "music/youmeatsix4.jpg", "music/youmeatsix5.jpg"];
var youmeatsixCounter = 0;

var bastille = ["music/bastille2.jpg", "music/bastille3.jpg", "music/bastille4.jpg", "music/bastille1.jpg"];
var bastilleCounter = 0;

var onerepublic = ["music/onerepublic1.jpg", "music/onerepublic2.jpg", "music/onerepublic3.jpg", "music/onerepublic4.jpg"];
var onerepublicCounter = 0;

var everythingeverything = ["music/everythingeverything3.jpg", "music/everythingeverything1.jpg", "music/everythingeverything2.jpg"];
var everythingeverythingCounter = 0;

var linkinpark = ["music/linkinpark2.jpg", "music/linkinpark3.jpg", "music/linkinpark1.jpg"];
var linkinparkCounter = 0;

var thefray = ["music/thefray1.jpg", "music/thefray2.jpg"];
var thefrayCounter = 0;

var thescript = ["music/thescript1.jpg", "music/thescript2.jpg"];
var thescriptCounter = 0;

var qotsa = ["music/qotsa5.jpg", "music/qotsa6.jpg", "music/qotsa7.jpg", "music/qotsa2.jpg", "music/qotsa3.jpg", "music/qotsa4.jpg"];
var qotsaCounter = 0;

var sohn = ["music/sohn1.jpg", "music/sohn2.jpg"];
var sohnCounter = 0;

function rotateMusic(){
    //NBT
    nbtCounter++;
    if(nbtCounter >= nbt.length){
        nbtCounter = 0;
    }
    document.getElementById("nbt").src = nbt[nbtCounter];
    
    //LOCAL NATIVES
    localnativesCounter++;
    if(localnativesCounter >= localnatives.length){
        localnativesCounter = 0;
    }
    document.getElementById("localnatives").src = localnatives[localnativesCounter];
    
    //COLDPLAY
    coldplayCounter++;
    if(coldplayCounter >= coldplay.length){
        coldplayCounter = 0;
    }
    document.getElementById("coldplay").src = coldplay[coldplayCounter];
    
    //YOU ME AT SIX
    youmeatsixCounter++;
    if(youmeatsixCounter >= youmeatsix.length){
        youmeatsixCounter = 0;
    }
    document.getElementById("youmeatsix").src = youmeatsix[youmeatsixCounter];
    
    //BASTILLE
    bastilleCounter++;
    if(bastilleCounter >= bastille.length){
        bastilleCounter = 0;
    }
    document.getElementById("bastille").src = bastille[bastilleCounter];
    
    //ONEREPUBLIC
    onerepublicCounter++;
    if(onerepublicCounter >= onerepublic.length){
        onerepublicCounter = 0;
    }
    document.getElementById("onerepublic").src = onerepublic[onerepublicCounter];
    
    //EVERYTHING EVERYTHING
    everythingeverythingCounter++;
    if(everythingeverythingCounter >= everythingeverything.length){
        everythingeverythingCounter = 0;
    }
    document.getElementById("everythingeverything").src = everythingeverything[everythingeverythingCounter];
    
    //LINKIN PARK
    linkinparkCounter++;
    if(linkinparkCounter >= linkinpark.length){
        linkinparkCounter = 0;
    }
    document.getElementById("linkinpark").src = linkinpark[linkinparkCounter];
    
    //THE FRAY
    thefrayCounter++;
    if(thefrayCounter >= thefray.length){
        thefrayCounter = 0;
    }
    document.getElementById("thefray").src = thefray[thefrayCounter];
    
    //THE SCRIPT
    thescriptCounter++;
    if(thescriptCounter >= thescript.length){
        thescriptCounter = 0;
    }
    document.getElementById("thescript").src = thescript[thescriptCounter];
    
    //QOTSA
    qotsaCounter++;
    if(qotsaCounter >= qotsa.length){
        qotsaCounter = 0;
    }
    document.getElementById("qotsa").src = qotsa[qotsaCounter];
    
    //SOHN
    sohnCounter++;
    if(sohnCounter >= sohn.length){
        sohnCounter = 0;
    }
    document.getElementById("sohn").src = sohn[sohnCounter];
}
