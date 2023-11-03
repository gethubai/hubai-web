---
sidebar_position: 2
---

# Brain with Conversation Capability

A brain with the `conversation` capability is used to receive text prompts from the HubAI app and send text responses back. Example of brains with this capability: ChatGPT, Bard, etc.

To create a brain with this capability, you must implement the [ITextBrainService](../../api/brain-sdk/interfaces/ITextBrainService) interface on your BrainService:

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

## Examples

### Simple Echo Brain

Conversation brain that just echoes the user's input:

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

### ChatGPT API Brain

An example of a brain that uses the [ChatGPT Package](https://www.npmjs.com/package/chatgpt) to generate responses:

```ts
import { ChatGPTUnofficialProxyAPI } from 'chatgpt';

sendTextPrompt(
    prompts: TextBrainPrompt[],
    context: IBrainPromptContext<UserSettings>,
  ): Promise<BrainPromptResponse> {
    const api = new ChatGPTUnofficialProxyAPI({
        accessToken: context.settings.accessToken,
        debug: true,
        apiReverseProxyUrl: context.settings.apiReverseProxyUrl,
    });;

    const validationResult = this.validateSettings(context.settings);

    if (!validationResult.success) {
        return Promise.resolve({
            result: validationResult.getMessage(),
            validationResult,
        });
    }

    return new Promise((resolve, reject) => {
        const prompt = prompts[0].message;
        api.sendMessage(prompt)
            .then((res) => resolve({ result: res.text, validationResult }))
            .catch((err) => reject(err));
    });
}

validateSettings(settings: UserSettings): BrainSettingsValidationResult {
    const validation = new BrainSettingsValidationResult();

    if (!settings.accessToken)
      validation.addFieldError('accessToken', 'cannot be empty');
    if (!settings.apiReverseProxyUrl)
      validation.addFieldError('apiReverseProxyUrl', 'cannot be empty');
    return validation;
}
```

:::tip
Check our [API Reference](../../api/brain-sdk/modules) for more information about the interfaces and objects used in the BrainService.
:::
