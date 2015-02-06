
var height = this.view.size.height;
var width = this.view.size.width ;
var w_step = width/5;
var offset = 5 * width/100;

var block = new Path();
block.strokeColor = 'black';
block.strokeWidth = 10;
block.add(new Point(offset, offset));

block.add(new Point(width - offset, offset));
block.add(new Point(width - offset, height));

block.add(new Point(4 * w_step, height));
block.add(new Point(4 * w_step, height/3));

block.add(new Point(3 * w_step, height/3));
block.add(new Point(3 * w_step, height));

block.add(new Point(2 * w_step, height));
block.add(new Point(2 * w_step, height/3));

block.add(new Point(w_step, height/3));
block.add(new Point(w_step, height));

block.add(new Point(offset, height));
block.add(new Point(offset, offset));

// block.close() = true;

block.attach('mouseenter', function() {
	this.fillColor = 'blue';
});

block.on('mouseleave', function() {
	this.fillColor = 'grey';
});

var room = new Path();
var room_w = 300;
var room_h = 200;

room.strokeColor = 'black';
room.strokeWidth = 2;

room.add(new Point(offset, offset));
room.add(new Point(room_w, offset));
room.add(new Point(room_w, room_h));
room.add(new Point(offset, room_h));
room.add(new Point(offset, offset));
// room.close() = true;

room.attach('mouseenter', function() {
	this.fillColor = 'red';
	var room_nr = new PointText(new Point(150, 150));
	room_nr.justification = 'center';
	room_nr.fillColor = 'while';
	room_nr.content = 'MC 201';
});

room.on('mouseleave', function() {
	this.fillColor = 'white';
});



