const FormManager = require("../formManager");
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const formManager = new FormManager(dynamo);

test('Creating a form returns an id', () => {
    let input = {'name':'amazon'};
    let form = formManager.buildForm(input);
    expect(form).toMatchObject({ ...input, 'formId':form.formId });
});