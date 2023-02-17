const calculator = require('../calculator')

describe ("calculator tests", () => {
    test("adding 1 + 2 should return 3", () => {
        expect(calculator.sum(1,2)).toBe(3);
    });

    test('2 - 2 should not return 1', () => {
        expect(calculator.diff(2,2)).not.toBe(1);
    });

    test('should return null', () => {
        expect(calculator.isNull()).toBeNull();
    });
    test('should return falsy', () => {
        //expect(calculator.checkValue(0)).toBeFalsy();
        //expect(calculator.checkValue(null)).toBeFalsy();
        //expect(calculator.checkValue(undefined)).toBeFalsy();
        expect(calculator.checkValue('hi')).toBeTruthy();

    });

    test("should be less than 100", () =>{
        const num1 = 50;
        const num2 = 60;
        //expect(num1 + num2).toBeLessThan(100);
        //expect(num1 + num2).toBeLessThan(120);
        expect(num1 + num2).toBeLessThanOrEqual(130);

    });

    test('Should have character e in the eyelide', () => {
        //expect('eyelide').toMatch(/e/);
        //expect('eyelide').toMatch(/E/);
        expect('eyelide').toMatch(/E/e);

    })


});