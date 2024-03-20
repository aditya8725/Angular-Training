class sumoffirstnno
{
    n:number;

    constructor(n:number)
    {
        this.n = n;
    }

    sofffn():void
    {
        let count = 1;
        let sum=0
        while(count<=this.n)
        {
            sum=sum+count
            count++;
        }
        console.log(sum);
    }
}

let objs:sumoffirstnno = new sumoffirstnno(5);
objs.sofffn();