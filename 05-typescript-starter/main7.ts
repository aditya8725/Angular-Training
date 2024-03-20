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



class Fibonacci{
    term1:number = 0;
    term2:number = 1;
    term3:number = this.term1 + this.term2;
    sum:number = 0;

    num:number;
    constructor(n:number){
        this.num = n;
    }

    fibo(){
        if(this.num == 0){
            return 0;
        }
        else if(this.num == 1){
            // console.log(0);
            return 0;
        }
        else{
            for(let i = 2; i < this.num; i++){
                 console.log(this.term3);
                this.term1 = this.term2;
                this.term2 = this.term3;
                this.term3 = this.term1 + this.term2;
            }
        }
        return this.sum;
    }
}

let obj:Fibonacci = new Fibonacci(10);
let ans = obj.fibo();
