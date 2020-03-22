class PasswordValidationResult {
    constructor() {
        this.SUCESSRESULT = 'Valid password'
        this.FAILEDRESULT = 'Password not valid:'
        this.validationMessages = [];
        this.isValid = true;
    }

    GetValidationMessage() {
        if (this.isValid) {
            return this.SUCESSRESULT
        }
        let validationMessages = this.validationMessages.join(', ', this.validationMessages);
        return `${this.FAILEDRESULT} ${validationMessages}`
    }
}

module.exports = PasswordValidationResult;