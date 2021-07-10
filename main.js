
function call() {
    document.getElementById("myCenter").hidden = false;
    document.getElementById("buttonId").hidden = true;
    
    document.body.style.backgroundImage= "url('bg1.jpg')";
    document.body.style.backgroundPosition= "center";
    document.body.style.backgroundSize= "cover";   

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(265,210,40,0,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(300,250,40,0,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 5;
    ctx.arc(345,210,40,0,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(380,250,40,0,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(423,210,40,0,2 * Math.PI);
    ctx.stroke();
}