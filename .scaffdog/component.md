---
name: 'component'
root: './src/components'
output: './*'
ignore: []
questions:
  name: 'Please enter component name.'
---

# `{{ inputs.name | pascal }}/index.ts`

```
export * from './{{ inputs.name | pascal }}'

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```
import React from 'react'

export type {{ inputs.name | pascal }}Props = {

}

const {{ inputs.name | pascal }}: React.VFC<{{ inputs.name | pascal }}Props> = ({}) => {
    return (
        <div>
        </div>
    );
};

export default {{ inputs.name | pascal }};

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {{ inputs.name | pascal }} from './{{ inputs.name | pascal }}'

export default {
  title: '{{ output.dir | replace "src/components/" "" }}',
  component: {{ inputs.name | pascal }},
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof {{ inputs.name | pascal }}>

const Template: ComponentStory<typeof {{ inputs.name | pascal }}> = props => (
    <{{ inputs.name | pascal }} {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}

```
