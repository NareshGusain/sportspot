locationObj = {
    Mumbai: ["Kashi Nagar Premier league", "Laxmi Park Premier league"],
    Pune: ["Kanakia Premier league", "Cinemax Park Premier league"],
};

sportObj={
    Mumbai:['Cricket','Football'],
    Pune:['Football','Cricket']
}

// this initially renders all the tournaments
document.addEventListener("DOMContentLoaded", function () {
    var inithtml = document.getElementById('tournamentList');
    var inithtml = '';
    for (var loc in locationObj) {
        for (var i in locationObj[loc]) {
            inithtml += `
        <div class="list bree bold">
        <button class="badge" value="Load new document" onclick="newDoc()">1st January</button>
        <span id="loc">${locationObj[loc][i]}</span>
        <span>Venue: Orange Ground</span>
        <span>Time : 8 am - 12 pm</span>
        </div>
        `
        }
    }
    document.getElementById("tournamentList").innerHTML = inithtml;

});

// this func renders tournament of selected value
function updateTournamentList(selectedValue) {

    
    html = document.getElementById('tournamentList');
    html = ``;

    for (var i in locationObj[selectedValue]) {
        html += `
        <div class="list bree bold">
        <button class="badge" value="Load new document" onclick="newDoc()">1st January</button>
        <span id="loc">${locationObj[selectedValue][i]}</span>
        <span>Venue: Orange Ground</span>
        <span>Time : 8 am - 12 pm</span>
        </div>
        `
    }
    document.getElementById("tournamentList").innerHTML = html;

    var dphtml = document.getElementById('dropdownBtn');
    dphtml = ``;
    dphtml += `${selectedValue}`;
    document.getElementById("dropdownBtn").innerHTML = dphtml;

    localStorage.setItem("Location",selectedValue);
}

// func for sport

function updateTournamentListSp(selectedSport) {
    html = document.getElementById('tournamentList');
    html = ``;
    var selectedLoc = localStorage.getItem('Location');

    for (var i in sportObj[selectedLoc]) {
        if(selectedSport == sportObj[selectedLoc][i]){
            html += `
            <div class="list bree bold">
            <button class="badge" value="Load new document" onclick="newDoc()">1st January</button>
            <span id="loc">${locationObj[selectedLoc][i]}</span>
            <span>Venue: Orange Ground</span>
            <span>Time : 8 am - 12 pm</span>
            </div>
            `
        }
    }
    document.getElementById("tournamentList").innerHTML = html;

    var dphtml = document.getElementById('dropdownBtnsp');
    dphtml = ``;
    dphtml += `${selectedSport}`;
    document.getElementById("dropdownBtnsp").innerHTML = dphtml;
}

function newDoc(){
    window.location.assign("eventsIN.html")
}

