//Num Array
let numArr: number[] = [1,2,3,4]

//String Array
let strArr: string[] = ["abc","cde"]

//function
function add(n1:number, n2:number):number
{
    return n1+n2
}

// class
class Displaynumber
{
    a1: number = 100;
    a2: number = 200;
    

    add()
    {
        let sum = this.a1+this.a2;
        console.log(`Sum = $(sum)`)
    }

}

let obj:Displaynumber = new Displaynumber();
obj.add();

