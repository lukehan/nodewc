#!/usr/bin/node

var stdin = process.stdin;
var stdout = process.stdout;

function processLine(line) {
	if(line && line.trim().length > 0) {
		var s = line.trim().split('\t');
		if(s.length == 2) {
			var w = s[0].trim();
			var c = parseInt(s[1]);
			if(!isNaN(c)) {
				if(cw == w) {
					cc += c;
				}
				else {
					if(cw) {
						stdout.write(cw + '\t' + cc + '\n');
					}
					cw = w;
					cc = c;
				}
			}
		}
	}
} 

var data = '';
var cw = null;
var cc = 0;

stdin.setEncoding('utf8');
stdin.resume();
stdin.on('data', function(chunk) {
	data += chunk;
	data = data.replace(/\r\n/g, '\n');
	while(data.indexOf('\n') > -1) {
		var i = data.indexOf('\n') + 1;
		processLine(data.slice(0,i));
		data=data.slice(i);
	}
});
stdin.on('end', function() {
	processLine(data); 
	stdout.write(cw + '\t' + cc + '\n'); 
});
