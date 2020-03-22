const PasswordLetterVariationRule = require('../PasswordRules/PasswordLetterVariationRule');
const ValidationResult = require('../PasswordValidationResult');

describe('When verify letter variation', () => {

    let subject;

    beforeEach(() => {
        subject = new PasswordLetterVariationRule(new ValidationResult());
    });

    describe('controll character variation', () => {
        test('password should contains atleast 1 lower case letter', () => {
            const validationResult = subject.ValidateRule('U23k123');
            expect(validationResult.isValid).toBeTruthy()
        })

        test('return correct error message givin password without a lower case letter', () => {
            const NO_LOWER_CASE_LETTER_MESSAGE = 'password must contain atleast 1 lower case letter';

            const validationResult = subject.ValidateRule('ABCD');
            expect(validationResult.GetValidationMessage()).toContain(NO_LOWER_CASE_LETTER_MESSAGE)
        })

        test('password should contains atleast 1 upper case letter', () => {
            const validationResult = subject.ValidateRule('a23K123');
            expect(validationResult.isValid).toBeTruthy()
        })

        test('return correct error message givin password without a upper case letter', () => {
            const NO_UPPER_CASE_LETTER_MESSAGE = 'password must contain atleast 1 upper case letter';

            const validationResult = subject.ValidateRule('abcd');
            expect(validationResult.GetValidationMessage()).toContain(NO_UPPER_CASE_LETTER_MESSAGE)
        })
    })
})