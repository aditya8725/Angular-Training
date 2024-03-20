var SumOfDigits = /** @class */ (function () {
    function SumOfDigits(n) {
        this.n = n;
    }
    SumOfDigits.prototype.sofd = function () {
        var sod = 0;
        var tempN = this.n;
        while (tempN > 0) {
            var lad = tempN % 10;
            sod += lad;
            tempN = Math.floor(tempN / 10);
        }
        return sod;
    };
    return SumOfDigits;
}());
var objSod = new SumOfDigits(123);
var res = objSod.sofd();
console.log("Sum of digits of ".concat(this.n, ": ").concat(res));
