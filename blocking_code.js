const blockingCode1 = (callback) => {
    setTimeout(() => {
        callback("Learn Day")
    }, 1000);
};

const blockingCode2 = (callback) => {
    setTimeout(() => {
        callback("is")
    }, 500);
};

const blockingCode3 = (callback) => {
    setTimeout(() => {
        callback("awesome")
    }, 250);
};

const blockingCode1Promise = () => {
    return new Promise((resolve) => {
        blockingCode1(resolve);
    });
};

const blockingCode2Promise = () => {
    return new Promise((resolve) => {
        blockingCode2(resolve);
    });
};

const blockingCode3Promise = () => {
    return new Promise((resolve) => {
        blockingCode3(resolve);
    });
};

module.exports = {
    blockingCode1,
    blockingCode2,
    blockingCode3,
    blockingCode1Promise,
    blockingCode2Promise,
    blockingCode3Promise
};