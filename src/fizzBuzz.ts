export class fizzBuzz{
    answerFor(arg0: number): string | number {
        const strNum = arg0.toString();
        const isFizz = arg0 % 3 === 0 || strNum.includes('3');
        const isBuzz = arg0 % 5 === 0 || strNum.includes('5');

        if (isFizz && isBuzz) return 'FizzBuzz';
        if (isFizz) return 'Fizz';
        if (isBuzz) return 'Buzz';
        return arg0;
    }
}