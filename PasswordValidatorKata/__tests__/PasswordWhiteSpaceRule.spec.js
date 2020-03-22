const PasswordWhiteSpaceRule = require('../PasswordRules/PasswordWhiteSpaceRule');
const ValidationResult = require('../PasswordValidationResult');

describe('When verify digit', () => {

    let subject;

    beforeEach(() => {
        subject = new PasswordWhiteSpaceRule(new ValidationResult());
    });

    describe('controll digit', () => {
        test('password should be valid when no white space is present', () => {
            const validationResult = subject.ValidateRule('abc1@');
            expect(validationResult.isValid).toBeTruthy()
        })

        test('return correct error message givin password containing white space', () => {
            const CONTAINS_WHITE_SPACE_MESSAGE = 'white space not allowed';

            const validationResult = subject.ValidateRule('ABCD  ');
            expect(validationResult.GetValidationMessage()).toContain(CONTAINS_WHITE_SPACE_MESSAGE)
        })
    })
})