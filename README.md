# [Serverless](https://serverless.com/) Scaffold For Alexa Skill Development

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

This is a "spike" to work through lambda + alexa workflows to help speed up the development cycles.

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

Install Project Local Dependencies

`yarn install`

## Setup AWS credentials

https://serverless.com/framework/docs/providers/aws/guide/credentials/

You will want to setup A profile for each environment : (<projectName>Development, <projectName>Production)

```sh
serverless config credentials --provider aws --key <KEY> --secret <SECRET> --profile scaffoldDevelopment
```

```sh
Serverless: Setting up AWS...
Serverless: Saving your AWS profile in "~/.aws/credentials"...
Serverless: Success! Your AWS access keys were stored under the "<projectName><environment>" profile.
```

This can also be done manually by adding the appropriate profiles in

`~/.aws/credentials`


## Setting Up AWS Policy

You will want to create the custom policy in AWS to allow Serverless to do its job
The current policy that works `providers/aws/serverless.policy`

You may want to lock this down a bit further

## Linting

For Static Linting we leverage ESLint with the rules defined in `.eslintrc.js`

`yarn lint`

## Testing

For Testing we leverage JEST to run both the Unit and Integration tests.

#### Unit

`yarn test:unit`

#### Integration

For Integration testing we are leveraging Lambda Local to test the lambda method integration locally

`yarn test:integration`

<!-- `serverless invoke --function spike --stage dev --region us-east-1 --log` -->
<!-- `serverless invoke --function <functionName> --stage <stage> --region us-east-1 --log` -->

## Security Check

Node Security helps you keep your node applications secure

All of the [advisories](https://nodesecurity.io/advisories) are enabled by default.
You can add exception within the `.nsprc` file

`yarn security`


## Deploying Service

For Deploying our Lambda Functions we leverage Serverless to create the Stack
and push updates to existing lambda functions

`yarn deploy`

Serverless Deploy Output should look something like this

```sh
Serverless: Bundling with Webpack...
Time: 643ms
        Asset     Size  Chunks             Chunk Names
     alexa.js   125 kB       0  [emitted]  alexa
      read.js  2.86 kB       1  [emitted]  read
    create.js  2.87 kB       2  [emitted]  create
 alexa.js.map   148 kB       0  [emitted]  alexa
  read.js.map  3.44 kB       1  [emitted]  read
create.js.map  3.46 kB       2  [emitted]  create
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading service .zip file to S3 (71.28 KB)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.......
Serverless: Stack update finished...
Serverless: Removing old service versions...
Service Information
service: scaffold
stage: dev
region: us-east-1
api keys:
  DummyKey: fLuGVZ4uHdaRoPbDIPgZ18ylF397e9e28atbqx0l
endpoints:
  POST - https://om0u4ne8n0.execute-api.us-east-1.amazonaws.com/dev/create
  GET - https://om0u4ne8n0.execute-api.us-east-1.amazonaws.com/dev/read
functions:
  scaffold-dev-read: arn:aws:lambda:us-east-1:558960024175:function:scaffold-dev-read
  scaffold-dev-alexa: arn:aws:lambda:us-east-1:558960024175:function:scaffold-dev-alexa
  scaffold-dev-create: arn:aws:lambda:us-east-1:558960024175:function:scaffold-dev-create
✨  Done in 56.75s.
```

## Deploying an individual function within service

Currently Unsupported, tracking issue [here](https://github.com/elastic-coders/serverless-webpack/issues/60)


## Testing Deployed Skill without Device

https://echosim.io/

## Notes

Workaround for production pruning of dev dependencies
https://github.com/yarnpkg/yarn/issues/696


DLQ Support for Lambdas (waiting on CF impl)
https://github.com/serverless/serverless/issues/2982

Emulate AWS λ and API Gateway locally when developing your Serverless project
https://github.com/dherault/serverless-offline
