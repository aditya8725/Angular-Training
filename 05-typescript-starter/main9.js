var swapping = /** @class */ (function () {
    function swapping(a, b) {
        this.a = a;
        this.b = b;
        console.log("Before swapping: ".concat(a, ", ").concat(b));
        var _a = this.doswap(this.a, this.b), newa = _a[0], newb = _a[1];
        console.log("After swapping:".concat(newa, ",").concat(newb));
    }
    swapping.prototype.doswap = function (a, b) {
        var temp = a;
        a = b;
        b = temp;
        return [a, b];
    };
    return swapping;
}());
var objswap = new swapping(10, 20);
