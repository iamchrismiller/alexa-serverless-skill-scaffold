# [Serverless](https://serverless.com/) Scaffold For Alexa Skill Development

## Overview

This is a "spike" to work through lambda + alexa workflows.

This Package combines a few pieces of technology to streamline the Alexa Skill development workflow. I would recommend checking out and reading through the doc's for each of the following libraries and frameworks if you haven't already.

- [ESLint](http://eslint.org/)
  open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.

- [Jest](https://facebook.github.io/jest/)
  Painless JavaScript Testing
  Adaptable: Jest uses Jasmine assertions by default and Jest is modular, extendible and configurable.

- [Serverless](https://serverless.com/)
  develop and deploy your AWS Lambda functions, along with the AWS infrastructure resources they require. It's a CLI that offers structure, automation and best practices out-of-the-box, allowing you to focus on building sophisticated, event-driven, serverless architectures, comprised of Functions and Events.

- [Lambda Local](https://github.com/ashiina/lambda-local)
  test Amazon Lambda functions on your local machine with sample event data. The context of the Lambda function is already loaded so you do not have to worry about it. You can pass any event JSON object as you please.

## Installation

Global due to packages being removed when we prune the devDependencies
`yarn global add serverless@1.4.0 serverless-test-plugin@0.2.4`

You may need to add the following to your ~/.bash_profile
if you encounter an issue with global yarn binaries
`export PATH="$PATH:$(yarn global bin)"`

Install Project Local Dependencies
`yarn install`

## Setup AWS credentials

https://serverless.com/framework/docs/providers/aws/guide/credentials/

```sh
serverless config credentials --provider aws --key <KEY> --secret <SECRET>
```

```sh
Serverless: Setting up AWS...
Serverless: Saving your AWS profile in "~/.aws/credentials"...
Serverless: Success! Your AWS access keys were stored under the "default" profile.
```

## Setting Up AWS Policy

You will want to create the custom policy in AWS to allow Serverless to do its job
The current policy that works is in the root of this project named `serverless.policy`

You may want to lock this down a bit further

## Linting

For Static Linting we leverage ESLint with the rules defined in `.eslintrc.js`

`yarn run lint`

## Testing

For Testing we leverage JEST to run both the Unit and Integration tests.

#### Unit

`yarn run test:unit`

#### Integration

For Integration testing we are leveraging Lambda Local to test the lambda method integration locally

`yarn run test:integration`

<!-- `serverless invoke --function spike --stage dev --region us-east-1 --log` -->
<!-- `serverless invoke --function <functionName> --stage <stage> --region us-east-1 --log` -->

## Deploying Service

For Deploying our Lambda Functions we leverage Serverless to create the Stack
and push updates to existing lambda functions

`yarn run deploy`

Serverless Deploy Output should look something like this

```sh
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading service .zip file to S3 (3.81 MB)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.
Serverless: Stack update finished...
Service Information
service: scaffold
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  None
functions:
  scaffold-dev-alexa: arn:aws:lambda:us-east-1:558960024175:function:scaffold-dev-alexa
  scaffold-dev-index: arn:aws:lambda:us-east-1:558960024175:function:scaffold-dev-index
✨  Done in 52.49s.
 ```

## Notes

Workaround for production pruning of dev dependencies
https://github.com/yarnpkg/yarn/issues/696
