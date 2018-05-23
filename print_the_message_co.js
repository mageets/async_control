const co = require('co');

const blockingCode = require('./blocking_code');

const printTheMessagePromises = () => {
    return co(function* () {
        let result1 = blockingCode.blockingCode1Promise();
        let result2 = blockingCode.blockingCode2Promise();
        let result3 = blockingCode.blockingCode3Promise();
        
        let resolvedResults = yield [result1, result2, result3];

        console.log(resolvedResults.join(' '));
    });
};

printTheMessagePromises(); 
