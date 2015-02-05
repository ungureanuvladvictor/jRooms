var fs = require('fs');

var floor1 = [
	[-64, -60, 10, 12, "NB 122", ["NB-122"], "student"],
	[-64, -48, 10, 24, "NB 118 / 119 ", ["NB-118", "NB-119"], "student"],
	[-64, -24, 10, 24, "NB 114 / 115 ", ["NB-114", "NB-115"], "student"],
	[-64, 0, 10, 24, "NB 110 / 111 ", ["NB-110", "NB-111"], "student"],
	[-64, 24, 10, 24, "NB 106 / 107 ", ["NB-106", "NB-107"], "student"],
	[-64, 48, 10, 24, "NB 102 / 103 ", ["NB-102", "NB-103"], "student"],

	//B - West - In
	[-48, 24, 10, 24, "NB 134 / 135 ", ["NB-134", "NB-135"], "student"],
	[-48, 0, 10, 24, "NB 130 / 131 ", ["NB-130", "NB-131"], "student"],
	[-48, -24, 10, 24, "NB 126 / 127 ", ["NB-126", "NB-127"], "student"],
	[-48, -36, 10, 12, "NB 124 ", ["NB-124"], "student"],

	//B - East - In
	[58, -36, 10, 12, "NB 160 ", ["NB-160"], "student"],
	[58, -24, 10, 24, "NB 162 / 163 ", ["NB-162", "NB-163"], "student"],
	[58, 0, 10, 24, "NB 166 / 167 ", ["NB-166", "NB-167"], "student"],
	[58, 24, 10, 24, "NB 170 / 171 ", ["NB-170", "NB-171"], "student"],
	[58, 48, 10, 24, "NB 174 / 175 ", ["NB-174", "NB-175"], "student"],

	//B - East - Out
	[74, 48, 10, 24, "NB 196 / 197 ", ["NB-196", "NB-197"], "student"],
	[74, 24, 10, 24, "NB 192 / 193 ", ["NB-192", "NB-193"], "student"],
	[74, 0, 10, 24, "NB 188 / 189 ", ["NB-188", "NB-189"], "student"],
	[74, -24, 10, 24, "NB 184 / 185 ", ["NB-184", "NB-185"], "student"],
	[74, -48, 10, 24, "NB 180 / 181 ", ["NB-180", "NB-181"], "student"],
	[74, -60, 10, 12, "NB 178 ", ["NB-178"], "student"],


	[-26, -48, 24, 10, "NB 146 / 147", ["NB-146", "NB-147"], "student"],
	[-2, -48, 24, 10, "NB 150 / 151", ["NB-150", "NB-151"], "student"],
	[22, -48, 24, 10, "RA Apartment NB 155", ["NB-155"], "admin"]
]

var floor2 = [
	[-64, -60, 10, 12, "NB 222 ", ["NB-222"], "student"],
	[-64, -48, 10, 24, "NB 218 / 219 ", ["NB-218", "NB-219"], "student"],
	[-64, -24, 10, 24, "NB 214 / 215 ", ["NB-214", "NB-215"], "student"],
	[-64, 0, 10, 24, "NB 210 / 211 ", ["NB-210", "NB-211"], "student"],
	[-64, 24, 10, 24, "NB 206 / 207 ", ["NB-206", "NB-207"], "student"],
	[-64, 48, 10, 24, "NB 202 / 203 ", ["NB-202", "NB-203"], "student"],

	//B - West - In
	[-48, 48, 10, 24, "NB 238 / 239 ", ["NB-238", "NB-239"], "student"],
	[-48, 24, 10, 24, "N1B 234 / 235 ", ["NB-234", "NB-235"], "student"],
	[-48, 0, 10, 24, "NB 230 / 231 ", ["NB-230", "NB-231"], "student"],
	[-48, -24, 10, 24, "NB 226 / 227 ", ["NB-226", "NB-227"], "student"],
	[-48, -36, 10, 12, "NB 224 ", ["NB-224"], "student"],


	//B - East - In
	[58, -36, 10, 12, "NB 260 ", ["NB-260"], "student"],
	[58, -24, 10, 24, "NB 262 / 263 ", ["NB-262", "NB-263"], "student"],
	[58, 0, 10, 24, "NB 266 / 267 ", ["NB-266", "NB-267"], "student"],
	[58, 24, 10, 24, "NB 270 / 271 ", ["NB-270", "NB-271"], "student"],
	[58, 48, 10, 24, "NB 274 / 275 ", ["NB-274", "NB-275"], "student"],

	//B - East - Out
	[74, 48, 10, 24, "NB 296 / 297 ", ["NB-296", "NB-297"], "student"],
	[74, 24, 10, 24, "NB 292 / 293 ", ["NB-292", "NB-293"], "student"],
	[74, 0, 10, 24, "NB 288 / 289 ", ["NB-288", "NB-289"], "student"],
	[74, -24, 10, 24, "NB 284 / 285 ", ["NB-284", "NB-285"], "student"],
	[74, -48, 10, 24, "NB 280 / 281 ", ["NB-280", "NB-281"], "student"],
	[74, -60, 10, 12, "NB 278 ", ["NB-278"], "student"],

	[-26, -48, 24, 10, "NB 246 / 247", ["NB-246", "NB-247"], "student"],
	[-2, -48, 24, 10, "NB 250 / 251", ["NB-250", "NB-251"], "student"],
	[22, -48, 24, 10, "RA Apartment NB 255", ["NB-255"], "admin"],


	[58, 90, 10, 10, "NC 203", ["NC-203"], "student"],
	[58, 106, 8, 10, "NC 224", ["NC-224"], "student"],

	[66, 106, 8, 10, "NC 222", ["NC-222"], "student"],
	[74, 106, 20, 10, "NC 218 / 219", ["NC-218", "NC-219"], "student"],
	[94, 106, 8, 10, "NC 216", ["NC-216"], "student"],

	[92, 72, 10, 8, "NC 208", ["NC-208"], "student"],
	[92, 80, 10, 20, "NC 210 / 211", ["NC-210", "NC-211"], "student"],

	[0, 6, 6, 12, "NA 201", ["NA-201"], "student"],
	[6, 6, 6, 12, "NA 203", ["NA-203"], "student"],
	[12, 6, 6, 12, "NA 205", ["NA-205"], "student"],

	[18, 6, 6, 12, "NA 207", ["NA-207"], "student"],
	[24, 6, 6, 12, "NA 209", ["NA-209"], "student"],
	[30, 6, 6, 12, "NA 211", ["NA-211"], "student"],

	[36, 6, 6, 12, "NA 213", ["NA-213"], "student"],
	[42, 6, 6, 12, "NA 215", ["NA-215"], "student"],
	[48, 6, 6, 12, "NA 217", ["NA-217"], "student"],

	[54, 6, 6, 12, "NA 219", ["NA-219"], "student"],
	[60, 6, 6, 12, "NA 221", ["NA-221"], "student"],
	[66, 6, 6, 12, "NA 223", ["NA-223"], "student"],

	[72, 6, 6, 12, "NA 225", ["NA-225"], "student"],
	[78, 6, 6, 12, "NA 227", ["NA-227"], "student"],
	[84, 6, 6, 12, "NA 229", ["NA-229"], "student"],

	[90, 6, 6, 12, "NA 231", ["NA-231"], "student"],
	[96, 6, 6, 12, "NA 233", ["NA-233"], "student"],
	[102, 6, 6, 12, "NA 235", ["NA-235"], "student"]
]

var floor3 = [
	[-64, -48, 10, 24, "NB 318 / 319", ["NB-318", "NB-319"], "student"],
	[-64, -24, 10, 24, "NB 314 / 315", ["NB-314", "NB-315"], "student"],
	[-64, 0, 10, 24, "NB 310 / 311", ["NB-310", "NB-311"], "student"],
	[-64, 24, 10, 24, "NB 306 / 307", ["NB-306", "NB-307"], "student"],
	[-64, 48, 10, 24, "NB 302 / 303", ["NB-302", "NB-303"], "student"],

	//B - West - In
	[-48, 48, 10, 24, "NB 338 / 339", ["NB-338", "NB-339"], "student"],
	[-48, 24, 10, 24, "NB 334 / 335", ["NB-334", "NB-335"], "student"],
	[-48, 0, 10, 24, "NB 330 / 331", ["NB-330", "NB-331"], "student"],
	[-48, -24, 10, 24, "NB 326 / 327", ["NB-326", "NB-327"], "student"],
	[-48, -36, 10, 12, "NB 324", ["NB-224"], "student"],

	//B - East - In
	[58, -36, 10, 12, "NB 360", ["NB-360"], "student"],
	[58, -24, 10, 24, "NB 362 / 363", ["NB-362", "NB-363"], "student"],
	[58, 0, 10, 24, "NB 366 / 367", ["NB-366", "NB-367"], "student"],
	[58, 24, 10, 24, "NB 370 / 371", ["NB-370", "NB-371"], "student"],
	[58, 48, 10, 24, "NB 374 / 375", ["NB-374", "NB-375"], "student"],

	//B - East - Out
	[74, 48, 10, 24, "NB 396 / 397", ["NB-396", "NB-397"], "student"],
	[74, 24, 10, 24, "NB 392 / 393", ["NB-392", "NB-393"], "student"],
	[74, 0, 10, 24, "NB 388 / 389", ["NB-388", "NB-389"], "student"],
	[74, -24, 10, 24, "NB 384 / 385", ["NB-384", "NB-385"], "student"],
	[74, -48, 10, 24, "NB 380 / 381", ["NB-380", "NB-381"], "student"],
	[74, -60, 10, 12, "NB 378", ["NB-378"], "student"],


	[-26, -48, 24, 10, "NB 346 / 347", ["NB-346", "NB-347"], "student"],
	[-2, -48, 24, 10, "NB 350 / 351", ["NB-350", "NB-351"], "student"],
	[22, -48, 24, 10, "RA Apartment NB 355", ["NB-355"], "admin"],

	[58, 90, 10, 10, "NC 303", ["NC-303"], "student"],
	[58, 106, 16, 10, "NC 324", ["NC-324"], "student"],

	[74, 106, 20, 10, "NC 318 / 319", ["NC-318", "NC-319"], "student"],
	[94, 106, 8, 10, "NC 316", ["NC-316"], "student"],

	[92, 72, 10, 8, "NC 308", ["NC-308"], "student"],
	[92, 80, 10, 20, "NC 310 / 311", ["NC-310", "NC-311"], "student"],

	[0, 6, 6, 12, "NA 301", ["NA-301"], "student"],
	[6, 6, 6, 12, "NA 303", ["NA-303"], "student"],
	[12, 6, 6, 12, "NA 305", ["NA-305"], "student"],

	[18, 6, 6, 12, "NA 307", ["NA-307"], "student"],
	[24, 6, 6, 12, "NA 309", ["NA-309"], "student"],
	[30, 6, 6, 12, "NA 311", ["NA-311"], "student"],

	[36, 6, 6, 12, "NA 313", ["NA-313"], "student"],
	[42, 6, 6, 12, "NA 315", ["NA-315"], "student"],
	[48, 6, 6, 12, "NA 317", ["NA-317"], "student"],

	[54, 6, 6, 12, "NA 319", ["NA-319"], "student"],
	[60, 6, 6, 12, "NA 321", ["NA-321"], "student"],
	[66, 6, 6, 12, "NA 323", ["NA-323"], "student"],

	[72, 6, 6, 12, "NA 325", ["NA-325"], "student"],
	[78, 6, 6, 12, "NA 327", ["NA-327"], "student"],
	[84, 6, 6, 12, "NA 329", ["NA-329"], "student"],


	[90, 6, 6, 12, "NA 331", ["NA-331"], "student"],
	[96, 6, 6, 12, "NA 333", ["NA-333"], "student"],
	[102, 6, 6, 12, "NA 335", ["NA-335"], "student"],
]

var floor4 = [
	[-64, -60, 10, 12, "NB-422", ["NB-422"], "student"],
	[-64, -48, 10, 24, "NB 418 / NB 419", ["NB-418", "NB-419"], "student"],
	[-64, -24, 10, 24, "NB 414 / NB 415", ["NB-414", "NB-415"], "student"],
	[-64, 0, 10, 24, "NB 410 / 411", ["NB-410", "NB-411"], "student"],
	[-64, 24, 10, 24, "NB 406 / 407", ["NB-406", "NB-407"], "student"],
	[-64, 48, 10, 24, "NB 402 / 403", ["NB-402", "NB-403"], "student"],

	//B - West - In
	[-48, 48, 10, 24, "NB 438 / 439", ["NB-438", "NB-439"], "student"],
	[-48, 24, 10, 24, "NB 434 / 435", ["NB-434", "NB-435"], "student"],
	[-48, 0, 10, 24, "NB 430 / 431", ["NB-430", "NB-431"], "student"],
	[-48, -24, 10, 24, "NB 426 / 427", ["NB-426", "NB-427"], "student"],
	[-48, -36, 10, 12, "NB 424", ["NB-424"], "student"],

	//B - East - In
	[58, -36, 10, 12, "NB 460", ["NB-460"], "student"],
	[58, -24, 10, 24, "NB 462 / 463", ["NB-462", "NB-463"], "student"],
	[58, 0, 10, 24, "NB 466 / 467", ["NB-466", "NB-467"], "student"],
	[58, 24, 10, 24, "NB 470 / 471", ["NB-470", "NB-471"], "student"],
	[58, 48, 10, 24, "NB 474 / 475", ["NB-474", "NB-475"], "student"],

	//B - East - Out
	[74, 48, 10, 24, "NB 496 / 497", ["NB-496", "NB-497"], "student"],
	[74, 24, 10, 24, "NB 492 / 493", ["NB-492", "NB-493"], "student"],
	[74, 0, 10, 24, "NB 488 / 489", ["NB-488", "NB-489"], "student"],
	[74, -24, 10, 24, "NB 484 / 485", ["NB-484", "NB-485"], "student"],
	[74, -48, 10, 24, "NB 480 / 481", ["NB-480", "NB-481"], "student"],
	[74, -60, 10, 12, "NB 478", ["NB-478"], "student"],


	[58, 106, 16, 10, "NC 424", ["NC-424"], "student"],

	[74, 106, 20, 10, "NC 418 / 419", ["NC-418", "NC-419"], "student"],
	[94, 106, 8, 10, "NC 416", ["NC-416"], "student"],

	[92, 72, 10, 8, "NC 408", ["NC-408"], "student"],
	[92, 80, 10, 20, "NC 410 / 411", ["NC-410", "NC-411"], "student"],


	[0, 6, 6, 12, "NA 401", ["NA-401"], "student"],
	[6, 6, 6, 12, "NA 403", ["NA-403"], "student"],
	[12, 6, 6, 12, "NA 405", ["NA-405"], "student"],

	[18, 6, 6, 12, "NA 407", ["NA-407"], "student"],
	[24, 6, 6, 12, "NA 409", ["NA-409"], "student"],
	[30, 6, 6, 12, "NA 411", ["NA-411"], "student"],

	[36, 6, 6, 12, "NA 413", ["NA-413"], "student"],
	[42, 6, 6, 12, "NA 415", ["NA-415"], "student"],
	[48, 6, 6, 12, "NA 417", ["NA-417"], "student"],

	[54, 6, 6, 12, "NA 419", ["NA-419"], "student"],
	[60, 6, 6, 12, "NA 421", ["NA-421"], "student"],
	[66, 6, 6, 12, "NA 423", ["NA-423"], "student"],

	[72, 6, 6, 12, "NA 425", ["NA-425"], "student"],
	[78, 6, 6, 12, "NA 427", ["NA-427"], "student"],
	[84, 6, 6, 12, "NA 429", ["NA-429"], "student"],


	[90, 6, 6, 12, "NA 431", ["NA-431"], "student"],
	[96, 6, 6, 12, "NA 433", ["NA-433"], "student"],
	[102, 6, 6, 12, "NA 435", ["NA-435"], "student"]
]

var floor5 = [
	//[x, y, x_size, y_size, name, id, type, search_force_include]
	//Types: "student", "floor", "stairs", "common", "toilet", "kitchen", "admin"


	[18, 3, 6, 12, "NA 507", ["NA-507"], "student"],
	[24, 3, 6, 12, "NA 509", ["NA-509"], "student"],
	[30, 3, 6, 12, "NA 511", ["NA-511"], "student"],

	[36, 3, 6, 12, "NA 513", ["NA-513"], "student"],
	[42, 3, 6, 12, "NA 515", ["NA-515"], "student"],
	[48, 3, 6, 12, "NA 517", ["NA-517"], "student"],

	[54, 3, 6, 12, "NA 519", ["NA-519"], "student"],
	[60, 3, 6, 12, "NA 521", ["NA-521"], "student"],
	[66, 3, 6, 12, "NA 523", ["NA-523"], "student"],

	[72, 3, 6, 12, "NA 525", ["NA-525"], "student"],
	[78, 3, 6, 12, "NA 527", ["NA-527"], "student"],
	[84, 3, 6, 12, "NA 529", ["NA-529"], "student"],

	[90, 3, 6, 12, "NA 531", ["NA-531"], "student"],
	[96, 3, 6, 12, "NA 533", ["NA-533"], "student"],
	[102, 3, 6, 12, "NA 535", ["NA-535"], "student"]
];

floors = [floor1, floor2, floor3, floor4, floor5]

blocks = []
block_a = {'name': 'A', 'floors': []}
block_b = {'name': 'B', 'floors': []}
block_c = {'name': 'C', 'floors': []}

fls = []

for(i = 0; i < floors.length; i++) {
	floor = floors[i];

	var fl_a = new Object();
	var fl_b = new Object();
	var fl_c = new Object();

	fl_a['number'] = i + 1;
	fl_b['number'] = i + 1;
	fl_c['number'] = i + 1;

	fl_a['rooms'] = new Array();
	fl_b['rooms'] = new Array();
	fl_c['rooms'] = new Array();

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
			if (rm[0].indexOf('NC') > -1)
				fl_c['rooms'].push(room)
			if (rm[0].indexOf('NA') > -1)
				fl_a['rooms'].push(room)
			if (rm[0].indexOf('NB') > -1)
				fl_b['rooms'].push(room)
		}
	}
	block_a['floors'].push(fl_a)
	block_b['floors'].push(fl_b)
	block_c['floors'].push(fl_c)
}

blocks = [block_a, block_b, block_c]

var nm = {'name': 'Nordmetall', 'description': 'Nordmetall College', 'blocks': blocks}
exports.nm = nm
// var outputFilename = 'nordmetall_rooms.js';

// fs.writeFile(outputFilename, JSON.stringify(krupp, null, 2), function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("JSON saved to " + outputFilename);
//     }
// });