const PasswordValidationResult = require('./PasswordValidationResult')

class PasswordValidator {
    constructor() {
        this._rules = [];
        this.validationResult = new PasswordValidationResult()
    }

    addRule(newRule) {
        newRule.addValidationResult(this.validationResult);
        this._rules.push(newRule)
    }

    removeRule(ruleToRemove) {
        const indexToRemove = this._rules.indexOf(ruleToRemove)
        delete this._rules[indexToRemove]
    }

    Validate(password) {
        this._rules.forEach(rule => {
            this.validationResult = rule.ValidateRule(password)
        });
        return this.validationResult;
    }
}

module.exports = PasswordValidator;