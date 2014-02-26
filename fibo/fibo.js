/**
 * Simple and old school, slow, fibonacci
 * @param  {integer} n (des)ription]
 * @return {void}   [description]
 */
var simpleFibo = function (n) {
    if (n <= 1) {
        return n;
    }

    return simpleFibo(n-1) + simpleFibo(n-2);
};

/**
 * Memoize the calculation by caching the value
 * @param  {function} f
 * @param  {object} cache
 * @return {function}
 */
var cachedFibo = function() {
    var cache = [];

    return function(n) {
        return (cache[n]) ? cache[n] :
            (n <= 1) ? n :
            (cache[n] = arguments.callee(n-2) + arguments.callee(n-1));
    };
};

console.log('simpleFibo(3): ' + simpleFibo(10));
console.log('cachedFibo(3): ' + cachedFibo()(10));

