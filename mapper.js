#!/usr/bin/node

var stdin = process.stdin;
var stdout = process.stdout;

function processLine(line) {
	if(line && line.trim().length > 0) {
		var s = line.trim().split(' ');
		for(var i = 0; i < s.length; ++i) {
			stdout.write(s[i] + '\t1\n');
		}
	}
} 

var data = '';
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
});
