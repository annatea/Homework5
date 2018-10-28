const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 800
    canvas.height = 600
    const rand = function(num) {
        return Math.floor(Math.random() * num) + 1;
    };


    const createBoxes = function(count, canvasWidth, canvasHeight) {
        let array=[];
        const colorArray = ["red", "blue", "pink"];
       

        for (let i = 0; i< count; i+=1) {
            let object = {
                width: 40,
                height: 40,
                x: rand(canvasWidth - 40),
                y: rand(canvasHeight - 40),
                xDelta: rand(7),
                yDelta: rand(7),
                color: colorArray[rand(colorArray.length)-1],
                draw: function () {
                    context.fillstyle = this.color;
                    context.fillRect(this.x,this.y,this.width,this.height);
                },

                update: function () {
                    this.x+= this.xDelta;
                    this.y += this.yDelta;
                  
                    if(this.x >= canvas.width - this.width || this.x <= 0) {
                        this.color = colorArray[rand(colorArray.length) - 1] ;
                        this.xDelta *= -1;
                    }
                    if(this.y >= canvas.height - this. height || this.y <= 0) {
                        this.color = colorArray[rand(colorArray.length) - 1];
                        this.yDelta *= -1;
                    }
                }
            };

            array[i]= object
        }
        return array
    };


    let arr1 = createBoxes(15, canvas.width, canvas.height);
    
    const draw=function() {
       
        for (let i = 0; i < arr1.length; i++) {
            arr1[i].draw();
        }
    };

    const update = function () {
        for(let i = 0; i < arr1.length; i++){

            arr1[i].update();
        }
    };

    const loop = function() {
       
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw();
        update();
      
       requestAnimationFrame(loop);
    };

    loop();


















