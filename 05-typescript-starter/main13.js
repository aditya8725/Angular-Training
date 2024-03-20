var sumoffirstnno = /** @class */ (function () {
    function sumoffirstnno(n) {
        this.n = n;
    }
    sumoffirstnno.prototype.sofffn = function () {
        var count = 1;
        var sum = 0;
        while (count <= this.n) {
            sum = sum + count;
            count++;
        }
        console.log(sum);
    };
    return sumoffirstnno;
}());
var objs = new sumoffirstnno(5);
objs.sofffn();
