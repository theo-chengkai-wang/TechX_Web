const exec = require('child_process').exec;

//turn callback to promise
function predict(path) {
    return new Promise((resolve, reject) => {
        exec(`python ./model/predict.py -p ${path}`, function (err, stdout, stderr) {
            if (err) reject(stderr);
            resolve(stdout);
        })
    })
}
module.exports = predict;


//test
/*predict('./2_copy')
.then((result)=>{
    console.log("exec: " + result)
})
.catch((err)=>{
    console.log("err: "+err)
});*/