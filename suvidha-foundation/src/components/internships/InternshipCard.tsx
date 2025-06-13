import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { Internship } from '../../types/internship';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidIcon from '@mui/icons-material/Paid';

interface Props {
    internship: Internship;
}

const InternshipCard: React.FC<Props> = ({ internship }) => {
    return (
        <Card sx={{ 
            minWidth: 275, 
            mb: 2, 
            '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
            }
        }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom color="primary">
                    {internship.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip 
                        label={internship.type} 
                        color="primary" 
                        variant="outlined" 
                    />
                    <Chip 
                        icon={<LocationOnIcon />}
                        label={internship.workLocation === 'remote' ? 'Remote' : 
                               internship.workLocation === 'onsite' ? 'On-site' :
                               internship.workLocation === 'hybrid' ? 'Hybrid' : 'Flexible'} 
                        variant="outlined" 
                    />
                </Box>
                <Typography variant="body1" color="text.secondary" paragraph>
                    {internship.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTimeIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            {internship.duration}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <PaidIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                            Stipend: {internship.stipend}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Requirements:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {internship.requirements.map((req, index) => (
                            <Chip 
                                key={index} 
                                label={req} 
                                size="small" 
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default InternshipCard;