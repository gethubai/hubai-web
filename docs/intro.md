---
sidebar_position: 1
---

# Intro

HubAI is a cross-platform desktop application that will give you a new way to interact with any AI. It's your personal gateway to an expansive world of AI functionalities, right from your computer. Experience the thrill of creating, customizing, and engaging with diverse AIs, and join a vibrant community of AI enthusiasts and innovators.

## Features
- Install, and chat with multiple AIs at the same time, easily switching between them in the chat window
- Has a built-in package store that allows you to install thousands of extensions and ChatBots built by the community.
- Allows you to easily install and use chat prompts built by our community
- Supports Windows, macOS, and Linux
- 100% open source and free to use (You can check the [full source code here](https://github.com/gethubai/hubai-desktop))
- We respect your privacy. All your chat history is encrypted and saved locally on your computer we don't store any messages on our servers.
- Theme system that allows you to choose between Dark or Light mode (or any theme built by our community)
- Auto update to the latest version
- Build and publish custom extensions and AIs easily using our CLI

## Technologies
- Electron
- Javascript and Typescript
- React
- NodeJS
- MQTT.js


## Plugin development
At Hubai we have two types of plugins: Extensions and Brains.

### Brains
Brains are IA with at least one of the following capabilities: 
1. **Conversation**: Can talk with the user in the chat window (like chat-gpt, bard, etc)
2. **Voice Transcription**: Can transcript voice to text
3. **Image Recognition**: Can recognize and describe images (Soon) 


#### Resources
- [How to create your first brain](/docs/brains/getting-started)
- [How to create a brain that uses the OpenAI API](/docs/brains/tutorials/how-to-create-a-brain-with-openai)

### Extensions
Extensions allows you to extend HubAI by adding new functionalities like commands, prompts, themes, windows, etc.

#### Resources
- [How to create your first extension](/docs/extensions/getting-started)
