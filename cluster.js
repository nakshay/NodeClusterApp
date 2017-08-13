const cluster = require('cluster');
const numCPUs = require('os').cpus().length;


if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();

  }


  if (cluster.isMaster) {
    Object.keys(cluster.workers).forEach(function(id) {
    });
  }

  Object.keys(cluster.workers).forEach(function(id) {
    console.log("I am running with ID : "+cluster.workers[id].process.pid);
  });


  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
    cluster.fork();
  });
} else {

    //change this line to Your Node.js app entry point.
    require("./app.js");
}