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
            this.cells.push({
                x:i,
                y:0
            })
        }
    },
    DrawSnake: function()
    {
        for( let cell of this.cells)
        {
            ctx.fillRect(cell.x*cs,cell.y*cs,cs-1,cs-1);
        }    
    },

    UpdateSnake:function()
    {
        
        const Headx=this.cells[this.cells.length-1].x;
        const heady=this.cells[this.cells.length-1].y;


        let nextX;
        let nexty;

        if(this.direction==='down')
        {
            nextX=Headx;
            nexty=heady+1;
        }
        else if(this.direction==='up')
        {
            nextX=Headx;
            nexty=heady-1;
        }
        else if(this.direction==='left')
        {
            nextX=Headx-1;
            nexty=heady;
        }
        else{
            nextX=Headx+1;
            nexty=heady;
        }

        this.cells.push({
            x:nextX,
            y:nexty
        });

        this.cells.shift();
    }
    

}

function inital()
{
    Snake.CreateSnake();
    function keyPressed(e)
    {
        if(e.key==='ArrowDown')
        {
            Snake.direction='down';
        }
        else if(e.key==='ArrowUp')
        {
            Snake.direction='up';
        }
        else if(e.key==='ArrowLeft')
        {
            Snake.direction='left';
        }
        else {
            Snake.direction='right';
        }
    }
    document.addEventListener('keydown',keyPressed);
}

function update()
{
    Snake.UpdateSnake();
}

function draw()
{
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='yellow';
    Snake.DrawSnake();
}

inital();
function GameLoop()
{
    update();
    draw();
} 

setInterval(GameLoop,100);



