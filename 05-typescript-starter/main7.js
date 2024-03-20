// class fibbonacci
// {
//     n:number;
//     constructor(val:number)
//     {
//         this.n = val;
//         val=this.fibbo(this.n)
//         console.log(`The value of Fibbonacci is ${val}`)
//     }
//     fibbo(n: number):number
//     {
//         if(n==1 || n==0)
//         {
//             return 1;
//         }
//         return this.fibbo(n-2)+this.fibbo(n-1);
//     }
// }
// let objfibbo:fibbonacci = new fibbonacci(5);
var Fibonacci = /** @class */ (function () {
    function Fibonacci(n) {
        this.term1 = 0;
        this.term2 = 1;
        this.term3 = this.term1 + this.term2;
        this.sum = 0;
        this.num = n;
    }
    Fibonacci.prototype.fibo = function () {
        if (this.num == 0) {
            // console.log(0);
            return 0;
        }
        else if (this.num == 1) {
            // console.log(0);
            return 0;
        }
        else {
            // console.log(this.term1);
            // console.log(this.term2);
            //this.sum = this.sum + this.term3;
            for (var i = 2; i < this.num; i++) {
                //  this.sum += this.term3;
                console.log(this.term3);
                this.term1 = this.term2;
                this.term2 = this.term3;
                this.term3 = this.term1 + this.term2;
            }
        }
        return this.sum;
    };
    return Fibonacci;
}());
var obj = new Fibonacci(10);
var ans = obj.fibo();
//console.log(`Sum of the series is : ${ans}`);
