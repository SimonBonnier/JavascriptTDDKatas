const PasswordLengthRule = require('../PasswordRules/PasswordLengthRule');
const ValidationResult = require('../PasswordValidationResult');

describe('When verify length', () => {

    let subject;

    beforeEach(() => {
        subject = new PasswordLengthRule(new ValidationResult());
    });

    describe('controll password length', () => {
        test('password cannot be empty', () => {
            const validationResult = subject.ValidateRule('');
            expect(validationResult.isValid).toBeFalsy();
        })

        test('is not valid cause password must contains at least 12 characters', () => {
            const TO_SHORT_PASSWORD_MESSAGE = 'Password not valid: password must be atleast 12 character yours is only 5';

            const validationResult = subject.ValidateRule('abcde');
            expect(validationResult.isValid).toBeFalsy()
            expect(validationResult.GetValidationMessage()).toBe(TO_SHORT_PASSWORD_MESSAGE)
        })

        test('is valid when password is over or at 12 characters', () => {
            const validationResult = subject.ValidateRule('1234a6789123');
            expect(validationResult.isValid).toBeTruthy()
        })
    })
})