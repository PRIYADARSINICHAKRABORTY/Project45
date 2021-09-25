class Game {
    constructor() {
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");

        this.leaderboardTitle = createElement("h2");
        this.runner1 = createElement("h2");
        this.runner2 = createElement("h2");
        this.runner3 = createElement("h2");
        this.runner4 = createElement("h2");

        this.runnerMoving = false;
        this.leftKeyActive = false;
        this.fall = false;
    }
    
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
}