var main = document.getElementById("main");
function draw(){
	var y = 300;
	var x = 500;
	var width = 20;
	var space = 20;
	//画坐标X轴
	var lineX = document.createElementNS("http://www.w3.org/2000/svg", "line" );
	lineX.setAttribute("x1", 0);
	lineX.setAttribute("y1", y);
	lineX.setAttribute("x2", x);
	lineX.setAttribute("y2", y);
	lineX.setAttribute( "style", "stroke-width:2;stroke:black" );
    main.appendChild( lineX );
    //画坐标Y轴
    var lineY = document.createElementNS("http://www.w3.org/2000/svg", "line" );
	lineY.setAttribute("x1", 0);
	lineY.setAttribute("y1", y);
	lineY.setAttribute("x2", 0);
	lineY.setAttribute("y2", 0);
	lineY.setAttribute( "style", "stroke-width:3;stroke:black" );
    main.appendChild( lineY );
    //遍历数据，画柱状图
    for(var i = 0, len = sourceData[0].sale.length; i < len; i++){
    	var rec = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    	rec.setAttribute("x", space);
    	rec.setAttribute("y", y - sourceData[0].sale[i]);
    	rec.setAttribute("width", width);
    	rec.setAttribute("height", sourceData[0].sale[i]);
    	rec.setAttribute("style", "fill: royalblue; stroke: blanchedalmond;")
   		main.appendChild(rec);
   		space += 40;
    }
}
draw();