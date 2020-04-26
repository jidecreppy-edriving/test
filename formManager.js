const uuid = require("uuid");
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.table_name;

class FormManager {
  constructor() {
    this.form = null;
  }
  
  buildForm = (form) => {
    this.form = form;
    this.form.formId = uuid.v1();
    return this.form;
  };

  createForm = (form) => {
    return this.saveForm(form);
  };

  findForm = ({ formId }) => {
    return this.getForm(formId);
  };

  removeForm = ({ formId }) => {
    return this.deleteForm(formId);
  };

  saveForm(form) {
    const params = {
      TableName: TABLE_NAME,
      Item: form,
    };

    return dynamo.put(params).promise();
  }

  getForm(formId) {
    const params = {
      TableName: TABLE_NAME,
      Key: { formId: formId },
    };

    return dynamo
      .get(params)
      .promise()
      .then((response) => response.Item);
  }

  deleteForm(formId) {
    const params = {
      TableName: TABLE_NAME,
      Key: { formId: formId },
    };

    return dynamo.delete(params).promise();
  }
}

module.exports = FormManager;
