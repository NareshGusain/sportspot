// const tournlist=document.querySelector('#torun-list');

const tournList = []

db.collection('info').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        tournList.push(doc.data());
        showTourn(tournList);
    })
})

// console.log(tournList);


locationObj = {
    Mumbai: ["Kashi Nagar Premier league", "Laxmi Park Premier league"],
    Pune: ["Kanakia Premier league", "Cinemax Park Premier league"],
};

sportObj = {
    Mumbai: ['Cricket', 'Football'],
    Pune: ['Football', 'Cricket']
}


const showTourn = async (lst) => {
    var inithtml = document.getElementById('tournamentList');
    var html = '';
    
    for(var obj of lst){
        html += `
            <div class="list bree bold">
                <button class="badge" value="Load new document" onclick="newDoc()">${obj.date}</button>
                <span id="loc">${obj.Name}</span>
                <span>Venue: ${obj.Venue}</span>
                <span>Time : ${obj.Time}</span>
            </div>
        `;
    }
    inithtml.innerHTML = html;
    localStorage.setItem("tournList",JSON.stringify(lst));
}

// this func renders tournament of selected value
function updateTournamentList(selectedValue) {

    var lst = JSON.parse(localStorage.tournList);

    html = document.getElementById('tournamentList');
    html = ``;

    for (var obj of lst) {
        if(obj.Loc == selectedValue){
            html += `
                <div class="list bree bold">
                    <button class="badge" value="Load new document" onclick="newDoc()">${obj.date}</button>
                    <span id="loc">${obj.Name}</span>
                    <span>Venue: ${obj.Venue}</span>
                    <span>Time : ${obj.Time}</span>
                </div>
            `;
        }
    }
    document.getElementById("tournamentList").innerHTML = html;

    var dphtml = document.getElementById('dropdownBtn');
    dphtml = ``;
    dphtml += `${selectedValue}`;
    document.getElementById("dropdownBtn").innerHTML = dphtml;

    localStorage.setItem("Location", selectedValue);
}

// func for sport

function updateTournamentListSp(selectedSport) {
    html = document.getElementById('tournamentList');
    html = ``;
    
    var selectedLoc = localStorage.getItem('Location');
    var lst = JSON.parse(localStorage.tournList);

    for (var obj of lst) {
        if(obj.Loc == selectedLoc && obj.Sport == selectedSport){
            html += `
                <div class="list bree bold">
                    <button class="badge" value="Load new document" onclick="newDoc()">${obj.date}</button>
                    <span id="loc">${obj.Name}</span>
                    <span>Venue: ${obj.Venue}</span>
                    <span>Time : ${obj.Time}</span>
                </div>
            `;
        }
    }
    document.getElementById("tournamentList").innerHTML = html;

    var dphtml = document.getElementById('dropdownBtnsp');
    dphtml = ``;
    dphtml += `${selectedSport}`;
    document.getElementById("dropdownBtnsp").innerHTML = dphtml;
}

function newDoc() {
    window.location.assign("eventsIN.html")
}




