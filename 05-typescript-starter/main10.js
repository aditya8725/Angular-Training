//class factorial
var binocoeff = /** @class */ (function () {
    function binocoeff(n, r) {
        this.n = n;
        this.r = r;
    }
    binocoeff.prototype.fact = function (n) {
        var fact = 1;
        for (var i = 1; i <= this.n; i++) {
            fact = fact * i;
        }
        return fact;
    };
    binocoeff.prototype.binno = function () {
        if (this.r > this.n) {
            console.log("Invalid input...!!!");
        }
        var nfact = this.fact(this.n);
        var rfact = this.fact(this.r);
        var nmrfact = this.fact(this.n - this.r);
        return nfact / (rfact * nmrfact);
    };
    return binocoeff;
}());
var n = 5;
var k = 2;
var objf = new binocoeff(n, k);
var result = objf.binno();
console.log(result);
