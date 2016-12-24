

process.stdin.on('data',function(data){
	console.log(`${data}`);
	process.exit();
}); 


process.on('exit',function(){
	process.stdout.write("\n\n done \n\n");
});

