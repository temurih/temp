import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Props } from '../src';

const meta: Meta = {
    title: 'Inputs/Textfield',
    component: Input,
    argTypes: {},
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<Props> = (args) => {
    const [value, setValue] = useState<string>('');
    return <Input {...args} value={value} onChange={setValue} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: Story<Props> = Template.bind({});

Default.args = {
    placeholder: 'placeholder',
    label: 'Label',
};
