//Lab 7 Jest || Pruebas unitarias para bloques de código

//Función de suma
export function add(a: number, b: number): number{
    return a + b;
}

//Función de resta
export function subtract(a: number, b: number): number{
    return a - b;
}

//Función multiplicar
export function multiply(a: number, b: number): number{
    return a * b;
}

//Funcion dividir
export function divide(a: number, b: number): number{
    //Nos aseguramos de que no tengamos inconvenientes con la division de 0
    if (b === 0){
        throw new Error("No puedes dividir entre 0");
    }
    return a / b;
}

//Función exponente (Colocamos un valor por defecto en el segundo argumento por si no se introduce)
export function exponent(a: number, b: number = 2): number{
    //Usamos Math.pow para no saber el primer exponente si no que este sea el que se requiera saber, en caso de no tenerlo se coloca 2 como argumento.
    return Math.pow(a, b)
}