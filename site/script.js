
const reboundsData = {
  "reb": {
    "pl": [
      {"pid":203083,"ln":"Drummond","fn":"Andre","val":11.0},
      {"pid":2544,"ln":"James","fn":"LeBron","val":7.2},
      {"pid":203076,"ln":"Davis","fn":"Anthony","val":6.6},
    ]
  }
};

const threepointersData = {
  "tpp": {
    "pl": [
      {"pid":201188,"ln":"Gasol","fn":"Marc","val":0.636},
      {"pid":2544,"ln":"James","fn":"LeBron","val":0.375},
      {"pid":203463,"ln":"McLemore","fn":"Ben","val":0.333},
    ]
  }
};

const pointsData = {
  "pts": {
    "pl": [
      {"pid":2544,"ln":"James","fn":"LeBron","val":23.3},
      {"pid":203076,"ln":"Davis","fn":"Anthony","val":17.4},
      {"pid":203471,"ln":"Schroder","fn":"Dennis","val":14.3},
    ]
  }
};

function displayTopPlayers(data, containerId, statKey) {
    const container = document.getElementById(containerId);
    const players = data[statKey].pl;
    
    players.sort((a, b) => b.val - a.val);
    
    for (let i = 0; i < 3 && i < players.length; i++) {
        const player = players[i];
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player-stat';
        
        let statValue, statLabel;
        if (statKey === 'tpp') {
            statValue = (player.val * 100).toFixed(1);
            statLabel = '%';
        } else {
            statValue = player.val.toFixed(1);
            statLabel = statKey === 'pts' ? 'PTS' : 'REB';
        }
        
        playerDiv.innerHTML = `
            <div class="stat-container">
                <span class="stat-value">${statValue}</span>
                <span class="stat-label">${statLabel}</span>
            </div>
            <div class="player-name">
                <span class="first-name">${player.fn}</span>
                <span class="last-name">${player.ln}</span>
            </div>
        `;
        container.appendChild(playerDiv);
    }
}

function loadStats() {
    displayTopPlayers(reboundsData, 'rebounds-container', 'reb');
    displayTopPlayers(threepointersData, 'threepointers-container', 'tpp');
    displayTopPlayers(pointsData, 'points-container', 'pts');
}

window.onload = loadStats;