

var fs = require('fs');
var os = require('os');

fs.readFile('input.txt', (err, buffer) => {

    var result = {};

    buffer.toString().split(/\r?\n/).forEach(word => {

        if (result[word] === undefined) {
            result[word] = 1;
        }
        else {
            result[word]++;
        }
    });

    var output = Object.keys(result).map(key => `<${key}> occurred ${result[key]} times`).join(os.EOL);

    fs.writeFile('output.txt', output, () => console.log('Finished!'));
});

