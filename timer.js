 var waitTime = 3000;
 var currentTime = 0;
 var waitInterval = 10;
 var percent = 0;
 
 console.log("Waiting for ....")
 
 var interval = setInterval(function(){
	currentTime += waitInterval;
	percent = Math.floor(((currentTime/waitTime)*100));
	writePercentage(percent);
 },waitInterval);
 
 setTimeout(function(){
	 clearInterval(interval);
	 writePercentage("100");
	 console.log("done");
 },waitTime);
 
 function writePercentage(p){
	 process.stdout.clearLine();
	 process.stdout.cursorTo(0);
	 process.stdout.write(`Waited for ${p}%`)
 }