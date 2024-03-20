var SumNumber = /** @class */ (function () {
    function SumNumber(num) {
        this.num = num;
    }
    SumNumber.prototype.sum = function () {
        var count = 1;
        var sum = 0;
        while (count <= this.num) {
            sum = sum + count;
            count++;
        }
        console.log(sum);
        console.log("Sum of numbers between 1 to ".concat(this.num, " numbers = ").concat(sum));
    };
    return SumNumber;
}());
var obj = new SumNumber(5);
obj.sum();
