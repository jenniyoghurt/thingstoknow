var popupOpen = "";

function hideLoading(){
    $('#loading').fadeOut(500);
}

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
    favsInit();
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
    if(popupOpen != ""){
        closePopup(popupOpen);
    }
    
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
    var div = ".".concat(artDiv);
    var heading = "#".concat(artDiv);
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
    bas:    "<h5>bastille</h5><p>i like everything bastille put out, haven't heard a bad thing yet. but like it's often the case for me, i like the extras so much more. bonus tracks are always my favourites. i like all ophas better than the studio albums. vs was with me in a very exciting and very memorable time of my life, so it's likely it's always gonna be my favourite. wild world felt more experimental than bad blood, so i'm excited to see where they go next.</p>",
    coldplay:   "<h5>coldplay</h5><p>people say they get sad when listening to coldplay, but to me they've always sounded of hope. one of the bands i connect with the most, like i get their message.</p><p>i love the night. quiet and calm, like the bottom of a pool. midnight captures this feeling better than any other song i know.</p>",
    fray:   "<h5>the fray</h5><p>the fray just make me very nostalgic. they were one of my favourites back in the day, and while i'm not keeping up with newer stuff how to save a life and the fray are still albums i listen to every once in a while.</p><p>vienna is one of the examples where a song i've always loved suddenly became a song that's very relevant lyrically. funny how these things work out sometimes. </p>",
    broods: "<h5>broods - evergreen</h5><p>evergreen is an album that lyrically described a couple years of my life like it was written for me. i love the harmonies and electronic elements, it all works so well together to create something beautiful.",
    ee:    "<h5>everything everything</h5><p>i'm not a person who cares about lyrics a lot. everything everything seem to arrange random words in a way that sounds good, and turn it into a perfect song. can't say i like a fever dream as much as the other albums, but a couple of the songs of this era, especially breadwinner, still sound absolutely right so i'll see where they go next.</p>",
    toc:    "<h5>the oral cigarettes - fixion</h5><p>i rarely like an album this much at first listen, and with every listen this one just got better. top tier guitars. i haven't gotten round to listening to their other albums yet, but this one has become one of my favourite albums ever in no time.</p>",
    script: "<h5>the script - the script</h5><p>i love science & faith, i like #3, sound of silence is decent. but their debut album is my absolute favourite. funnily enough, it's the only album i like with a song i can't stand, to the point it's not on my phone. but any of the other songs i could never get enough of.</p>",
    ymas:   "<h5>you me at six</h5><p>you me at six are pretty much the only reason i ever lose my voice besides colds. their gigs are so much fun, their music is, and josh franceschi's voice is my favourite on the planet. (one of two bands i like that have ever come to my hometown, which is an extra plus.)</p>"
}
var textsCharSlides = {
    nept:   "<h5>kaiou michiru - sailor neptune</h5><h6>-sailor moon-</h6><p>i relate to michiru in a lot of ways, plus i'm always drawn to water characters. the general outer senshi vibe is my thing, but her sweet elegance and kindness makes her my number one sailor senshi.",
    aya:    "<h5>maruyama aya</h5><h6>-bang dream! girls band party-</h6><p>my sweetheart. i love her so much, seeing her will always make me smile. i admire her for working so hard, we're so similar in some ways and so different in others. she means the world to me.",
    toshi:  "<h5>hitsugaya toshiro</h5><h6>-bleach-</h6><p>i don't know if it's just the fact i'm drawn to powers involving water, people who excel at what they do, his personality and morals - i love all characters in bleach so much, but he's one of my two favourites.",
    maki:   "<h5>nishikino maki</h5><h6>-love live!-</h6><p>i find it incredibly hard to put into words why i like maki. we're not much alike, i guess it's the cool vibe, how skilled she is, how proud she is about santa visiting her and how she treasures his note.</p>",
    anju:   "<h5>maaka anju</h5><h6>-cheeky vampire-</h6><p>prodigy, quiet, incredibly kind and concerned about her sister, and quite weird. anju is my favourite of all vampires - i generally like vampires how they're portrayed in cheeky vampire, nice but a little quirky.",
    hina:   "<h5>hikawa hina</h5><h6>-bang dream! girls band party-</h6><p>almost tied with aya, hina is my second favourite in bandori. she's such an interesting character, apparently often misunderstood, but i relate to her so much. her relationship with sayo is so complex.</p>",
    luna:   "<h5>luna lovegood</h5><h6>-harry potter-</h6><p>i like people who don't care too much about social conventions, who do their own thing. luna is so beautifully different from what people consider normal, and stands for everything i love about ravenclaw.",
    ichigo: "<h5>kurosaki ichigo</h5><h6>-bleach-</h6><p>i hardly ever like main characters. i don't know if it's because you know too much about them or because writers try too hard, it just never really works for me. but ichigo and his determination are very important to me.",
    yohane: "<h5>tsushima yoshiko / yohane</h5><h6>-love live! sunshine!!-</h6><p>her weird ways and pure character have won me over in a heartbeat. the way she's haunted by bad luck makes me want to protect her from all evil, she deserves all the good things in the world.</p>",
    minako: "<h5>aino minako - sailor venus - sailor v</h5><h6>-sailor moon, sailor v-</h6><p>i love her serious side. i love her unserious side. i love her backstory and her role in the live action show. one of my favourite scenes in all of sailor moon is when finds out that artemis is her alter ego. i love the two of them.</p>"
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
        case 'coldplay':
            text = textsMusicSlides.coldplay;
            break;
        case 'fray':
            text = textsMusicSlides.fray;
            break;
        case 'broods':
            text = textsMusicSlides.broods;
            break;
        case 'ee':
            text = textsMusicSlides.ee;
            break;
        case 'toc':
            text = textsMusicSlides.toc;
            break;
        case 'script':
            text = textsMusicSlides.script;
            break;
        case 'ymas':
            text = textsMusicSlides.ymas;
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
    
    var text = "";
    switch (item) {
        case 'nept':
            text = textsCharSlides.nept;
            break;
        case 'aya':
            text = textsCharSlides.aya;
            break;
        case 'toshi':
            text = textsCharSlides.toshi;
            break;
        case 'maki':
            text = textsCharSlides.maki;
            break;
        case 'anju':
            text = textsCharSlides.anju;
            break;
        case 'hina':
            text = textsCharSlides.hina;
            break;
        case 'luna':
            text = textsCharSlides.luna;
            break;
        case 'ichigo':
            text = textsCharSlides.ichigo;
            break;
        case 'yohane':
            text = textsCharSlides.yohane;
            break;
        case 'minako':
            text = textsCharSlides.minako;
            break;
    }
    
    document.getElementById('fictSlide').innerHTML = text;
    
    
    document.getElementById(item.concat('Favs')).style.backgroundColor = "rgba(252, 240, 230, 1)"; $('#'.concat(item.concat('Favs'))).removeClass('greysc');
    
    curCharSlide = item;
    
    if(item == "nept" || item == "aya" || item == "toshi"){
        document.getElementById(item.concat('Favs').concat('2')).style.backgroundColor = "rgba(252, 240, 230, 1)"; 
        $('#'.concat(item.concat('Favs')).concat('2')).removeClass('greysc');
    }
    
   
}

