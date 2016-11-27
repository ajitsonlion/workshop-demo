var schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 4,
      "maxItems": 9,
      "items": {
        "type": "object",
        "faker":"helpers.userCard"
      },
      required: ['id', 'firstName', 'lastName', 'email']
    }

  },
  required: ['users']
};

module.exports = schema;
