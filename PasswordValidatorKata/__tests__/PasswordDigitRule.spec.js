const PasswordDigitRule = require('../PasswordRules/PasswordDigitRule');
const ValidationResult = require('../PasswordValidationResult');

describe('When verify digit', () => {

    let subject;

    beforeEach(() => {
        subject = new PasswordDigitRule(new ValidationResult());
    });

    describe('controll digit', () => {
        test('password should contains atleast 1 digit', () => {
            const validationResult = subject.ValidateRule('abc1');
            expect(validationResult.isValid).toBeTruthy()
        })

        test('return correct error message givin password without a digit', () => {
            const NO_DIGIT_MESSAGE = 'password must contain atleast 1 digit';

            const validationResult = subject.ValidateRule('ABCD');
            expect(validationResult.GetValidationMessage()).toContain(NO_DIGIT_MESSAGE)
        })
    })
})