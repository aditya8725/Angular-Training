class swapping
{
    a:number;
    b:number;

    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b;

        console.log(`Before swapping: ${a}, ${b}`);
        
        const [newa,newb] = this.doswap(this.a,this.b)
        console.log(`After swapping:${newa},${newb}`)
    }

    doswap(a,b)
    {
        let temp =a;
        a=b;
        b=temp;

        return [a,b];
    }
    
    
}

let  objswap: swapping = new swapping(10,20);