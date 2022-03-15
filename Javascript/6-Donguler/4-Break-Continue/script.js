for(var i = 0; i < 100; i++) {
    document.write(i + "<br>");
    if(i == 25){
        break;
    }
}

document.write("<br>");
document.write("<br>");

for(var i = 0; i < 50; i++) {
    if(i == 25){
        continue;
    }
    document.write(i + "<br>");
}