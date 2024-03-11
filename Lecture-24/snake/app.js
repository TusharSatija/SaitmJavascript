let canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
ctx.fillStyle='yellow';

let cs=60;
let H=750;
let W=1200;

let Snake={
    init:5,
    direction:'right',
    cells:[],

    CreateSnake:function()
    {
        for(let i=0;i<this.init;i++)
        {
            this.cell.push({
                x:i,
                y:0
            })
        }
    },
    DrawSnake: function()
    {
        for( let cell of this.cells)
        {
            ctx.fillRect(cell.x*cs,cell.y*cs,cs,cs);
        }    
    }

    UpdateSnake:function()
    {
        
    }
    

}

function inital()
{
    Snake.CreateSnake();
}

function update()
{
    
}

function draw()
{
    Snake.DrawSnake();
}

function GameLoop()
{

}
// function init()
// {
//     ctx.fillRect(W,H,100,100);
// }
// function update()
// {
//     W+=100;
//     // console.log("inside update");
     
// }
// function draw()
// {
//     ctx.clearRect(0,0,1200,750);
//     ctx.fillRect(W,H,100,100);
//     // console.log("inside draw");

// }

// init();
// function GameLoop()
// {
//     update();
//     draw();
// }
// setInterval(GameLoop,100);





