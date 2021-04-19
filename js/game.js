class Game{
    constructor(){}
    getState(){
    var GSF = database.ref('gameState')
    GSF.on("value",function(data){
        gameState = data.val()
})
}


update(state){
    database.ref('/').update({gameState:state})
}
start(){ 
    if(gameState === 0){
 player = new Player();
 player.getCount();
 form = new Form() 
 form.display(); } }

play(){
form.hide();
textSize(30)
text("Game Start",120,100)
Player.getPlayerinfo();

if(allplayers !== undefined){
    var displayPos = 130;
    for(var plr in allplayers)
    if(plr === "player" + player.index)
    fill("red")
    else
    fill("black");

    displayPos+=20
    textSize(15)
    text(allplayers[plr].name + ":" + allplayers[plr].distance, 120, displayPos)
}
}

if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=50
    player.update();
}
}

}