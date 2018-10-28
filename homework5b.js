const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
canvas.width=1200;
canvas.height=820;
let gameStatus = true;

const backgroundImage = new Image();
backgroundImage.src = "https://thumbs.dreamstime.com/z/seamless-winter-landscape-holiday-houses-christmas-game-design-horizontal-background-video-63356926.jpg ";
          
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
        };

const goodguyImage = new Image();
goodguyImage.src = "http://pluspng.com/img-png/santa-claus-png-santa-claus-png-image-2736.png";
      
const badguysImage = new Image();
badguysImage.src = "http://www.stickpng.com/assets/images/5841bb0fa6515b1e0ad75a96.png";
        

const badGuys = function(count, canvasWidth, canvasHeight) {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
      let array=[];
     const width = 80;
     const height = 90;

           for (let i = 0; i< count; i+=1) {
              let object = {
                width: 80,
                height: 90,
                x: rand(canvasWidth - width),
                y: rand(canvasHeight - height),
                xDelta: 2,
                yDelta: 2,
              image: badguysImage,
                draw: function () {
                    context.drawImage(this.image, this.x, this.y, this.width, this.height);
                    
                },

                update: function () {
                   if(gameData.hero.x < this.x + this.width  && gameData.hero.x + gameData.hero.width  > this.x &&
                        gameData.hero.y < this.y + this.height && gameData.hero.y + gameData.hero.height > this.y) {
                        gameStatus = false;
                    }
                    this.x += this.xDelta;
                    this.y += this.yDelta;

                    if(this.x >= canvasWidth - width || this.x <= 0) {
                        
                        this.xDelta *= -1;
                    }
                    if(this.y >= canvasHeight - height || this.y <= 0) {
                        
                        this.yDelta *= -1;
                    }
                }                  
            }
            array[i]= object
        }
        return array
    };


    let arr1 = badGuys(5, 1200, 820);
    const draw=function() {
        for (let i = 1; i < arr1.length; i++) {
            arr1[i].draw();
        }
    };

    const update = function () {
        for(let i = 0; i < arr1.length; i++){

            arr1[i].update();
        }
    };
       
        const gameData = {
          hero: {
            x: 0,
            y: 420,
            width: 100,           
            height: 120,
            xDelta: 0,
            yDelta: 0,
            image: goodguyImage,
              draw: function(){
              context.drawImage(this.image, this.x, this.y, this.width, this.height);
              },
              update: function() { 
              this.x += this.xDelta;
              this.y += this.yDelta;
              }
           }
        };
           
   
        
         const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;
  
    
          
          document.addEventListener('keydown', function(event){
         if(event.keyCode === rightKey){
          gameData.hero.xDelta = 5;
        }else if(event.keyCode === leftKey){
          gameData.hero.xDelta = -5;
                }else if(event.keyCode === upKey){
                 gameData.hero.yDelta = -5;
                }else if(event.keyCode === downKey){
                 gameData.hero.yDelta = 5;
                }
         
        }, false);
      document.addEventListener('keyup', function(event){
        if(event.keyCode === rightKey){
          gameData.hero.xDelta = 0;
        }else if(event.keyCode === leftKey){
          gameData.hero.xDelta = 0;
                }else if(event.keyCode === upKey){
                 gameData.hero.yDelta = 0;
                }else if(event.keyCode === downKey){
                 gameData.hero.yDelta = 0;
                }
        
        
      }, false);

      
        const hero = gameData.hero;
        const loop = function() {
          if(gameStatus){
          
            context.drawImage(backgroundImage, 0, 0, 1200, 820);
            hero.draw();
            hero.update();
            draw();
            update(); 
            
            requestAnimationFrame(loop);
          }else {
            alert('OOPS, GAME OVER ')
          }
        }
        
        loop( );
     
    
   