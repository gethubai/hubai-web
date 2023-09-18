---
sidebar_position: 1
---

# The first brain

## Brain Service
After creating your first brain, you will have a BrainService class that looks like this:

```ts
export default class MyBrainService
  implements
    IBrainService,
    ITextBrainService<ISettings>,
    IAudioTranscriberBrainService<ISettings>
{
  async transcribeAudio(
    prompt: LocalAudioPrompt,
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse> {
    ...
  }

  async sendTextPrompt(
    prompts: TextBrainPrompt[],
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse> {
    ...
  }

  validateSettings(settings: ISettings): BrainSettingsValidationResult {
    ...
  }
}
```

Pay a closer attention to the interfaces that the class implements:

1. [ITextBrainService](../../api/brain-sdk/interfaces/ITextBrainService): This interface is used to receive text prompts from the HubAI app. If your brain has the `conversation` capability, you must implement this interface.
2. [IAudioTranscriberBrainService](../../api/brain-sdk/interfaces/IAudioTranscriberBrainService): This interface is used to receive audio prompts from the HubAI app and transcribe it to texts. If your brain has the `audio_transcriber` capability, you must implement this interface.

## Conversation Brain

The conversation brain is the most common type of brain, it is used to receive text prompts from the HubAI app and send text responses back.

To create a conversation brain, you must implement the `ITextBrainService<ISettings>` interface on your BrainService:

```ts
export default class MyBrainService
  implements
    IBrainService,
    ITextBrainService<ISettings>
{
  async sendTextPrompt(
    prompts: TextBrainPrompt[],
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse> {
    ...
  }
}
```

You will receive an array of [TextBrainPrompt](../../api/brain-sdk/interfaces/TextBrainPrompt) objects, each object represents a prompt from the user. You will also receive a [IBrainPromptContext](../../api/brain-sdk/interfaces/IBrainPromptContext) object, which contains the user's information and the brain's settings.

The sendTextPrompt method must return a [BrainPromptResponse](../../api/brain-sdk/modules#brainpromptresponse) object, which contains the response to the user and a [BrainSettingsValidationResult](../../api/brain-sdk/classes/BrainSettingsValidationResult) object, which contains the validation result of the brain's settings.

Here's an example of a conversation brain that just echoes the user's input:

```ts
sendTextPrompt(
    prompts: TextBrainPrompt[],
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse> {
    const validationResult = this.validateSettings(context.settings);

    return Promise.resolve({
      result: 'Text prompt received:\n ``json \n' + JSON.stringify(prompts) + '\n``',
      validationResult,
    });
  }
  ```

:::tip
Check our [API Reference](../../api/brain-sdk/modules) for more information about the interfaces and objects used in the BrainService.
:::

### 