const PasswordValidator = require('../PasswordValidator');

// RULES
const PasswordLetterVariationRule = require('../PasswordRules/PasswordLetterVariationRule');
const PasswordWhiteSpaceRule = require('../PasswordRules/PasswordWhiteSpaceRule');
const PasswordLengthRule = require('../PasswordRules/PasswordLengthRule');
const PasswordSpecialCharacterRule = require('../PasswordRules/PasswordSpecialCharacterRule');
const PasswordDigitRule = require('../PasswordRules/PasswordDigitRule');

describe('When verifypass', () => {

    const TO_SHORT_PASSWORD_MESSAGE = 'Password not valid: password must be atleast 12 character yours is only 5';

    const NO_LOWER_CASE_LETTER_MESSAGE = 'password must contain atleast 1 lower case letter';
    const NO_UPPER_CASE_LETTER_MESSAGE = 'password must contain atleast 1 upper case letter';

    const NO_DIGIT_MESSAGE = 'password must contain atleast 1 digit';

    const NO_SPECIAL_CHARACTER_MESSAGE = 'password must contain atleast 1 special character';

    const CONTAINS_WHITE_SPACE_MESSAGE = 'white space not allowed';

    let subject;

    beforeEach(() => {
        subject = new PasswordValidator();
    });

    test('return correct validation message given a valid password with no rules applied', () => {
        expect(subject.Validate(`JustSayingButYou'reMy1Viewer!`).isValid).toBeTruthy()
    })

    test('return correct message given a password without lowercase letter', () => {

        subject.addRule(new PasswordLetterVariationRule())

        // INCLUDES DIGIT, UPPERCASE, SPECIAL CARACTER AND NO WHITE SPACE
        expect(subject.Validate(`123456B@BJOK`).GetValidationMessage()).toContain(NO_LOWER_CASE_LETTER_MESSAGE)
    })

    test('return correct message given both a password without lowercase letter and with white space', () => {

        subject.addRule(new PasswordLetterVariationRule())
        subject.addRule(new PasswordWhiteSpaceRule())

        // INCLUDES DIGIT, UPPERCASE, SPECIAL CARACTER AND NO WHITE SPACE
        let validationMessage = subject.Validate(`123456B@BJOK `).GetValidationMessage()
        expect(validationMessage).toContain(NO_LOWER_CASE_LETTER_MESSAGE)
        expect(validationMessage).toContain(CONTAINS_WHITE_SPACE_MESSAGE)
    })

    test('Pass a correct password with all complete set of rules', () => {

        subject.addRule(new PasswordLetterVariationRule())
        subject.addRule(new PasswordWhiteSpaceRule())
        subject.addRule(new PasswordLengthRule())
        subject.addRule(new PasswordSpecialCharacterRule())
        subject.addRule(new PasswordDigitRule())

        // INCLUDES DIGIT, UPPERCASE, LOWERCASE, SPECIAL CARACTER AND NO WHITE SPACE
        expect(subject.Validate(`JustSayingButYou'reMy1Viewer!`).isValid).toBeTruthy()
    })
})