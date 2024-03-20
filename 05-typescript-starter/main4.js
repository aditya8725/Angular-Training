//Num Array
var numArr = [1, 2, 3, 4];
//String Array
var strArr = ["abc", "cde"];
//function
function add(n1, n2) {
    return n1 + n2;
}
// class
var Displaynumber = /** @class */ (function () {
    function Displaynumber() {
        this.a1 = 100;
        this.a2 = 200;
    }
    Displaynumber.prototype.add = function () {
        var sum = this.a1 + this.a2;
        console.log("Sum = $(sum)");
    };
    return Displaynumber;
}());