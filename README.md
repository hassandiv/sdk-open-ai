# OpenAI ChatGPT based on model gpt-3.5-turbo

> OpenAI ChatGPT SDK, built with Node &amp; TypeScript.

## Table of Contents

- [General Information](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [How to test](#how-to-test)
- [Acknowledgements](#acknowledgements)
- [MIT License](#mit-License)
- [Contact](#contact)

## General Information

sdk-open-ai allows developers to incorporate Open AI features into their applications, such as getting list models, retrieve a model, create a chat completion, create edit, create embeddings, create moderation, create image, create image edit, create image variation. The SDK was created to simplify and streamline the process of integrating these functionalities into applications.

## Technologies Used

- Node.js - version 18.14.0
- TypeScript - version 5.0.3

## Features

- Create a chat completion in a similar way to the ChatGPT application.
- Access to various methods to retrieve detailed information.
- Simple and intuitive interface for easy integration.

## Installation

To install the SDK, simply run the following command on your project:

```
npm install sdk-open-ai
//OR
yarn add sdk-open-ai
```

## Usage

To use the SDK, simply import it into your app.ts file in your project and create a new instance of the OpenAI class:

```ts
import OpenAI from "sdk-open-ai";
```

The OpenAI constructor accepts a configuration object with the following properties:

- The `apiKey` property is required. To utilize the SDK, you are required to obtain an access token from https://rapidapi.com/openai-api-openai-api-default/api/openai80/.
- The `baseUrl` is optional and has a default value of https://openai80.p.rapidapi.com/. It is only necessary to include the baseUrl property if a fresh version of the API is published.

```ts
const client = new OpenAI({
  apiKey: "token", // An access token is required.
});
```

## Methods

The SDK provides a number of methods for accessing various endpoints of the API. All methods return a Promise that resolves with the API response.

The `getModels()` method retrieves all the language models available in the API.

```ts
client
  .getModels()
  .then((res) => {
    console.log("List of models:", res);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
```

The `getModelByName(name)` method retrieves a single language model instance using its name. The name should be provided as a string, the following are some language model name for the OpenAI models:

```ts
const name = "gpt-3.5-turbo";
//or
//const name = "babbage";
//const name = "davinci";

client
  .getModelByName(name)
  .then((model) => {
    console.log("Retrieves a single model name", model);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
```

The `createChatCompletion(newChat)` method creates a completion for the chat message. The method takes an object with the model name as a string and messages array of object that specifies the role and content for the chat to be retrieved.

```ts
const newChat = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "tell me about a good place for pizza?",
    },
  ],
};

client
  .createChatCompletion(newChat)
  .then((res: any) => {
    console.log(res.choices.map((chat) => chat.message));
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
```

## How to test the SDK

- Open your project folder in a code editor or terminal.
- Run the following command in the terminal to initialize a new TypeScript project:

```ts
npm init -y
```

- Run the following command to install TypeScript as a development dependency:

```ts
npm install typescript -D
//OR
yarn add typescript -D
```

- Run the following command to create a tsconfig.json file:

```ts
npx tsc --init
```

- This command generates a default tsconfig.json file in the root directory of your project.

- Copy and paste the code snippet below into the tsconfig.json file to replace its default content. This configuration sets options for the TypeScript compiler such as module, declaration, target, and outDir. The include property specifies the directories or files to be compiled, while the exclude property specifies the directories or files to be excluded from compilation.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2017",
    "sourceMap": false,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "experimentalDecorators": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "test", "lib", "**/*spec.ts"]
}
```

- Now, compile the TypeScript files to JavaScript using the TypeScript compiler (tsc) by running the following command:

```ts
npx tsc
```

- This will generate compiled JavaScript files in a new dist directory, based on the configuration defined in the tsconfig.json file.

- You can now test the SDK using the compiled JavaScript files in the dist director by running the following command:

```ts
node dist/app.js
```

## Acknowledgements

- This project was inspired by the ChatGPT language model.
- Many thanks to the creators of the following resources that were used in the development of this project:
- Rapid API: https://rapidapi.com/openai-api-openai-api-default/api/openai80/
- OpenAI API: https://openai80.p.rapidapi.com/
- microbundle: https://www.npmjs.com/package/microbundle

## MIT License

Copyright (c) [2023] [Elhassan Abdelhafez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

## Contact

- Created by https://github.com/hassandiv - feel free to contact me!
