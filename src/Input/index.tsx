import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { InputBaseProps } from '@mui/material/InputBase';
import { useTheme } from '@mui/styles';

export type TextChangeEvent = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
>;

export interface Props
    extends Omit<BaseTextFieldProps, 'variant' | 'hiddenLabel' | 'margin'> {
    placeholder: string;
    label: string;
    onChange: (newValue: string, e: TextChangeEvent) => unknown;
    autoFocus?: boolean;
    defaultValue?: unknown;
    disabled?: boolean;
    error?: boolean;
    fullWidth?: boolean;
    id?: string;
    onBlur?: InputBaseProps['onBlur'];
    required?: boolean;
}

export const Input: FC<Props> = memo((props) => {
    const theme = useTheme();
    const handleChange = useCallback((e: TextChangeEvent) => {
        props.onChange(e.target.value, e);
    }, []);
    console.log(theme);

    return (
        <TextField
            {...props}
            value={props.value}
            aria-describedby={props.label}
            onChange={handleChange}
            variant="outlined"
        />
    );
});
