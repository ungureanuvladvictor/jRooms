var map = {};

function drawKM(canvas, floor) {
	var height = canvas.height;
	var width = canvas.width;

	var w_step = width/5;

	console.log(width, height);

	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, width, height);

	ctx.beginPath();

	/* Draw big shape */
	ctx.moveTo(0, 0);
	ctx.lineTo(width, 0);

	ctx.moveTo(0, 0);
	ctx.lineTo(0, height);

	ctx.moveTo(width, 0);
	ctx.lineTo(width, height);

	/* Draw small h lines */
	ctx.moveTo(w_step, height/5);
	ctx.lineTo(w_step * 2, height/5);

	ctx.moveTo(w_step * 3, height/5);
	ctx.lineTo(w_step * 4, height/5);

	ctx.moveTo(0, height);
	ctx.lineTo(w_step, height);

	ctx.moveTo(w_step * 2, height);
	ctx.lineTo(w_step * 3, height);

	ctx.moveTo(w_step * 4, height);
	ctx.lineTo(w_step * 5, height);

	/* Draw small v lines */
	ctx.moveTo(w_step, height);
	ctx.lineTo(w_step, height/5);

	ctx.moveTo(w_step * 2, height);
	ctx.lineTo(w_step * 2, height/5);

	ctx.moveTo(w_step * 3, height);
	ctx.lineTo(w_step * 3, height/5);

	ctx.moveTo(w_step * 4, height);
	ctx.lineTo(w_step * 4, height/5);

	ctx.stroke();
};

map.drawMap = function(canvas, college, floor) {
	canvas = canvas[0];
	var ctx = canvas.getContext("2d");
	drawKM(canvas, floor);
};
