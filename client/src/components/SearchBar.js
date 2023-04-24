import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = ({onChange}) => {
    return (
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'flex-end', 
            width: "90%", 
            margin: "10px auto"
        }}>
            <TextField
                fullWidth
                label="Filter"
                id="filled-size-normal"
                placeholder='Type to filter table by name...'
                onChange={onChange}
            />
        </Box>
    )
}

export default SearchBar;