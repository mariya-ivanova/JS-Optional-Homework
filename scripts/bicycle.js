window.onload = function () {
	var theCanvas = document.getElementById("bicycle-canvas");
	var canvasCtx = theCanvas.getContext("2d");

	canvasCtx.lineWidth = "4";
	canvasCtx.fillStyle = "#8cd";
	canvasCtx.strokeStyle = "#078";
	
	canvasCtx.beginPath();
	canvasCtx.arc(92, 250, 90, 0, 2 * Math.PI);
	canvasCtx.fill();	
	canvasCtx.stroke();

	canvasCtx.beginPath();
	canvasCtx.moveTo(100, 250);
	canvasCtx.lineTo(250, 250);
	canvasCtx.lineTo(400, 140);
	canvasCtx.lineTo(190, 140);
	canvasCtx.lineTo(100, 250);	
	canvasCtx.stroke();
	
	canvasCtx.beginPath();	
	canvasCtx.moveTo(250, 250);
	canvasCtx.lineTo(180, 100);	
	canvasCtx.stroke();
	
	canvasCtx.beginPath();	
	canvasCtx.moveTo(145, 100);
	canvasCtx.lineTo(220, 100);	
	canvasCtx.stroke();	

	canvasCtx.beginPath();	
	canvasCtx.moveTo(205, 205);
	canvasCtx.lineTo(230, 230);	
	canvasCtx.stroke();	
	
	canvasCtx.beginPath();	
	canvasCtx.arc(250, 250, 30, 0, 2 * Math.PI);	
	canvasCtx.stroke();	

	canvasCtx.beginPath();	
	canvasCtx.moveTo(270, 270);
	canvasCtx.lineTo(290, 290);	
	canvasCtx.stroke();	
	
	canvasCtx.beginPath();	
	canvasCtx.arc(450, 250, 90, 0, 2 * Math.PI);
	canvasCtx.fill();	
	canvasCtx.stroke();	

	canvasCtx.beginPath();	
	canvasCtx.moveTo(450, 250);
	canvasCtx.lineTo(380, 80);	
	canvasCtx.stroke();	
	
	canvasCtx.beginPath();	
	canvasCtx.moveTo(320, 95);
	canvasCtx.lineTo(380, 80);
	canvasCtx.lineTo(440, 50);	
	canvasCtx.stroke();		
};