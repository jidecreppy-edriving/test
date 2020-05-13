const uuid = require("uuid");
const TABLE_NAME = process.env.table_name;
// important change
class FormManager {
  constructor(dynamo) {
    this.form = null;
    this.dynamo = dynamo;
  }

  buildForm(form) {
    this.form = form;
    this.form.formId = uuid.v1();
    return this.form;
  };

  createForm(form) {
    return this.saveForm(form);
  };

  findForm({ formId }) {
    return this.getForm(formId);
  };

  removeForm({ formId }) {
    return this.deleteForm(formId);
  };

  saveForm(form) {
    const params = {
      TableName: TABLE_NAME,
      Item: form,
    };

    return this.dynamo.put(params).promise();
  }

  getForm(formId) {
    const params = {
      TableName: TABLE_NAME,
      Key: { formId: formId },
    };

    return this.dynamo
      .get(params)
      .promise()
      .then((response) => response.Item);
  }

  deleteForm(formId) {
    const params = {
      TableName: TABLE_NAME,
      Key: { formId: formId },
    };

    return this.dynamo.delete(params).promise();
  }
}

module.exports = FormManager;
