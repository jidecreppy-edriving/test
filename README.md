# Serverless

## Prerequisites:

- [NodeJS](https://nodejs.org/en/)
- [IAM User Credentials](https://aws.amazon.com/iam/)

Serverless Framework deployment - eDriving Form Service

The resources set for deployment are:

- API gateway and methods (GET, POST, DELETE)
- Lambda functions
- Dynamo DB table 

The project root contains a `serverless.yaml` file that defines the application's AWS resources sent to Cloud Formation.

If you prefer to use an integrated development environment (IDE) to build and test your application, you can use the Serverless IDE.  
The Serverless IDE is an open source plug-in for VS Code providing support for the Serverless Framework and also other deployment frameworks such as AWS SAM and even Cloud Formation.

* [VS Code](https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html)

## Deploy your application
* [Install the Serverless CLI](https://https://serverless.com/framework/docs/getting-started/)
* [AWS configuration](https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/)
* [Create a project](https://serverless.com/framework/docs/providers/aws/cli-reference/create/)

To build and deploy your application for the first time, run the following in your shell:

```bash
serverless package
serverless deploy
```

## Unit tests
* [How to test serverless applications](https://serverless.com/framework/docs/providers/aws/cli-reference/create/)
