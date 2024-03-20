class primenumber
{
    n:number;

    constructor(val:number)
    {
        this.n = val;
    }
    
    checkprime():void
    {
        for(let i=2;i*i<=this.n;i++)
        {
            if(this.n % i == 0)
            {
                console.log(`${this.n} = This is not prime number`);
                return;
            }
        }
        console.log(`${this.n} = This is a prime number`);
       
    }
}

let objpn:primenumber = new primenumber(5);
objpn.checkprime();