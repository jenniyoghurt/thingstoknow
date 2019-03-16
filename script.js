function historyBack() {
    if(document.referrer == 'https://jenniyoghurt.github.io/thingstoknow/'){
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


function favouritesRotate(){
    setInterval(rotateFavourites, 2500)
}

var ayaHome = ["cards/ayaBS2.png", "cards/ayaWhite.png"];
var ayaHomeCounter = 0;
var ayaMissing = ["cards/ayaNY.png", "cards/ayaHallo.png", "cards/ayaDF.png"];
var ayaMissingCounter = 0;

var hinaHome = ["cards/hinaGemini.png", "cards/hinaBar.png", "cards/hinaTanzaku.png", "cards/hinaPastel.png"];
var hinaHomeCounter = 0;
var hinaMissing = ["cards/hinaHallo.png"];
var hinaMissingCounter = 0;

var sayoHome = ["cards/sayoGemini.png", "cards/sayoDF.png"];
var sayoHomeCounter = 0;
var sayoMissing = ["cards/sayoMermaid.png", "cards/sayoAnni2.png", "cards/sayoPiano.png", "cards/sayoTanzaku.png"];
var sayoMissingCounter = 0;

var yukinaHome = ["cards/yukinaRain.png"];
var yukinaHomeCounter = 0;
var yukinaMissing = ["cards/yukinaAnni.png", "cards/yukinaAfter.png", "cards/yukinaBirdCage.png", "cards/yukinaMermaid.png", "cards/yukinaEncore.png", "cards/yukinaBS2.png"];
var yukinaMissingCounter = 0;

var moca = ["cards/mocaAnni2.png", "cards/mocaDF.png"];
var mocaCounter = 0;

var kanon = ["cards/kanonDF.png", "cards/kanonPenguin.png"];
var kanonCounter = 0;


var makiHome = ["cards/makiConstellation.png", "cards/makiChristmasPromo.png", "cards/makiFuwaFuwa.png", "cards/makiFairy.png", "cards/makiAnimal.png", "cards/makiInit.png", "cards/makiValentines.png"];
var makiHomeCounter = 0;
var makiMissing = ["cards/makiCrayon.png", "cards/makiFruits.png", "cards/makiCircus.png", "cards/makiMagician.png", "cards/makiBirthday.png", "cards/makiMermaid.png"];
var makiMissingCounter = 0;

var yohaneHome = ["cards/yohaneNY.png", "cards/yohaneAC.png", "cards/yohaneHallo.png", "cards/yohaneValentines.png", "cards/yohaneCheshire.png"];
var yohaneHomeCounter = 0;
var yohaneMissing = ["cards/yohaneCD.png", "cards/yohaneDVD.png", "cards/yohaneBeach.png", "cards/yohaneJellyfish.png", "cards/yohanePunk.png", "cards/yohaneWBNW.png"];
var yohaneMissingCounter = 0;

var riko = ["cards/rikoAngel.png", "cards/rikoCheer.png", "cards/rikoWonderland.png"];
var rikoCounter = 0;

var eli = ["cards/eliChoir.png", "cards/eliJewel.png", "cards/eliPirate.png", "cards/eliPool.png"];
var eliCounter = 0;

/* bsfyi hat neues bild (fullbring 2) noch nicht!! bei gelegenheit updaten*/
var hitsugaya = ["cards/hitsugayaTYBW.png", "cards/hitsugayaDDR.png", "cards/hitsugayaFullbring.png", "cards/hitsugayaTagTeam.png", "cards/hitsugayaFullbring2.png"];
var hitsugayaCounter = 0;

var ichigo = ["cards/ichigoTYBW2.png", "cards/ichigoDangai.png", "cards/ichigoHellVerse.png"];
var ichigoCounter = 0;

var rukia = ["cards/rukiaTYBW.png", "cards/rukiaHallo.png"];
var rukiaCounter = 0;

var riruka = ["cards/rirukaHalloBand.png", "cards/rirukaOG.png"];
var rirukaCounter = 0;

var extra = ["cards/ginHallo.png", "cards/ishidaBond.png", "cards/kisukeTYBW.png", "cards/orihimeHallo2.png", "cards/tensaZangetsu.png", "cards/ulquiorraAnni3.png", "cards/unohanaTYBW.png", "cards/white.png"];
var extraCounter = 0;


function rotateFavourites(){
    //AYA
    ayaHomeCounter++;
    if(ayaHomeCounter >= ayaHome.length){
        ayaHomeCounter = 0;
    }
    document.getElementById("ayaHome").src = ayaHome[ayaHomeCounter];
    
    ayaMissingCounter++;
    if(ayaMissingCounter >= ayaMissing.length){
        ayaMissingCounter = 0;
    }
    document.getElementById("ayaMissing").src = ayaMissing[ayaMissingCounter];
    
    //HINA
    hinaHomeCounter++;
    if(hinaHomeCounter >= hinaHome.length){
        hinaHomeCounter = 0;
    }
    document.getElementById("hinaHome").src = hinaHome[hinaHomeCounter];
    
    hinaMissingCounter++;
    if(hinaMissingCounter >= hinaMissing.length){
        hinaMissingCounter = 0;
    }
    document.getElementById("hinaMissing").src = hinaMissing[hinaMissingCounter];
    
    //SAYO
    sayoHomeCounter++;
    if(sayoHomeCounter >= sayoHome.length){
        sayoHomeCounter = 0;
    }
    document.getElementById("sayoHome").src = sayoHome[sayoHomeCounter];
    
    sayoMissingCounter++;
    if(sayoMissingCounter >= sayoMissing.length){
        sayoMissingCounter = 0;
    }
    document.getElementById("sayoMissing").src = sayoMissing[sayoMissingCounter];
    
    //YUKINA
    yukinaHomeCounter++;
    if(yukinaHomeCounter >= yukinaHome.length){
        yukinaHomeCounter = 0;
    }
    document.getElementById("yukinaHome").src = yukinaHome[yukinaHomeCounter];
    
    yukinaMissingCounter++;
    if(yukinaMissingCounter >= yukinaMissing.length){
        yukinaMissingCounter = 0;
    }
    document.getElementById("yukinaMissing").src = yukinaMissing[yukinaMissingCounter];
    
    //KANON
    kanonCounter++;
    if(kanonCounter >= kanon.length){
        kanonCounter = 0;
    }
    document.getElementById("kanon").src = kanon[kanonCounter];
    
    //MOCA
    mocaCounter++;
    if(mocaCounter >= moca.length){
        mocaCounter = 0;
    }
    document.getElementById("moca").src = moca[mocaCounter];
    
    //MAKI
    makiHomeCounter++;
    if(makiHomeCounter >= makiHome.length){
        makiHomeCounter = 0;
    }
    document.getElementById("makiHome").src = makiHome[makiHomeCounter];
    
    makiMissingCounter++;
    if(makiMissingCounter >= makiMissing.length){
        makiMissingCounter = 0;
    }
    document.getElementById("makiMissing").src = makiMissing[makiMissingCounter];
    
    //YOHANE
    yohaneHomeCounter++;
    if(yohaneHomeCounter >= yohaneHome.length){
        yohaneHomeCounter = 0;
    }
    document.getElementById("yohaneHome").src = yohaneHome[yohaneHomeCounter];
    
    yohaneMissingCounter++;
    if(yohaneMissingCounter >= yohaneMissing.length){
        yohaneMissingCounter = 0;
    }
    document.getElementById("yohaneMissing").src = yohaneMissing[yohaneMissingCounter];
    
    //RIKO
    rikoCounter++;
    if(rikoCounter >= riko.length){
        rikoCounter = 0;
    }
    document.getElementById("riko").src = riko[rikoCounter];
    
    //ELI
    eliCounter++;
    if(eliCounter >= eli.length){
        eliCounter = 0;
    }
    document.getElementById("eli").src = eli[eliCounter];
    
    //HITSUGAYA
    hitsugayaCounter++;
    if(hitsugayaCounter >= hitsugaya.length){
        hitsugayaCounter = 0;
    }
    document.getElementById("hitsugaya").src = hitsugaya[hitsugayaCounter];
    
    //ICHIGO
    ichigoCounter++;
    if(ichigoCounter >= ichigo.length){
        ichigoCounter = 0;
    }
    document.getElementById("ichigo").src = ichigo[ichigoCounter];
    
    //RUKIA
    rukiaCounter++;
    if(rukiaCounter >= rukia.length){
        rukiaCounter = 0;
    }
    document.getElementById("rukia").src = rukia[rukiaCounter];
    
    //RIRUKA
    rirukaCounter++;
    if(rirukaCounter >= riruka.length){
        rirukaCounter = 0;
    }
    document.getElementById("riruka").src = riruka[rirukaCounter];
    
    //EXTRA
    extraCounter++;
    if(extraCounter >= extra.length){
        extraCounter = 0;
    }
    document.getElementById("extra").src = extra[extraCounter];
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

var localnatives = ["music/localnatives3.jpg", "music/localnatives1.jpg", "music/localnatives2.jpg"];
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
