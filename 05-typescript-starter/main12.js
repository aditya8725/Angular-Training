var printfirstnno = /** @class */ (function () {
    function printfirstnno(n) {
        this.n = n;
    }
    printfirstnno.prototype.sofnd = function () {
        var count = 1;
        while (count <= this.n) {
            console.log(count);
            count++;
        }
    };
    return printfirstnno;
}());
var objsof = new printfirstnno(5);
objsof.sofnd();
