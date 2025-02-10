import { fizzBuzz } from "../src/fizzBuzz";

const fb = new fizzBuzz();
let result: number | string;

it ("Un argument de 1 retourne 1", () =>{
    result = fb.answerFor(1);
    expect(result).toEqual(1);
})

it ("Un argument de 2 retourne 2", () =>{
    result = fb.answerFor(2);
    expect(result).toEqual(2);
})

it ("Un argument de 3 retourne Fizz", () =>{
    result = fb.answerFor(3);
    expect(result).toEqual("Fizz");
})

it ("Un argument de 6 retourne Fizz", () =>{
    result = fb.answerFor(6);
    expect(result).toEqual("Fizz");

})

it ("Un argument de 5 retourne Buzz", () =>{
    result = fb.answerFor(5);
    expect(result).toEqual("Buzz");
})

it ("Un argument de 10 retourne Buzz", () =>{
    result = fb.answerFor(10);
    expect(result).toEqual("Buzz");
})

it ("Un argument de 15 retourne FizzBuzz", () =>{
    result = fb.answerFor(15);
    expect(result).toEqual("FizzBuzz");
})

it ("Un argument de 30 retourne FizzBuzz", () =>{
    result = fb.answerFor(30);
    expect(result).toEqual("FizzBuzz");
})

it('Un argument retourne Fizz si un nombre contient 3 ou un multiple de 3', () => {
    expect(fb.answerFor(13)).toEqual('Fizz');
    expect(fb.answerFor(31)).toEqual('Fizz');
    expect(fb.answerFor(9)).toEqual('Fizz');
})

it('Un argument retourne Buzz si un nombre contient 5 ou un multiple de 5', () => {
    expect(fb.answerFor(59)).toEqual('Buzz');
    expect(fb.answerFor(52)).toEqual('Buzz');
    expect(fb.answerFor(25)).toEqual('Buzz');
})

it('Un argument retourne FizzBuzz si un nombre contient 3 et 5 ou est un multiple des deux', () => {
    expect(fb.answerFor(53)).toEqual('FizzBuzz');
    expect(fb.answerFor(35)).toEqual('FizzBuzz');
    expect(fb.answerFor(45)).toEqual('FizzBuzz');
})