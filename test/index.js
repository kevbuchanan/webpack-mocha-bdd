var testsContext = require.context('.', true, /Test\.js$/);
module.exports = testsContext.keys().forEach(testsContext);
