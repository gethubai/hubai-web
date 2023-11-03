[@hubai/brain-sdk](../README.md) / [Exports](../modules.md) / ITextBrainService

# ITextBrainService<TSettings\>

## Type parameters

| Name |
| :------ |
| `TSettings` |

## Hierarchy

- [`IBrainService`](IBrainService.md)

  ↳ **`ITextBrainService`**

## Table of contents

### Methods

- [sendTextPrompt](ITextBrainService.md#sendtextprompt)

## Methods

### sendTextPrompt

▸ **sendTextPrompt**(`prompts`, `context`): `Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

Sends a text prompt to the brain

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompts` | [`TextBrainPrompt`](TextBrainPrompt.md)[] |
| `context` | [`IBrainPromptContext`](IBrainPromptContext.md)<`TSettings`\> |

#### Returns

`Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

The response from the brain

#### Defined in

[models/brainService.ts:150](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L150)
