# TextBrainPrompt

Represents a text prompt sent to the brain

## Hierarchy

- **`TextBrainPrompt`**

  ↳ [`ImageGenerationBrainPrompt`](ImageGenerationBrainPrompt.md)

## Table of contents

### Properties

- [attachments](TextBrainPrompt.md#attachments)
- [message](TextBrainPrompt.md#message)
- [role](TextBrainPrompt.md#role)
- [sentAt](TextBrainPrompt.md#sentat)

## Properties

### attachments

• `Optional` **attachments**: [`FileAttachment`](../modules.md#fileattachment)[]

A list of file attachments

#### Defined in

[models/brainService.ts:140](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L140)

___

### message

• **message**: `string`

The text prompt

#### Defined in

[models/brainService.ts:135](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L135)

___

### role

• **role**: [`UserRole`](../modules.md#userrole)

The role of the sender (user, brain or system)

#### Defined in

[models/brainService.ts:125](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L125)

___

### sentAt

• **sentAt**: `Date`

The utc date that the prompt has been sent

#### Defined in

[models/brainService.ts:130](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L130)
