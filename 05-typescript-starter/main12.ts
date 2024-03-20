class printfirstnno
{
    n:number;

    constructor(n:number)
    {
        this.n = n;
    }

    sofnd():void
    {
        let count = 1;
        while(count<=this.n)
        {
            console.log(count);
            count++;
        }
    }
}

let objsof:printfirstnno = new printfirstnno(5);
objsof.sofnd();