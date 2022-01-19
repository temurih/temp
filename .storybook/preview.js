import React from 'react';
import { Theme } from "../src/theme";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
    Story => (
        <Theme>
            <Story />
        </Theme>
    ),
];
