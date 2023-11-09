import React, { type FC } from 'react';
import {
  type AutocompleteRenderInputParams,
  type FilledTextFieldProps,
  InputAdornment,
  InputBase,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';

export interface InputProps
  extends Pick<
    FilledTextFieldProps,
    | 'className'
    | 'name'
    | 'label'
    | 'type'
    | 'disabled'
    | 'required'
    | 'value'
    | 'placeholder'
    | 'onChange'
    | 'onBlur'
    | 'onKeyUp'
    | 'onClick'
    | 'style'
    | 'autoComplete'
    | 'error'
    | 'ref'
  > {
  readonly?: boolean;
  autocompleteParams?: AutocompleteRenderInputParams;
  startSlot?: JSX.Element;
  endSlot?: JSX.Element;
}

export const Input: FC<InputProps> = ({
  className = '',
  startSlot = null,
  endSlot = null,
  autocompleteParams,
  style,
  ...rest
}) => {
  return (
    <StyledInput
      style={style}
      // className={`aimo-text-input ${className}`}
      variant='filled'
      fullWidth
      {...rest}
      {...autocompleteParams}
      InputProps={{
        ...autocompleteParams?.InputProps,
        startAdornment: startSlot && <InputAdornment position='start'>{startSlot}</InputAdornment>,
        endAdornment: endSlot && <InputAdornment position='end'>{endSlot}</InputAdornment>,
      }}
    />
  );
};

const StyledInput = styled(TextField)(() => ({
  '.MuiFormLabel-root': {
    color: '#606060',
    fontSize: '15px',
    background: '#FFF',

    // height: 40px;
    ':hover': {
      backgroundColor: '#F4F7FF',
    },

    '&.Mui-focused ': {
      // color: var(--aimo-light-text);
      background: '#FFF',
    },
  },

  '.MuiFilledInput-input': {
    padding: '11px 0 12px 20px',
  },

  '.MuiFilledInput-root': {
    background: '#FFF',
    borderRadius: '12px',
    // color: var(--aimo-light-text);
    fontSize: '15px',
    height: '40px',
    // border-radius: var(--aimo-input-border-radius);
    overflow: 'hidden',

    '&::before': {
      display: 'none',
    },

    ' &::after': {
      borderColor: 'transparent',
    },

    '&.Mui-focused': {
      '&::after': {
        borderColor: 'transparent',
        // background-color: #F4F7FF;
      },
    },
  },
}));
