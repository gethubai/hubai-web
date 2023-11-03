---
sidebar_position: 4
---

# Brain with ImageGeneration Capability

A brain with the `image_generation` capability is used to receive text prompts from the HubAI app and generate images from it. Example of brains with this capability: OpenAI DALL-E, etc.

To create a brain with this capability, you must implement the [IImageGenerationBrainService](../../api/brain-sdk/interfaces/IImageGenerationBrainService) interface on your BrainService:

```ts
export default class MyBrainService
  implements
    IBrainService,
    IImageGenerationBrainService<ISettings>
{
  async generateImage(
    prompts: ImageGenerationBrainPrompt[],
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse>
    ...
  }
}
```

You will receive a list of [ImageGenerationBrainPrompt](../../api/brain-sdk/interfaces/ImageGenerationBrainPrompt) object, that contains the prompt to generate the image and the expected response format for the image. You will also receive a [IBrainPromptContext](../../api/brain-sdk/interfaces/IBrainPromptContext) object, which contains the user's information, brain's settings and some additional data.

The method must return a [BrainPromptResponse](../../api/brain-sdk/modules#brainpromptresponse) object, which contains the response to the user and a [BrainSettingsValidationResult](../../api/brain-sdk/classes/BrainSettingsValidationResult) object, which contains the validation result of the brain's settings. The generated images should be included in the attachments property of the BrainPromptResponse object.

## Examples

### [OpenAI API](https://www.npmjs.com/package/openai)

```ts
import OpenAI from 'openai';
import fs from 'fs';
import fetch from 'node-fetch';

async generateImage(
    prompts: ImageGenerationBrainPrompt[],
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse> {
    // OpenAI API does not support multiple prompts for DALL-E image generation, so we just get the latest one
    const prompt = prompts[prompts.length - 1];
    // First we validate the settings
    const validationResult = this.validateSettings(context.settings);

    // If the settings are not valid we return the validation result
    if (!validationResult.success) {
      return Promise.resolve({
        result: validationResult.getMessage(),
        validationResult,
      });
    }

    let responseFormat = 'url';
    // Check if the prompt expects a base64 encoded image as response
    if (prompt.expectedResponseType === 'base64') {
      responseFormat = 'b64_json';
    }

    const params: OpenAI.Images.ImageGenerateParams = {
      prompt: prompt.message.trim(),
      n: Number.parseInt(context.settings.imageGenerationCount),
      size: context.settings.imageGenerationSize,
      user: context.senderId,
      response_format: responseFormat as any,
    };

    // Call the API
    const result = await new OpenAI({ apiKey: settings.apiKey }).images.generate(
      params,
    );

    // Get the urls from the response
    const urls = result.data.map((d) =>
      responseFormat === 'url' ? d.url : d.b64_json,
    );

    const attachments: ResponseFile[] = [];

    // Parse the attachments
    for (const url of urls) {
      let data: Buffer | string = url;
      // If the prompt expects a binary response we fetch the image and return it as a buffer
      if (prompt.expectedResponseType === 'binary') {
        data = await (await fetch(url)).buffer();
      }

      attachments.push({
        data,
        fileType: 'image',
        mimeType: 'image/png', // mimeType is always png for DALL-E
      });
    }

    return {
      result: '', // If you want to return any additional text you can do it here
      attachments, // Attachments are returned as a list of files
      validationResult,
    };
  }
```

:::tip
Check our [API Reference](../../api/brain-sdk/modules) for more information about the interfaces and objects used in the BrainService.
:::
