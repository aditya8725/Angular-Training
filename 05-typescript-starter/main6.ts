class multiplication
{
    numm1:number;

    constructor(numm1:number)
    {
        this.numm1 = numm1;
    }
    
    multi():void
    {
        for(let i=1;i<=10;i++)
        {
            console.log(this.numm1*i)
            console.log(`${this.numm1} * ${i} = ${this.numm1}`)
        }
       
    }
}

let mulobj:multiplication = new multiplication(5);
mulobj.multi();