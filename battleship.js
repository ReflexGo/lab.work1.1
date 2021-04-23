var randomLoc = Math.floor(Math.random()* 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var quess;
var hits = 0;
var quesses = 0;
var isSunk = false;

while(isSunk == false){
    quess = prompt("Ready, aim, fire! (enter a number from 0-6): ");
    if(quess < 0 || quess > 6){
        alert("Please enter valid cell number");
    }else {
        quesses = quesses + 1;

        if(quess == location1 || quess == location2 || quess == location3){
            // Внёс небольшую поправочку... При стрельбе в одно и тоже место засчитывало хиты, я чутка исправил =) .
            if(quess == location1)location1 += quess;
            else if(quess == location2)location2 += quess;
            else if (quess == location3)location3 += quess;
            alert("HIT!");
            hits = hits + 1;
            if(hits == 3){
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS or you have already shot this place");
            
        }
    }
}
var stats = "You took " + quesses + "quesses to sink the battleship, " + "which means your shooting accuracy was " + (3/quesses);
alert(stats);
