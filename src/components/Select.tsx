import { FormControl, Box, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { type FC } from 'react';
import { styled } from '@mui/system';

export const SelectInput: FC<{
  handleChange: (e: SelectChangeEvent<string>) => void;
  value: string;
  placepolder?: string;
  label?: string;
  menuItems: Array<string>;
  icon?: JSX.Element;
  style?: any;
}> = ({ handleChange, value, menuItems, label, placepolder, icon, style }) => {
  return (
    <FormControl>
      {/* <StyledInputLabel id='demo-simple-select-label'>{label}</StyledInputLabel> */}
      <StyledSelect
        style={style}
        placeholder={placepolder}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label={label}
        displayEmpty
        // onChange={handleChange}
        // sx={{ width: 130 }}
        defaultValue=''
        renderValue={(value) => {
          console.log(value);
          return (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <>
                {icon}
                {value}
              </>
            </Box>
          );
        }}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} value={10}>
            {item}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

const StyledInputLabel = styled(InputLabel)(() => ({
  marginLeft: '32px',
}));

const StyledSelect = styled(Select)(() => ({
  // marginLeft: '32px',
  '.MuiSelect-root': {
    height: '48px',
  },
}));
