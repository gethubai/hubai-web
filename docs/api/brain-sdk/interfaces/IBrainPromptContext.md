# IBrainPromptContext<TPromptSettings\>

Some additional data we can send to the brain along with the prompt

## Type parameters

| Name |
| :------ |
| `TPromptSettings` |

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [conversationId](IBrainPromptContext.md#conversationid)
- [id](IBrainPromptContext.md#id)
- [senderId](IBrainPromptContext.md#senderid)
- [settings](IBrainPromptContext.md#settings)

## Properties

### conversationId

• `Optional` **conversationId**: `string`

A conversation id to group prompts together

#### Defined in

[models/brainService.ts:102](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L102)

___

### id

• **id**: `string`

The unique id of the prompt

#### Defined in

[models/brainService.ts:97](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L97)

___

### senderId

• **senderId**: `string`

The id of the user who is sending the prompt

#### Defined in

[models/brainService.ts:105](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L105)

___

### settings

• `Optional` **settings**: `TPromptSettings`

The brain settings to use for this prompt

#### Defined in

[models/brainService.ts:108](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L108)
