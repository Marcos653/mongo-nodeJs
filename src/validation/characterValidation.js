const Ajv = require('ajv');
const ajv = new Ajv();

const characterJsonSchema = {
    type: 'object',
    properties: {
      realName: { type: 'string' },
      nickname: { type: 'string' },
      description: { type: 'string' },
    },
    required: ['realName', 'nickname', 'description'],
    additionalProperties: false,
};

const validate = ajv.compile(characterJsonSchema);

class Validation {
    static validateCharacter(data) {
        const isValid = validate(data);

        if (!isValid) {
            this.throwValidationError(validate.errors);
        }
    }

    static throwValidationError(errors) {
        const errorDetails = errors.map(err => {
            return {
                field: err.dataPath.slice(1),
                message: err.message
            };
        });

        const error = new Error('Invalid character data');
        error.details = errorDetails;
        throw error;
    }
}

module.exports = Validation;
