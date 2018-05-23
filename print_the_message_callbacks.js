const blockingCode = require('./blocking_code');

const printTheMessageCallbackHell = (callback) => {
    let finalMessage = '';

    blockingCode.blockingCode1((result) => {
        finalMessage += result;
        blockingCode.blockingCode2((result) => {
            finalMessage += ' ' + result;
            blockingCode.blockingCode3((result) => {
                finalMessage += ' ' + result;
                callback(finalMessage);
            });
        });
    });
};

printTheMessageCallbackHell(console.log);
