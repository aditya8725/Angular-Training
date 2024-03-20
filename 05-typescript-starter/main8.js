var primenumber = /** @class */ (function () {
    function primenumber(val) {
        this.n = val;
    }
    primenumber.prototype.checkprime = function () {
        for (var i = 2; i * i <= this.n; i++) {
            if (this.n % i == 0) {
                console.log("".concat(this.n, " = This is not prime number"));
                return;
            }
        }
        console.log("".concat(this.n, " = This is a prime number"));
    };
    return primenumber;
}());
var objpn = new primenumber(5);
objpn.checkprime();
