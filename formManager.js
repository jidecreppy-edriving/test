const uuid = require('uuid');
const AWS  = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.table_name;


module.exports.buildForm = (form) => {
    // form = {formId:uuid.v1(), ...form};
    form.formId = uuid.v1();
    return form;
}

module.exports.createForm = (form) => {
    return saveForm(form);
}

module.exports.findForm = ( {formId} ) => {
    return getForm(formId);
}

module.exports.removeForm = ( {formId} ) => {
    return deleteForm(formId);
}

function saveForm(form){
    const params = {
        TableName: TABLE_NAME,
        Item: form
    }
    
    return dynamo.put(params).promise();
}

function getForm(formId) {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            formId: formId
        }
    }

    return dynamo.get(params).promise().then( response => response.Item);
}

function deleteForm(formId) {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            formId: formId
        }
    }

    return dynamo.delete(params).promise();
}