class Lobby {
    constructor(){
        this.state.players = [];
    }

    newPlayer(player){
        this.state.players.push(player)
    }
    playerLeave(player){
        var index = his.state.players.indexOf(player);
        if(index !== -1){
            this.state.players.splice(index,1);
        }
    }

    newMessage(player,message){
        // store in temp db / store temporarily in user memory, can be a serious security issue if not handled properly
    }

    updateChat(chat){
        this.state.chat = chat;
    }

    startGame(){
        // start the game, trickier than it sounds
    }

    endGame(){
        // Destroy the game class
    }

    
}