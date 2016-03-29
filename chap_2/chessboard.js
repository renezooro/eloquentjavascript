var wid = 8;
var hei = 8;
var line = "";
var count = 1;

for (var i = 1; i <= hei; i++) {
    if(wid % 2 == 0){
        count++;
    }
    for (var j = 1; j <= wid; j++) {
        if(count % 2 == 0) {
            line += "#";
        }
        else {
            line +=" ";
        }
        count++;
    }
    console.log(line);
    line = "";
}