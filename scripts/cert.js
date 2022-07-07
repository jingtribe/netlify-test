const exec = require('child_process').exec;
const createLocalCert = exec(`sh ${__dirname}/shell/generate-dev-ssl-cert.sh`);
createLocalCert.stdout.on('data', (data) => {
	console.log(data);
});
createLocalCert.stderr.on('data', (data) => {
	console.error(data);
});
