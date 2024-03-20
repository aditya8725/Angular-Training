class factroial
{
    r:number
    n:number;

    constructor(n:number,r:number)
    {
        this.n=n;
        this.r = r;
    }

    fact(n:number):number
    {
        let fact=1;
        for(let i=1;i<=this.n;i++)
        {
            fact=fact*i;
        }
        return fact
    }

    binno():number
    {
        if(this.n>this.r)
        {
            console.log("Invalid input...!");
        }
        const nfact = this.fact(this.n);
        const rfact = this.fact(this.r);
        const nmrfact = this.fact(this.n-this.r);


        return nfact / (rfact*nmrfact);
;        

    }
}

const n=5;
const r=2;

let objfact: factroial= new factroial(n,r);
let ans = objfact.binno();
console.log(ans);



