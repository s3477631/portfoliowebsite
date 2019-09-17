export default class Buildings {
    constructor(gameWidth, gameHeight){
        this.height = (gameHeight/ 3);
        this.width = (gameWidth / 20);
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.position = {
            x:  this.width,
            y:  (gameHeight - this.height)
        }
        this.iterations = (gameWidth  / this.width) - 2
        console.log(this.iterations)
        console.log(this.width)
        console.log(this.gameWidth)
    }
    draw(ctx, skyscrapers){
        
        // draws all the buildings in the middle
        for(var i = 0; i < this.iterations; i++){
             var randomizeheights = Math.random() * this.height 
            var skyscrapersprite = new Image();
            skyscrapersprite.onload = function (){ 
                for(var z = 0; z < 16; z++){ 
                    ctx.drawImage(skyscrapersprite, 50 * z + 50, this.height - randomizeheights, 50, randomizeheights)
                }
                
                           }
            skyscrapersprite.src = skyscrapers[Math.floor(Math.random() * skyscrapers.length)];
            // ctx.fillRect((this.position.x * i + this.width), this.gameHeight - randomizeheights, this.width, randomizeheights)

        }
        
        // draws playertwo and the playertwo building
        var playertwo = new Image();
        playertwo.onload = function () {  
        ctx.drawImage(playertwo, 840, 430, 70, 70);
        };
        playertwo.src = "../assets/slothrawimage.png";

        
    

         var playertwobuilding = new Image();
         playertwobuilding.onload = function () {  
         ctx.drawImage(playertwobuilding, -5, 500, 50, 100);
         };
         playertwobuilding.src = "../assets/crazybuilding.png";
         

         var playeronebuilding = new Image();
         playeronebuilding.onload = function () {  
         ctx.drawImage(playeronebuilding, 850, 500, 50, 100);
         };
         playeronebuilding.src = "../assets/weirdobuilding.png";

    
        // draws playerone and the playerone building
        var img = new Image();
        img.onload = function () {  
        ctx.drawImage(img, -10, 440, 70, 70);
        };
        img.src = "../assets/llama.png";
        ctx.fillRect(this.gameWidth - this.width , this.gameHeight - 100, this.width, 200);
    }



}
