
var height = this.view.size.height;
var width = this.view.size.width ;
var w_step = width/5;
var offset = 50;

var path = new Path();
path.strokeColor = 'black';
path.strokeWidth = 10;
path.add(new Point(offset, offset));

path.add(new Point(width - offset, offset));
path.add(new Point(width - offset, height));

path.add(new Point(4 * w_step, height));
path.add(new Point(4 * w_step, height/3));

path.add(new Point(3 * w_step, height/3));
path.add(new Point(3 * w_step, height));

path.add(new Point(2 * w_step, height));
path.add(new Point(2 * w_step, height/3));

path.add(new Point(w_step, height/3));
path.add(new Point(w_step, height));

path.add(new Point(offset, height));
path.add(new Point(offset, offset));

