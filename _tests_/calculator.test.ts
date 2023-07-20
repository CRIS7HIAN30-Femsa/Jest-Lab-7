//Test module para calculator.ts

import { add, subtract, multiply, divide, exponent } from "../calculator";

//Test add
test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(1, 1)).toBe(2);
    expect (add(100, 101)).toBe(201);
})

//Test subtrac
test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(99, 44)).toBe(55);
})

//Test multiply
test("multiply two numbers", () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(5, 5)).toBe(25);
    expect(multiply(9, 7)).toBe(63);
})

//Test divide
test("divide two numbers", () => {
    expect(divide(100, 2)).toBe(50);
    expect(divide(0, 5)).toBe(0);
    expect(divide(-8, -2)).toBe(4);
})

//Test divide whit 0
test("divide whit 0 error", () => {
    expect(() => divide(10, 0)).toThrowError("No puedes dividir entre 0");
})

//Test exponent
test("exponent two numbers by 2 in b for default", () => {
    expect(exponent(10)).toBe(100);//Recapitulando en este deberia ser 100 el resultado ya que si no se coloca el argumento b: number, por defecto es 2
    expect(exponent(10, 3)).toBe(1000);//Ahora que si coloque el argumneto deberia cambiar el resultado
    expect(exponent(2, 10)).toBe(1024);
})