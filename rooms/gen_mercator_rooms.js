var fs = require('fs');

var floor1 = [
		//A-Block
		[0, 1, 12, 8, "MA 101/102/103", ["MA-101","MA-102","MA-103"], "student"],
		[7, 9, 5, 3, "MA Stairs", [""], "stairs"],

		[0, 12, 5, 8, "MA 136/137", ["MA-136","MA-137"], "student"],
		[0, 20, 5, 8, "MA 132/133", ["MA-132","MA-133"], "student"],
		[0, 28, 5, 8, "MA 128/129", ["MA-128","MA-129"], "student"],
		[0, 36, 5, 8, "MA 124/125", ["MA-124","MA-125"], "student"],
		[0, 44, 5, 2, "MA1 Stairs", [""], "stairs"],

		[5, 9, 2, 40, "MA1 Corridor", [""], "cor"],

		[7, 12, 5, 8, "MA 108/109", ["MA-108","MA-109"], "student"],
		[7, 20, 5, 8, "MA 112/113", ["MA-112","MA-113"], "student"],
		[7, 28, 5, 8, "MA 116/117", ["MA-116","MA-117"], "student"],
		[7, 36, 5, 8, "MA 120/121", ["MA-120","MA-121"], "student"],
		[7, 44, 5, 2, "MA1 Kitchen", [""], "kitchen"],

		//B-Block
		[24, 1, 12, 8, "MB 101/102/103", ["MB-101","MB-102","MB-103"], "student"],
		[31, 9, 5, 3, "MB Stairs", [""], "stairs"],

		[24, 12, 5, 8, "MB 136/137", ["MB-136","MB-137"], "student"],
		[24, 20, 5, 8, "MB 132/133", ["MB-132","MB-133"], "student"],
		[24, 28, 5, 8, "MB 128/129", ["MB-128","MB-129"], "student"],
		[24, 36, 5, 8, "MB 124/125", ["MB-124","MB-125"], "student"],
		[24, 44, 5, 2, "MB1 Stairs", [""], "stairs"],

		[29, 9, 2, 40, "MB1 Corridor", [""], "cor"],

		[31, 12, 5, 8, "MB 108/109", ["MB-108","MB-109"], "student"],
		[31, 20, 5, 8, "MB 112/113", ["MB-112","MB-113"], "student"],
		[31, 28, 5, 8, "MB 116/117", ["MB-116","MB-117"], "student"],
		[31, 36, 5, 8, "MB 120/121", ["MB-120","MB-121"], "student"],
		[31, 44, 5, 2, "MB1 Kitchen", [""], "kitchen"],

		//C-Block
		[48, 1, 12, 8, "MC 101/102/103", ["MC-101","MC-102","MC-103"], "student"],
		[55, 9, 5, 3, "MC Stairs", [""], "stairs"],

		[48, 12, 5, 8, "MC 136/137", ["MC-136","MC-137"], "student"],
		[48, 20, 5, 8, "MC 132/133", ["MC-132","MC-133"], "student"],
		[48, 28, 5, 8, "MC 128/129", ["MC-128","MC-129"], "student"],
		[48, 36, 5, 8, "MC 124/125", ["MC-124","MC-125"], "student"],
		[48, 44, 5, 2, "MC1 Stairs", [""], "stairs"],

		[53, 9, 2, 40, "MC1 Corridor", [""], "cor"],

		[55, 12, 5, 8, "MC 108/109", ["MC-108","MC-109"], "student"],
		[55, 20, 5, 8, "MC 112/113", ["MC-112","MC-113"], "student"],
		[55, 28, 5, 8, "MC 116/117", ["MC-116","MC-117"], "student"],
		[55, 36, 5, 8, "MC 120/121", ["MC-120","MC-121"], "student"],
		[55, 44, 5, 2, "MC1 Kitchen", [""], "kitchen"],

		//D-Block
		[24, 46, 36, 2, "MD1 Corridor", [""], "cor"]
	];

	var floor2 = [
		//A-Block
		[0, 1, 12, 8, "MA 201/202/203", ["MA-201","MA-202","MA-203"], "student"],
		[0, 4, 5, 8, "MA 240/241", ["MA-240","MA-241"], "student"],
		[7, 9, 5, 3, "MA Stairs", [""], "stairs"],

		[0, 12, 5, 8, "MA 236/237", ["MA-236","MA-237"], "student"],
		[0, 20, 5, 8, "MA 232/233", ["MA-232","MA-233"], "student"],
		[0, 28, 5, 8, "MA 228/229", ["MA-228","MA-229"], "student"],
		[0, 36, 5, 8, "MA 224/225", ["MA-224","MA-225"], "student"],
		[0, 44, 5, 2, "MA2 Stairs", [""], "stairs"],

		[5, 9, 2, 40, "MA2 Corridor", [""], "cor"],

		[7, 12, 5, 8, "MA 208/209", ["MA-208","MA-209"], "student"],
		[7, 20, 5, 8, "MA 212/213", ["MA-212","MA-213"], "student"],
		[7, 28, 5, 8, "MA 216/217", ["MA-216","MA-217"], "student"],
		[7, 36, 5, 8, "MA 220/221", ["MA-220","MA-221"], "student"],
		[7, 44, 5, 2, "MA2 Kitchen", [""], "kitchen"],

		//B-Block
		[24, 1, 12, 8, "MB 201/202/203", ["MB-201","MB-202","MB-203"], "student"],
		[24, 4, 5, 8, "MB 240/241", ["MB-240","MB-241"], "student"],
		[31, 9, 5, 3, "MB Stairs", [""], "stairs"],

		[24, 12, 5, 8, "MB 236/237", ["MB-236","MB-237"], "student"],
		[24, 20, 5, 8, "MB 232/233", ["MB-232","MB-233"], "student"],
		[24, 28, 5, 8, "MB 228/229", ["MB-228","MB-229"], "student"],
		[24, 36, 5, 8, "MB 224/225", ["MB-224","MB-225"], "student"],
		[24, 44, 5, 2, "MB2 Stairs", [""], "stairs"],

		[29, 9, 2, 40, "MB2 Corridor", [""], "cor"],

		[31, 12, 5, 8, "MB 208/209", ["MB-208","MB-209"], "student"],
		[31, 20, 5, 8, "MB 212/213", ["MB-212","MB-213"], "student"],
		[31, 28, 5, 8, "MB 216/217", ["MB-216","MB-217"], "student"],
		[31, 36, 5, 8, "MB 220/221", ["MB-220","MB-221"], "student"],
		[31, 44, 5, 2, "MB2 Kitchen", [""], "kitchen"],

		//C-Block
		[48, 1, 12, 8, "MC 201/202/203", ["MC-201","MC-202","MC-203"], "student"],
		[48, 4, 5, 8, "MC 240/241", ["MC-240","MC-241"], "student"],
		[55, 9, 5, 3, "MC Stairs", [""], "stairs"],

		[48, 12, 5, 8, "MC 236/237", ["MC-236","MC-237"], "student"],
		[48, 20, 5, 8, "MC 232/233", ["MC-232","MC-233"], "student"],
		[48, 28, 5, 8, "MC 228/229", ["MC-228","MC-229"], "student"],
		[48, 36, 5, 8, "MC 224/225", ["MC-224","MC-225"], "student"],
		[48, 44, 5, 2, "MC2 Stairs", [""], "stairs"],

		[53, 9, 2, 40, "MC2 Corridor", [""], "cor"],

		[55, 12, 5, 8, "MC 208/209", ["MC-208","MC-209"], "student"],
		[55, 20, 5, 8, "MC 212/213", ["MC-212","MC-213"], "student"],
		[55, 28, 5, 8, "MC 216/217", ["MC-216","MC-217"], "student"],
		[55, 36, 5, 8, "MC 220/221", ["MC-220","MC-221"], "student"],
		[55, 44, 5, 2, "MC2 Kitchen", [""], "kitchen"],

		//D-Block
		[24, 46, 36, 2, "MD3 Corridor", ["MD-201"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-207"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-211"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-213"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-215"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-217"], "cor"]
	];

	var floor3 = [
				//A-Block
		[0, 1, 12, 8, "MA 301/302/203", ["MA-301","MA-302","MA-303"], "student"],
		[0, 4, 5, 8, "MA 340/241", ["MA-340","MA-341"], "student"],
		[7, 9, 5, 3, "MA Stairs", [""], "stairs"],

		[0, 12, 5, 8, "MA 336/237", ["MA-336","MA-337"], "student"],
		[0, 20, 5, 8, "MA 332/233", ["MA-332","MA-333"], "student"],
		[0, 28, 5, 8, "MA 328/229", ["MA-328","MA-329"], "student"],
		[0, 36, 5, 8, "MA 324/225", ["MA-324","MA-325"], "student"],
		[0, 44, 5, 2, "MA3 Stairs", [""], "stairs"],

		[5, 9, 2, 40, "MA3 Corridor", [""], "cor"],

		[7, 12, 5, 8, "MA 308/209", ["MA-308","MA-309"], "student"],
		[7, 20, 5, 8, "MA 312/213", ["MA-312","MA-313"], "student"],
		[7, 28, 5, 8, "MA 316/217", ["MA-316","MA-317"], "student"],
		[7, 36, 5, 8, "MA 320/221", ["MA-320","MA-321"], "student"],
		[7, 44, 5, 2, "MA3 Kitchen", [""], "kitchen"],

		//B-Block
		[24, 1, 12, 8, "MB 301/302/203", ["MB-301","MB-302","MB-303"], "student"],
		[24, 4, 5, 8, "MB 340/241", ["MB-340","MB-341"], "student"],
		[31, 9, 5, 3, "MB Stairs", [""], "stairs"],

		[24, 12, 5, 8, "MB 336/237", ["MB-336","MB-337"], "student"],
		[24, 20, 5, 8, "MB 332/233", ["MB-332","MB-333"], "student"],
		[24, 28, 5, 8, "MB 328/229", ["MB-328","MB-329"], "student"],
		[24, 36, 5, 8, "MB 324/225", ["MB-324","MB-325"], "student"],
		[24, 44, 5, 2, "MB3 Stairs", [""], "stairs"],

		[29, 9, 2, 40, "MB3 Corridor", [""], "cor"],

		[31, 12, 5, 8, "MB 308/209", ["MB-308","MB-309"], "student"],
		[31, 20, 5, 8, "MB 312/213", ["MB-312","MB-313"], "student"],
		[31, 28, 5, 8, "MB 316/217", ["MB-316","MB-317"], "student"],
		[31, 36, 5, 8, "MB 320/221", ["MB-320","MB-321"], "student"],
		[31, 44, 5, 2, "MB3 Kitchen", [""], "kitchen"],

		//C-Block
		[48, 1, 12, 8, "MC 301/302/203", ["MC-301","MC-302","MC-303"], "student"],
		[48, 4, 5, 8, "MC 340/241", ["MC-340","MC-341"], "student"],
		[55, 9, 5, 3, "MC Stairs", [""], "stairs"],

		[48, 12, 5, 8, "MC 336/237", ["MC-336","MC-337"], "student"],
		[48, 20, 5, 8, "MC 332/233", ["MC-332","MC-333"], "student"],
		[48, 28, 5, 8, "MC 328/229", ["MC-328","MC-329"], "student"],
		[48, 36, 5, 8, "MC 324/225", ["MC-324","MC-325"], "student"],
		[48, 44, 5, 2, "MC3 Stairs", [""], "stairs"],

		[53, 9, 2, 40, "MC3 Corridor", [""], "cor"],

		[55, 12, 5, 8, "MC 308/209", ["MC-308","MC-309"], "student"],
		[55, 20, 5, 8, "MC 312/213", ["MC-312","MC-313"], "student"],
		[55, 28, 5, 8, "MC 316/217", ["MC-316","MC-317"], "student"],
		[55, 36, 5, 8, "MC 320/221", ["MC-320","MC-321"], "student"],
		[55, 44, 5, 2, "MC3 Kitchen", [""], "kitchen"],
	   //  "MD-201",
    // "MD-207",
    // "MD-211",
    // "MD-213",
    // "MD-215",
    // "MD-217",
    // "MD-303",
    // "MD-305",
    // "MD-307",
    // "MD-309",
    // "MD-311",
    // "MD-313",
    // "MD-317",
		//D-Block
		[24, 46, 36, 2, "MD3 Corridor", ["MD-303"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-305"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-307"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-309"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-311"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-313"], "cor"],
		[24, 46, 36, 2, "MD3 Corridor", ["MD-317"], "cor"]
	];

floors = [floor1, floor2, floor3]

blocks = []
block_a = {'name': 'A', 'floors': []}
block_b = {'name': 'B', 'floors': []}
block_c = {'name': 'C', 'floors': []}
block_d = {'name': 'D', 'floors': []}

fls = []

for(i = 0; i < floors.length; i++) {
	floor = floors[i];

	var fl_a = new Object();
	var fl_b = new Object();
	var fl_c = new Object();
	var fl_d = new Object();

	fl_a['number'] = i + 1;
	fl_b['number'] = i + 1;
	fl_c['number'] = i + 1;
	fl_d['number'] = i + 1;

	fl_a['rooms'] = new Array();
	fl_b['rooms'] = new Array();
	fl_c['rooms'] = new Array();
	fl_d['rooms'] = new Array();

	for(j = 0; j < floor.length; j++) {
		rm = floor[j][5];
		if (rm.length >= 1) {
			var room = new Object();
			room['enabled'] = true
			room['contains'] = new Array()
			if (rm.length == 2) {
				room['type'] = 'double'
			}
			if (rm.length == 3) {
				room['type'] = 'triple'
			}
			if (rm.length == 1) {
				room['type'] = 'single'
			}
			room['contains'] = rm
			if (rm[0].indexOf('MC') > -1)
				fl_c['rooms'].push(room)
			if (rm[0].indexOf('MA') > -1)
				fl_a['rooms'].push(room)
			if (rm[0].indexOf('MB') > -1)
				fl_b['rooms'].push(room)
			if (rm[0].indexOf('MD') > -1)
				fl_d['rooms'].push(room)
		}
	}
	block_a['floors'].push(fl_a)
	block_b['floors'].push(fl_b)
	block_c['floors'].push(fl_c)
	block_d['floors'].push(fl_d)
}

blocks = [block_a, block_b, block_c, block_d]

var mercator = {'name': 'Mercator', 'description': 'Mercator College', 'blocks': blocks}
exports.mercator = mercator
// var outputFilename = 'mercator_rooms.js';

// fs.writeFile(outputFilename, JSON.stringify(krupp, null, 2), function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("JSON saved to " + outputFilename);
//     }
// });