class Player{
    constructor(){
    this.index=null
    this.distance=0
    this.name=null
    }


    getCount(){
    var GCF = database.ref('playerCount')
    GCF.on("value",function(data){
        playerCount = data.val()
})
}


updateCount(count){
    database.ref('/').update({playerCount:count})
}
update(){ 
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).set({name:this.name,distance:this.distance})
}

static getPlayerinfo(){
var pir = database.ref('players')
pir.on('values',(data)=>{
    allplayers=data.val();
})
}
}