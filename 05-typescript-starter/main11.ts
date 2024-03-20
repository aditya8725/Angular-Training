class SumOfDigits {
    n: number;

    constructor(n: number) {
        this.n = n;
    }

    sofd(): any {
        let sod = 0;
        let tempN = this.n;
        while(tempN>0)
        {
            let lad = tempN % 10;
            sod += lad;
            tempN = Math.floor(tempN / 10);
        }
        return sod;
    }
}


const objSod: SumOfDigits = new SumOfDigits(123);
const res = objSod.sofd();
console.log(`Sum of digits: ${res}`);
