const PasswordSpecialCharacterRule = require('../PasswordRules/PasswordSpecialCharacterRule');
const ValidationResult = require('../PasswordValidationResult');

describe('When verify digit', () => {

    let subject;

    beforeEach(() => {
        subject = new PasswordSpecialCharacterRule(new ValidationResult());
    });

    describe('controll digit', () => {
        test('password should contains atleast 1 special character', () => {
            const validationResult = subject.ValidateRule('abc1@');
            expect(validationResult.isValid).toBeTruthy()
        })

        test('return correct error message givin password without a special character', () => {
            const NO_SPECIAL_CHARACTER_MESSAGE = 'password must contain atleast 1 special character';

            const validationResult = subject.ValidateRule('ABCD');
            expect(validationResult.GetValidationMessage()).toContain(NO_SPECIAL_CHARACTER_MESSAGE)
        })
    })
})