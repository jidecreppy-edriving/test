const FormManager = require("../formManager");
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const formManager = new FormManager(dynamo);

// This is a very important change

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
});

test('Creating a form returns an id', () => {
    let input = {'name':'amazon'};
    let form = formManager.buildForm(input);
    expect(form).toMatchObject({ ...input, 'formId':form.formId });
});