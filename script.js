var popupOpen = "";

function hideAll(except) {
    if ((except !== "home") && ($("#homeBox").is(":visible"))) {
        $("#homeBox").slideToggle( "slow", "swing" );
    }
    if ((except !== "profile") && ($("#profileBox").is(":visible"))) {
        $( "#profileBox" ).slideToggle( "slow", "swing" );
    }
    if ((except !== "favs") && ($("#favsBox").is(":visible"))) {
        $( "#favsBox" ).slideToggle( "slow", "swing" );
    }
    if ((except !== "notes") && ($("#notesBox").is(":visible"))) {
        $( "#notesBox" ).slideToggle( "slow", "swing" );
    }
    if ((except !== "asterisk") && ($("#asteriskBox").is(":visible"))) {
        $( "#asteriskBox" ).slideToggle( "slow", "swing" );
    }
    if ((except !== "art") && ($("#artBox").is(":visible"))) {
        $( "#artBox" ).slideToggle( "slow", "swing" );
    }
    if ((except !== "playlist") && ($("#playlistBox").is(":visible"))) {
        $( "#playlistBox" ).slideToggle( "slow", "swing" );
    }
    
    $('.button').css('background-color', 'rgba(252, 245, 238, 1)');
    
    if(popupOpen != ""){
        closePopup(popupOpen);
    }
}
    
function makeVis(box) {
    var str1 = "#";
    var str = str1.concat(box.concat("Box"))
    if(!($(str).is(":visible"))) {
        $(str).slideToggle( "slow", "swing" );
    }
    
    var buttonStr = str1.concat(box.concat("Button"));
    $(buttonStr).css('background-color', 'rgba(255, 254, 252, 1)');
}
    
function hideAndShow(box) {
    hideAll(box)
    makeVis(box)
}

function showHome() {
    hideAndShow("home")
}

function showProfile() {
    hideAndShow("profile")
}

function showFavs() {
    hideAndShow("favs")
}

function showNotes() {
    hideAndShow("notes")
}

function showAsterisk() {
    hideAndShow("asterisk")
}

function showArt() {
    hideAndShow("art")
}

function showPlaylist() {
    hideAndShow("playlist")
}




function popup(card) {
    hideAll("asterisk");
    
    var str = "#";
    var str2 = str.concat(card);
    var popup = str2.concat("Popup");
    $(popup).slideDown( "slow", "swing");
    popupOpen = card;
}

function closePopup() {
    if(popupOpen != ""){
        var str = "#"
        var str2 = str.concat(popupOpen)
        var popup = str2.concat("Popup")
        $(popup).slideUp("swing");
    }
}


var filterSif = true;
var filterBan = true;
var filterBBS = true;

function checkGameFilter(game){
    if(game == 'sif') return filterSif;
    if(game == 'ban') return filterBan;
    if(game == 'bbs') return filterBBS;
}

function setGameFilter(game, value) {
    if(game == 'sif') {
        filterSif = value;
    }
    if(game == 'ban') {
        filterBan = value;
    }
    if(game == 'bbs') {
        filterBBS = value;
    }
}

function filterGame(game) {
    var str = '.';
    gameClass = str.concat(game);

    var id = '#';
    var gameId = id.concat(game);
    var gameGoals = gameId.concat('Goals');
    
    if(checkGameFilter(game)) {
        $(gameClass).hide();
        $(gameGoals).hide();
        setGameFilter(game, false);
    } else {
        $(gameClass).show();
        $(gameGoals).show();
        setGameFilter(game, true);
    }
    
    
    var button = '#filter';
    var buttonStr = button.concat(game);
    
    $(buttonStr).toggleClass("filterInactive");
}



function showArtDiv(artDiv){
    var div = ".";
    div = div.concat(artDiv);
    var heading = "#";
    heading = heading.concat(artDiv);
    if($(div).is(":visible")){
        $(heading).css('background-color', 'rgba(252, 245, 238, 1)');
    } else {
        $(heading).css('background-color', 'rgba(255, 254, 252, 1)');
    }
    $(div).slideToggle("slow");
    
    
}


var musicSlideIndex = 1;
var fictSlideIndex = 1;

function musicPlusDivs(n) {
  showMusicDivs(musicSlideIndex += n);
}

function fictionalsPlusDivs(n) {
    showFictionalsDivs(fictSlideIndex += n);
}

function showMusicDivs(n) {
  var i;
  var x = document.getElementsByClassName('musicSlides');
    
  if (n > (x.length - 3)) {musicSlideIndex = 1}    
  if (n < 1) {musicSlideIndex = x.length - 3}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[musicSlideIndex-1].style.display = "inline";  
  x[musicSlideIndex].style.display = "inline";  
  x[musicSlideIndex+1].style.display = "inline";  
  x[musicSlideIndex+2].style.display = "inline";  
    
}


function showFictionalsDivs(n) {
   
  var i;
  var x = document.getElementsByClassName('fictionalsSlides');
    
  if (n > (x.length - 3)) {fictSlideIndex = 1}    
  if (n < 1) {fictSlideIndex = x.length - 3}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[fictSlideIndex-1].style.display = "inline";  
  x[fictSlideIndex].style.display = "inline";  
  x[fictSlideIndex+1].style.display = "inline";  
  x[fictSlideIndex+2].style.display = "inline";  
    
}


var curMusicSlide = "nbt";
var textsMusicSlides = {
    nbt:    "<h5>nohing but thieves</h5><br><p>almost love all songs equally but i need air, six billion and afterlife are extra dear to me. i could list why every single song is my favourite - instead i'll just mention that hanging is my best friend.</p><p>nbt mean a big deal to me. it's more than just the music - it's travelling, personal growth and a constant in the mad times after leaving school. it's being part of something. ::</p><p>(i mean, the music is good too.)</p>",
    oneR:   "<h5>one republic</h5><p>while i love everything they've released, the reason they're here is their debut album, dreaming out loud. it was one of the first albums i had and listened to, and will forever be one of my absolute favourites.</p>",
    kate:   "<h5>kate nash - made of bricks</h5><p>i'm not keeping up with what she's doing nowadays, but made of bricks is one brilliant album. many themes that ring with me... being alone and happy, being alone and sad.</p>",
    lp:     "<h5>linkin park</h5><p>minutes to midnight is the first album i've ever bought, but meteora is the one i know by heart, the one that's closest to my heart. weird when the singer of such an important band dies on your birthday. i've always admired how they changed their style with every album, how they've constantly reinvented themselves. meteora was my thing, but they put something out for so many different music tastes.</p>",
    locN:   "<h5>local natives</h5><p>found bowery on a plane - now it's my favourite song, of all songs. their music is so special, it feels like they transport me into a different world, no matter whether it's complete song or them walking down the street with a guitar. i love harmonies and layers in a song, discovering more at each listen. their music is so me.</p>",
    bas:    "<h5>bastille</h5><p>i like everything bastille put out, haven't heard a bad thing yet. but like it's often the case for me, i like the extras so much more. bonus tracks are always my favourites. i like all ophas better than the studio albums. vs was with me in a very exciting and very memorable time of my life, so it's likely it's always gonna be my favourite. wild world felt more experimental than bad blood, so i'm excited to see where they go next.</p>"
}

function favsInit() {
    openMusicSlide('nbt');
    openCharSlide('nept');
}

function openMusicSlide(item){
    document.getElementById(curMusicSlide.concat('Favs')).style.backgroundColor = "rgba(252, 240, 230, 0)";
    
    $('#'.concat(curMusicSlide.concat('Favs'))).addClass('greysc');
    
    
    if(curMusicSlide == "nbt" || curMusicSlide == "oneR" || curMusicSlide == "kate"){
        document.getElementById(curMusicSlide.concat('Favs').concat('2')).style.backgroundColor = "rgba(252, 240, 230, 0)"; 
        $('#'.concat(curMusicSlide.concat('Favs')).concat('2')).addClass('greysc');
    }
    
    var text = "";
    switch (item) {
        case 'nbt':
            text = textsMusicSlides.nbt;
            break;
        case 'oneR':
            text = textsMusicSlides.oneR;
            break;
        case 'kate':
            text = textsMusicSlides.kate;
            break;
        case 'lp':
            text = textsMusicSlides.lp;
            break;
        case 'locN':
            text = textsMusicSlides.locN;
            break;
        case 'bas':
            text = textsMusicSlides.bas;
            break;
    }
    
    document.getElementById('musicSlide').innerHTML = text;
    
    
    document.getElementById(item.concat('Favs')).style.backgroundColor = "rgba(252, 240, 230, 1)"; $('#'.concat(item.concat('Favs'))).removeClass('greysc');
    
    curMusicSlide = item;
    
    if(item == "nbt" || item == "oneR" || item == "kate"){
        document.getElementById(item.concat('Favs').concat('2')).style.backgroundColor = "rgba(252, 240, 230, 1)"; 
        $('#'.concat(item.concat('Favs')).concat('2')).removeClass('greysc');
    }
    
   
}


var curCharSlide = "nept";

function openCharSlide(item){
    
    document.getElementById(curCharSlide.concat('Favs')).style.backgroundColor = "rgba(252, 240, 230, 0)";
    
    $('#'.concat(curCharSlide.concat('Favs'))).addClass('greysc');
    
    
    if(curCharSlide == "nept" || curCharSlide == "aya" || curCharSlide == "toshi"){
        document.getElementById(curCharSlide.concat('Favs').concat('2')).style.backgroundColor = "rgba(252, 240, 230, 0)"; 
        $('#'.concat(curCharSlide.concat('Favs')).concat('2')).addClass('greysc');
    }
    
    
    document.getElementById('fictSlide').innerHTML = item;
    
    
    document.getElementById(item.concat('Favs')).style.backgroundColor = "rgba(252, 240, 230, 1)"; $('#'.concat(item.concat('Favs'))).removeClass('greysc');
    
    curCharSlide = item;
    
    if(item == "nept" || item == "aya" || item == "toshi"){
        document.getElementById(item.concat('Favs').concat('2')).style.backgroundColor = "rgba(252, 240, 230, 1)"; 
        $('#'.concat(item.concat('Favs')).concat('2')).removeClass('greysc');
    }
    
   
}

