function historyBack() {
    var referrerParts = document.referrer.split('/');
    var lastPage = referrerParts[referrerParts.length - 1];
    if(lastPage == "thingstoknow.html" || lastPage == "games.html"){
        window.history.back();
    } else {
        window.open("index.html","_self")
    }
}

function showArtDiv(artDiv){
    var div = ".".concat(artDiv);
    var heading = "#".concat(artDiv);
    if($(div).is(":visible")){
        $(heading).css('background-color', '#fff2f9');
    } else {
        $(heading).css('background-color', '#fffdfe');
    }
    $(div).slideToggle("slow");
    
}


function copyFC(code) {
  var copyText = document.getElementById(code);
    copyText.style.display = "block";
  copyText.select();
  document.execCommand("copy");
    copyText.style.display = "none";
  alert("Code copied to clipboard!\n" + copyText.value);
}



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
