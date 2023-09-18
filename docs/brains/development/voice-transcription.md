# Brain with VoiceTranscription Capability

A brain with the `voice_transcription` capability is used to receive audio prompts from the HubAI app and transcribe it to texts. Example of brains with this capability: Google Speech-to-Text, OpenAI Whisper-1, etc.

To create a brain with this capability, you must implement the [IAudioTranscriberBrainService](../../api/brain-sdk/interfaces/IAudioTranscriberBrainService) interface on your BrainService:

```ts
export default class MyBrainService
  implements
    IBrainService,
    IAudioTranscriberBrainService<ISettings>
{
  transcribeAudio(
    prompt: LocalAudioPrompt,
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse> {
    ...
  }
}
```

You will receive a [LocalAudioPrompt](../../api/brain-sdk/modules#localaudioprompt) object, that contains the path of the audio file and the language. You will also receive a [IBrainPromptContext](../../api/brain-sdk/interfaces/IBrainPromptContext) object, which contains the user's information and the brain's settings.

The transcribeAudio method must return a [BrainPromptResponse](../../api/brain-sdk/modules#brainpromptresponse) object, which contains the response to the user and a [BrainSettingsValidationResult](../../api/brain-sdk/classes/BrainSettingsValidationResult) object, which contains the validation result of the brain's settings.

## Examples

### Simple Echo Brain

Simple brain that just return the audio file path and the language:

```ts
transcribeAudio(
    prompt: LocalAudioPrompt,
    context: IBrainPromptContext<ISettings>,
  ): Promise<BrainPromptResponse> {
  const validationResult = this.validateSettings(context.settings);

  return {
    result: 'This is the prompt result using the language:' + prompt.language + ' path:' + prompt.audioFilePath,
    validationResult,
  };
}
```

### OpenAI API

An example of a brain that uses the [OpenAI API Package](https://www.npmjs.com/package/@tectalic/openai) to generate responses:

```ts
import openAiSdk from '@tectalic/openai';

async transcribeAudio(
    prompt: LocalAudioPrompt,
    context: IBrainPromptContext<UserSettings>,
  ): Promise<BrainPromptResponse> {
  const validationResult = this.validateSettings(context.settings);

  if (!validationResult.success) {
    return {
      result: validationResult.getMessage(),
      validationResult,
    };
  }

  const params = {
    file: prompt.audioFilePath,
    language:
      prompt.language ||
      context.settings.audioTranscriberDefaultLanguage ||
      'en',
    model: context.settings.audioTranscriberModel,
  };

  const result = await openAiSdk(
    context.settings.apiKey,
  ).audioTranscriptions.create(params);

  return { result: result.data.text, validationResult };
}

validateSettings(settings: UserSettings): BrainSettingsValidationResult {
  const validation = new BrainSettingsValidationResult();

  if (!settings?.apiKey || settings.apiKey.length < 10) {
    validation.addFieldError('apiKey', 'API key format is invalid or is missing');
  }

  return validation;
}
```

:::tip
Check our [API Reference](../../api/brain-sdk/modules) for more information about the interfaces and objects used in the BrainService.
:::
