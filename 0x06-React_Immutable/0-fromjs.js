const { fromJS } = require('immutable');

function getImmutableObject(obj) {
    return fromJS(obj);
}

const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableMap = getImmutableObject(obj);
console.log(immutableMap);