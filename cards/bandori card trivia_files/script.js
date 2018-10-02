var cards = [
    {name: 'rinko', url: 'https://i.bandori.party/u/c/a/910Rinko-Shirokane-Pure-%E4%BB%AE%E5%85%A5%E9%83%A8%E5%93%A1-cAh9od.png'},
    {name: 'rimi', url: 'https://i.bandori.party/u/c/a/926Rimi-Ushigome-Happy-wyzCPC.png'},
    {name: 'moca', url: 'https://i.bandori.party/u/c/a/932Moca-Aoba-Pure-8SvSKG.png'},
    {name: 'tsugumi', url: 'https://i.bandori.party/u/c/a/933Tsugumi-Hazawa-Pure-YkRXVf.png'},
    {name: 'yukina', url: 'https://i.bandori.party/u/c/a/937Yukina-Minato-Happy-2n36e3.png'},
    {name: 'lisa', url: 'https://i.bandori.party/u/c/a/938Lisa-Imai-Happy-CwNdSi.png'},
    {name: 'kokoro', url: 'https://i.bandori.party/u/c/a/942Kokoro-Tsurumaki-Cool-2DKfGH.png'},
    {name: 'tomoe', url: 'https://i.bandori.party/u/c/a/943Tomoe-Udagawa-Cool-5YJDng.png'},
    {name: 'hina', url: 'https://i.bandori.party/u/c/a/947Hina-Hikawa-Power-xSRiCO.png'},
    {name: 'kaoru', url: 'https://i.bandori.party/u/c/a/948Kaoru-Seta-Power-Ax84ea.png'},
    {name: 'aya', url: 'https://i.bandori.party/u/c/a/952Aya-Maruyama-Happy-Vw2SXZ.png'},
    {name: 'chisato', url: 'https://i.bandori.party/u/c/a/953Chisato-Shirasagi-Happy-tc47Ck.png'},
    {name: 'kasumi', url: 'https://i.bandori.party/u/c/a/957Kasumi-Toyama-Cool-Familiar-Route-4zTn6P.png'},
    {name: 'hagumi', url: 'https://i.bandori.party/u/c/a/958Hagumi-Kitazawa-Cool-Our-Beginning-VqTIio.png'},
    {name: 'misaki', url: 'https://i.bandori.party/u/c/a/962Misaki-Okusawa-Pure-Why-Is-It-Like-This-QDnyYP.png'},
    {name: 'kanon', url: 'https://i.bandori.party/u/c/a/963Kanon-Matsubara-Pure-Be-Brave-uo3B2O.png'},
    {name: 'ran', url: 'https://i.bandori.party/u/c/a/967Ran-Mitake-Cool-Scarlet-A6wqtZ.png'},
    {name: 'himari', url: 'https://i.bandori.party/u/c/a/968Himari-Uehara-Cool-Cutie-aG3wZw.png'},
    {name: 'arisa', url: 'https://i.bandori.party/u/c/a/972Arisa-Ichigaya-Happy-%E6%9C%89%E5%92%B2%E3%81%AE%E3%83%96%E3%82%B7%E3%83%89%E3%83%BC-UTKxd1.png'},
    {name: 'eve', url: 'https://i.bandori.party/u/c/a/973Eve-Wakamiya-Happy-%E6%B5%B7%E8%BE%BA%E3%81%AE%E3%83%9D%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0-6X8Pfl.png'},
    {name: 'tsugumi', url: 'https://i.bandori.party/u/c/a/977Tsugumi-Hazawa-Power-%E5%BF%83%E5%AE%89%E3%82%89%E3%81%90%E5%A0%B4%E6%89%80-PUjQqe.png'},
    {name: 'maya', url: 'https://i.bandori.party/u/c/a/978Maya-Yamato-Happy-%E7%B7%B4%E7%BF%92%E9%96%8B%E5%A7%8B-6FLUm7.png'},
    {name: 'tomoe', url: 'https://i.bandori.party/u/c/a/980Tomoe-Udagawa-Pure-PQIlXE.png'},
    {name: 'ako', url: 'https://i.bandori.party/u/c/a/981Ako-Udagawa-Pure-s5DCxX.png'},
    {name: 'yukina', url: 'https://i.bandori.party/u/c/a/985Yukina-Minato-Cool-Awash-in-an-Ocean-of-Light-XIoAqh.png'},
    {name: 'sayo', url: 'https://i.bandori.party/u/c/a/986Sayo-Hikawa-Cool-Glittering-Water-Artes-k805ht.png'},
    {name: 'tae', url: 'https://i.bandori.party/u/c/a/990Tae-Hanazono-Power-Rabbit-s-View-yFCW5I.png'},
    {name: 'saaya', url: 'https://i.bandori.party/u/c/a/991Saaya-Yamabuki-Power-Sparkling-Smile-rpQrte.png'},
    {name: 'ran', url: 'https://i.bandori.party/u/c/a/995Ran-Mitake-Happy-Rtg5UC.png'},
    {name: 'moca', url: 'https://i.bandori.party/u/c/a/996Moca-Aoba-Happy-dtKPvl.png', date: '20180910'},
    {name: 'kanon', url: 'https://i.bandori.party/u/c/a/1001Kanon-Matsubara-Power-mcwTcv.png', date: '20180920'},
    {name: 'chisato', url: 'https://i.bandori.party/u/c/a/1000Chisato-Shirasagi-Power-5GZOcy.png', date: '20180920'}
]

function lastOfGirl(n, name){
    for (var i = n; i < cards.length; i++){
        if(cards[i].name == name){
            return false;
        }
    }
    return true;
}

function test() {
    var result = "";
    var j = 0;
    for(var i = 0; (i < cards.length) && (j < 25); i++){
        if(lastOfGirl(i+1, cards[i].name)){
            result = result.concat('<img src="').concat(cards[i].url).concat('">');
            j++;
        }
        
    }
    
    document.getElementById('leastRecent4').innerHTML = result;
}