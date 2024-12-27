
const a :number = 2;
const b :number = 8;
const d : boolean = true;
const c : string = "Santos";
const e : string = "Marquinhos jotaquest";


function soma(a: number, b: number): number {
    return a + b;    
};
function sumName(e: string, c: string): string{
    return e + c;
}

function imparOrPar(numero: number) : string {
    // if(numero %  2 == 0){
    //     return "PAr"
    // }else{
    //     return "impar"
    // }

    return numero % 2 === 0 ?  "par" : "impar"
}

console.log(soma(a, b), sumName(e, c), imparOrPar(5));