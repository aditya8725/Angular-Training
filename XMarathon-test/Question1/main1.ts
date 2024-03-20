class SumNumber
{
    //initializing the variable or property
    num:number

    //constructor created
    constructor(num:number)
    {
        this.num=num;
    }

    //sum function
    sum():void{
        let count=1;
        let sum =0;
        while(count<=this.num)
        {
            sum=sum+count;
            count++;
        }

        //print the sum of numbers
        console.log(sum)
        console.log(`Sum of numbers between 1 to ${this.num} numbers = ${sum}`);
    }
}

let obj:SumNumber = new SumNumber(5);
obj.sum();


