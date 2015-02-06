var upSide = new Path();
var downSide = new Path();
var middleSide_1 = new Path();
var middleSide_2 = new Path();

var hSize = 3/7.6;
var sSize = 1/3.5;

var canvasSize = this.view.size;
var width = canvasSize.width - 10;
var height = canvasSize.height - 10;

var origin = new Point(0, 0);

upSide.strokeColor = 'black';
upSide.strokeWidth = 10;

middleSide_1.strokeColor = 'black';
middleSide_1.strokeWidth = 10;
middleSide_2.strokeColor = 'black';
middleSide_2.strokeWidth = 10;

downSide.strokeColor = 'black';
downSide.strokeWidth = 10;

upSide.add(new Point(hSize * width, sSize * height),
	new Point(0, sSize * height),
	origin,
	new Point(width, 0),
	new Point(width, 0),
	new Point(width, sSize * height),
	new Point(width - hSize * width, sSize * height));
upSide.close = true;

downSide.add(new Point(hSize * width, height - sSize * height),
	new Point(0, height - sSize * height),
	new Point(0, height),
	new Point(width, height),
	new Point(width, height - sSize * height),
	new Point(width - hSize * width, height - sSize * height));
downSide.close = true;

middleSide_1.add(new Point(hSize * width, sSize * height), new Point(hSize * width, height - sSize * height));
middleSide_1.close = true;

middleSide_2.add(new Point(width - hSize * width, sSize * height), new Point(width - hSize * width, height - sSize * height));
middleSide_2.close = true;

upSide.attach('mouseenter', function() {
    this.fillColor = 'red';
});

upSide.on('mouseleave', function() {
    this.fillColor = 'white';
});