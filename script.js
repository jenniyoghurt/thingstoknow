var popupOpen = ""

function hideAll(except) {
    if ((except != "home") && ($("#homeBox").is(":visible"))) {
        $( "#homeBox" ).slideToggle( "slow", "swing" );
    }
    if ((except != "profile") && ($("#profileBox").is(":visible"))) {
        $( "#profileBox" ).slideToggle( "slow", "swing" );
    }
    if ((except != "favs") && ($("#favsBox").is(":visible"))) {
        $( "#favsBox" ).slideToggle( "slow", "swing" );
    }
    if ((except != "notes") && ($("#notesBox").is(":visible"))) {
        $( "#notesBox" ).slideToggle( "slow", "swing" );
    }
    if ((except != "asterisk") && ($("#asteriskBox").is(":visible"))) {
        $( "#asteriskBox" ).slideToggle( "slow", "swing" );
    }
    if ((except != "art") && ($("#artBox").is(":visible"))) {
        $( "#artBox" ).slideToggle( "slow", "swing" );
    }
    if ((except != "kofi") && ($("#kofiBox").is(":visible"))) {
        $( "#kofiBox" ).slideToggle( "slow", "swing" );
    }
    
    $('.button').css('background-color', 'rgba(252, 245, 238, 1)');
    
    if(popupOpen != ""){
        closePopup(popupOpen)
    }
}
    
function makeVis(box) {
    var str1 = "#"
    var str = str1.concat(box.concat("Box"))
    if(!($(str).is(":visible"))) {
        $(str).slideToggle( "slow", "swing" );
    }
    
    var buttonStr = str1.concat(box.concat("Button"));
    $(buttonStr).style; //findet das element aber style funktioniert nicht vllt wegen jqery
    $(buttonStr).css('background-color', 'rgba(255, 253, 250, 1)');
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

function showKofi() {
    hideAndShow("kofi")
}




function popup(card) {
    var str = "#"
    var str2 = str.concat(card)
    var popup = str2.concat("Popup")
    $(popup).slideDown( "slow", "swing");
    popupOpen = card;
}

function closePopup(card) {
    var str = "#"
    var str2 = str.concat(card)
    var popup = str2.concat("Popup")
    $(popup).slideUp( "slow", "swing");
}