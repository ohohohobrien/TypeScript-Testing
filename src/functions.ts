function addV2(n1: number, n2: number): number {
    return n1 + n2;
}

function printResults(num: number): void {
    console.log('Result ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResults(addV2(5, 6));

// let combineValues: (argument: type) => return-type;
let combineValues: (a: number, b: number) => number;

combineValues = addV2;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});