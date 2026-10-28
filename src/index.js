// Event listeners
startButton.addEventListener('click', Start)


fetch('storage/stations.json').then(response => response.json()).then(data => {
    station_data = data
    for (let i = 0; i < station_data.length; i++) {
        console.log(station_data[i])
    }
})




function Start() {
    createTable(table_n, table_m, gameBoard)
    createStation()
}

function createTable(table_n, table_m, gameBoard) {
    for (let r = 0; r < table_n; r++) {
        const tr = document.createElement('tr');
        for (let c = 0; c < table_m; c++) {
            const td = document.createElement('td');
            td.className = 'border border-gray-300 text-center text-xs';
            // td.dataset.row = r;
            // td.dataset.col = c;
            tr.appendChild(td);
        }
        gameBoard.appendChild(tr);
    }
}

function createStation() {
    station_data.forEach(s => {
        let station = new Station(s.id, s.x, s.y, s.type, s.train, s.side, s.district)
        stations.push(station)
        add_class(station)
    })
}

function add_class(station){
    const cell = gameBoard.rows[station.y].cells[station.x];
    cell.classList.add("station")
}