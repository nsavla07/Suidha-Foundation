import React from 'react';
import { 
    Paper, 
    TextField, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    FormControlLabel, 
    Switch, 
    Box 
} from '@mui/material';

interface FilterProps {
    filters: {
        search: string;
        type: string;
        isRemote: boolean;
    };
    onFilterChange: (name: string, value: string | boolean) => void;
}

const InternshipFilters: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
    const internshipTypes = [
        'All',
        'UI/UX',
        'Web Development',
        'Software Engineering',
        'MERN Stack',
        'Other'
    ];

    return (
        <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                alignItems: 'center' 
            }}>
                <TextField
                    label="Search Internships"
                    variant="outlined"
                    size="small"
                    value={filters.search}
                    onChange={(e) => onFilterChange('search', e.target.value)}
                    sx={{ minWidth: 200 }}
                />
                
                <FormControl size="small" sx={{ minWidth: 200 }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={filters.type}
                        label="Type"
                        onChange={(e) => onFilterChange('type', e.target.value)}
                    >
                        {internshipTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControlLabel
                    control={
                        <Switch
                            checked={filters.isRemote}
                            onChange={(e) => onFilterChange('isRemote', e.target.checked)}
                        />
                    }
                    label="Remote Only"
                />
            </Box>
        </Paper>
    );
};

export default InternshipFilters;