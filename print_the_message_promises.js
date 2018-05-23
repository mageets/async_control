const blockingCode = require('./blocking_code');

const printTheMessagePromises = () => {
    return new Promise((resolve) => {
        let blockingCode1Promise = new Promise((resolve) => {
            blockingCode.blockingCode1((result) => {
                resolve(result);
            });
        });
        
        let blockingCode2Promise = new Promise((resolve) => {
            blockingCode.blockingCode2((result) => {
                resolve(result);
            });
        });
    
        let blockingCode3Promise = new Promise((resolve) => {
            blockingCode.blockingCode3((result) => {
                resolve(result);
            });
        });
        
        Promise.all([blockingCode1Promise, blockingCode2Promise, blockingCode3Promise]).then((values) => {
            resolve(values.join(' '));
        }); 
    });
};

printTheMessagePromises().then(console.log); 
