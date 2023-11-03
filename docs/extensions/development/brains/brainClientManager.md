# Using a brain on your extension

We use the IBrainClientManager interface to interact with the brain. The BrainClientManager is a singleton that is injected into the extension's context.
The BrainClientManager is responsible for managing the brain's lifecycle and for sending prompts to the brain.

## Brain listing

### Available brains

To get a list of available brains, you can use the `getAvailableBrains` method of the BrainClientManager:

```ts
const ImageCreatorExtension: IExtension = {
  async activate(context: AppContext) {
    const brains = context.services.brainClientManager.getAvailableBrains();
  },
};
```

### Available brain Clients

To get a list of all available brain clients, you can use the `getAvailableBrainClients` method of the BrainClientManager:

```ts
const ImageCreatorExtension: IExtension = {
  async activate(context: AppContext) {
    const brainClients =
      context.services.brainClientManager.getAvailableBrainClients();
  },
};
```

### Default brainClient for a given capability

If you want to get the configured default brainClient for a given capability, you can use the `getDefaultBrainClient` method of the BrainClientManager:

```ts
const ImageCreatorExtension: IExtension = {
  async activate(context: AppContext) {
    const brainClient =
      context.services.brainClientManager.getDefaultBrainClient(
        'image_generation'
      );
  },
};
```

### BrainClient by id

If you want to get a brainClient by id, you can use the `getClient` method of the BrainClientManager:

```ts
const ImageCreatorExtension: IExtension = {
  async activate(context: AppContext) {
    const brainClient = context.services.brainClientManager.getClient('openai');
  },
};
```

## Using a brainClient

### Sending a text prompt

To send a text prompt to the brain, you can use the `sendTextPrompt` method of the BrainClient:

```ts
const MyExtension: IExtension = {
  async activate(context: AppContext) {
    const brainClient =
      context.services.brainClientManager.getClient('myBrainId');
    if (brainClient.conversation) {
      const response = await brainClient.conversation.sendTextPrompt(
        [
          {
            // Prompt with brain instructions (not required)
            role: 'brain',
            sentAt: new Date(),
            value: 'You are a personal assistant. Your name is Jonh Doe',
          },
          {
            role: 'user',
            sentAt: new Date(),
            value: 'Hello, whats your name?',
            attachments: [], // Optional, use to send images, videos, etc with the prompt (not supported by all brains)
          },
        ],
        {
          settings: {}, // pass any additional settings you want to override in the brain. If not provided, the brain will use the current user settings.
        }
      );

      console.log(response.result);
    }
  },
};
```

#### Sending attachments on a text prompt

Some brains support sending attachments on a text prompt. To send attachments, you must add an `attachments` property to the prompt object, and pass an array of [Attachment](../../api/brain-sdk/interfaces/attachment) objects.

```ts
const MyExtension: IExtension = {
  async activate(context: AppContext) {
    const brainClient =
      context.services.brainClientManager.getClient('myBrainId');
    if (brainClient.conversation) {
      const response = await brainClient.conversation.sendTextPrompt([
        {
          role: 'user',
          sentAt: new Date(),
          value: 'What is the name of the animal on the image?',
          attachments: [
            {
              size: 1555, // size in bytes
              mimeType: 'image/jpeg',
              path: 'path/to/the/image.jpg',
              originalFileName: 'image.jpg',
            },
          ],
        },
      ]);

      console.log(response.result);
    }
  },
};
```

### Sending an audio prompt (voice transcription)

To send an audio prompt to the brain, you can use the `transcribeAudio` method of the BrainClient:

```ts
const MyExtension: IExtension = {
  async activate(context: AppContext) {
    const brainClient =
      context.services.brainClientManager.getClient('myBrainId');
    if (brainClient.voiceTranscription) {
      const response = await brainClient.voiceTranscription.transcribeAudio(
        {
          audioFilePath: 'path/to/audio/file.mp3',
          language: 'en-US',
        },
        {
          settings: {}, // pass any additional settings you want to override in the brain. If not provided, the brain will use the current user settings.
        }
      );

      // Print the transcription result
      console.log(response.result);
    }
  },
};
```

### Sending a prompt to generate an image

To send a prompt to generate an image, you can use the `generateImage` method of the BrainClient:

```ts
const MyExtension: IExtension = {
  async activate(context: AppContext) {
    const brainClient =
      context.services.brainClientManager.getClient('myBrainId');
    if (brainClient.imageGeneration) {
      const response = await brainClient.imageGeneration.generateImage(
        {
          role: 'user',
          sentAt: new Date(),
          value: 'Three cats playing in the snow',
          expectedResponseType: 'base64', // Will return the image as base64
        },
        {
          settings: {}, // pass any additional settings you want to override in the brain. If not provided, the brain will use the current user settings.
        }
      );

      response.attachments.forEach((attachment) => {
        // Print the image base64
        console.log(attachment.data);
      });
    }
  },
};
```

A good example of an extension that uses the image generation capability is the [Image Creator Extension](https://github.com/gethubai/image-creator-extension/blob/1b5f7a61c641d007de187bd9b9d9fb81d16b162f/src/views/imageCreatorWindow.tsx#L103).

:::tip
You can control the response type by setting the `expectedResponseType` property of the prompt object. See [expectedResponseType](/docs/api/brain-sdk/interfaces/ImageGenerationBrainPrompt#expectedresponsetype) for all supported response types.
:::
