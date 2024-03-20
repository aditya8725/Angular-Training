var factroial = /** @class */ (function () {
    function factroial(n, r) {
        this.n = n;
        this.r = r;
    }
    factroial.prototype.fact = function (n) {
        var fact = 1;
        for (var i = 1; i <= this.n; i++) {
            fact = fact * i;
        }
        return fact;
    };
    factroial.prototype.binno = function () {
        if (this.n > this.r) {
            console.log("Invalid input...!");
        }
        var nfact = this.fact(this.n);
        var rfact = this.fact(this.r);
        var nmrfact = this.fact(this.n - this.r);
        return nfact / (rfact * nmrfact);
        ;
    };
    return factroial;
}());
var n = 5;
var r = 2;
var objfact = new factroial(n, r);
var ans = objfact.binno();
console.log(ans);
