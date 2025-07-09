body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

#game {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("img/map.png") no-repeat center center;
  background-size: cover;
}

.building {
  position: absolute;
  width: 80px;
  height: 80px;
}

/* Pikachu */
#character {
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 10;
}

/* === Building positions (adjust as needed) === */
#hospital { top: 100px; left: 200px; }
#park { top: 100px; left: 400px; }
#school { top: 250px; left: 150px; }
#station { top: 250px; left: 350px; }
#supermarket { top: 400px; left: 100px; }
#zoo { top: 400px; left: 300px; }
#bus { top: 550px; left: 150px; }
#fire_station { top: 550px; left: 350px; }
#flower { top: 700px; left: 200px; }
#gym { top: 700px; left: 400px; }
