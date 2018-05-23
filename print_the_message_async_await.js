const co = require('co');

const blockingCode = require('./blocking_code');

const printTheMessagePromises = async () => {
    let result1 = blockingCode.blockingCode1Promise();
    let result2 = blockingCode.blockingCode2Promise();
    let result3 = blockingCode.blockingCode3Promise();
    console.log(`${await result1} ${await result2} ${await result3}`);
};

printTheMessagePromises(); 
