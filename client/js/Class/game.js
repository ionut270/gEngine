class Game { 
    constructor(id, data, players){
        /**
         * Data an object of the following form
         * {
         *  'name'
         *  'creator',
         *  'char_speed'
         *  'etc
         * }
         */

         /** Send a request to the backend server to store this data in the db
          * Data gets updated each minute
          */

        /**
         * Players = object with player classes
         */

         // Returns an array containing the structure of the map
         this.state.map = new Map();
         this.state.players = players;
         this.state.data = data;
    }
}