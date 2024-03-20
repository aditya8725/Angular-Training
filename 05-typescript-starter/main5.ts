
//class factorial

class factorialdemo
{
    multi() {
        throw new Error("Method not implemented.");
    }
    numm1:number;

    constructor(numm1:number)
    {
        this.numm1 = numm1;
    }
    
    fact():any
    {
        let fact=1;
        for(let i=1;i<=this.numm1;i++)
        {
            fact = fact*i;
        }
        console.log(fact);
       
    }
}

let objf:factorialdemo = new factorialdemo(5);
objf.fact();