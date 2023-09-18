# @hubai/brain-sdk

## Table of contents

### Enumerations

- [PromptType](enums/PromptType)

### Classes

- [BrainSettingsValidationResult](classes/BrainSettingsValidationResult)

### Interfaces

- [IAudioTranscriberBrainService](interfaces/IAudioTranscriberBrainService)
- [IBrainPromptContext](interfaces/IBrainPromptContext)
- [IBrainService](interfaces/IBrainService)
- [IBrainSettings](interfaces/IBrainSettings)
- [ITextBrainService](interfaces/ITextBrainService)
- [TextBrainPrompt](interfaces/TextBrainPrompt)

### Type Aliases

- [BrainPromptResponse](modules.md#brainpromptresponse)
- [LocalAudioPrompt](modules.md#localaudioprompt)

## Type Aliases

### BrainPromptResponse

Ƭ **BrainPromptResponse**: `Object`

#### Type declaration 

| Name | Type |
| :------ | :------ |
| `result` | `string` |
| `validationResult` | [`BrainSettingsValidationResult`](classes/BrainSettingsValidationResult) |

#### Defined in

models/brainService.ts:3

___

### LocalAudioPrompt

Ƭ **LocalAudioPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `audioFilePath` | `string` |
| `language` | `string` |

#### Defined in

models/brainService.ts:31
