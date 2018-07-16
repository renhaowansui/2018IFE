function draw(){
	var x = 500;
	var y = 400;
	var space = 40;
	var canvas = document.getElementById("canvas");
	if(canvas.getContext){
		var g = canvas.getContext("2d");
		g.lineWidth = 5;
		g.moveTo(x,y);
		g.lineTo(0,y);
		g.lineTo(0,0);
		
		g.lineWidth = 2;
		for(var i = 0; i<sourceData[0].sale.length; i++){
			g.beginPath();
			g.arc((i+1)*space, sourceData[0].sale[i], 2, 0, Math.PI*2);
			g.fillStyle = "black";
			g.fill();
			if( i != 0){
				g.moveTo((i)*space, sourceData[0].sale[i-1]);
				g.lineTo((i+1)*space, sourceData[0].sale[i]);
			}
			g.stroke();
		}
	}
}
draw();