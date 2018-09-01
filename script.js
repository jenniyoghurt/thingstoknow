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
