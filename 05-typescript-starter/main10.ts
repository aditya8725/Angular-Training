
//class factorial

class binocoeff
{

    n:number;
    r:number;

    constructor(n:number,r:number)
    {
        this.n = n;
        this.r=r;
    }
    
    fact(n:number):any
    {
        let fact=1;
        for(let i=1;i<=this.n;i++)
        {
            fact = fact*i;
        }
        return fact;
    }

    binno():number
    {
        if(this.r>this.n)
        {
            console.log("Invalid input...!!!")
        }
        const nfact = this.fact(this.n);
        const rfact = this.fact(this.r);
        const nmrfact = this.fact(this.n-this.r);


        return nfact / (rfact*nmrfact);

    }
}

const n=5;
const k =2;
let objf:binocoeff = new binocoeff(n,k);

const result = objf.binno();
console.log(result);