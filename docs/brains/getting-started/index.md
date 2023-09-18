---
sidebar_position: 1
---

# Getting Started

First, you will need to install the HubAI CLI ([see installation](/docs/cli/getting-started.md)).


## Creating
To create a brain, run:

```shell
hubai brain create
```

Choose the template you want to use and follow the instructions.

## Install and Run

Before you run and test your brain, you must create a development package and install it in your HubAI app.

### Generating a development package

To generate a dev package, go to the root folder of your brain project and run:

```shell
npm run package:dev
```

If everything goes well, this will generate a .hext file in the root folder of your project.

### Installing the development package
Open the HubAI app, go to the "Brains" tab, click on the "+" button and select the .hext file you just generated:

![Add local brain](./add-local-brain.png)

(Restart the app after installing it)

### Running

Go to the root folder of your brain project and run:
```shell
npm start
```


Now everytime you change your code, the brain will be automatically reloaded, to test it just go to the HubAI app, start a new chat and select your brain. 

:::caution
If you change any settings inside package.json, you will need to generate a new dev package and install it again.
:::
