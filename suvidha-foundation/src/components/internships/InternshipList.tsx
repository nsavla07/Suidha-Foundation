import React, { useState, useMemo } from 'react';
import { Container, Typography, Box } from '@mui/material';
import InternshipCard from './InternshipCard';
import InternshipFilters from './InternshipFilters';
import { Internship } from '../../types/internship';

const SAMPLE_INTERNSHIPS: Internship[] = [
    {
        id: '1',
        title: 'UI/UX Design Intern',
        category: 'Design',
        type: 'UI/UX',
        duration: '3 months',
        description: 'Join us in creating beautiful and intuitive user interfaces for various projects. Learn the latest design tools and methodologies.',
        requirements: ['Figma', 'Adobe XD', 'Basic HTML/CSS', 'Portfolio'],
        workLocation: 'remote',
        stipend: '₹5000/month'
    },
    {
        id: '2',
        title: 'Full Stack Developer',
        category: 'Development',
        type: 'MERN Stack',
        duration: '6 months',
        description: 'Work on exciting projects using the MERN stack. Build scalable web applications from scratch.',
        requirements: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
        workLocation: 'remote',
        stipend: '₹8000/month'
    },
    {
        id: '3',
        title: 'Software Engineering Intern',
        category: 'Engineering',
        type: 'Software Engineering',
        duration: '6 months',
        description: 'Get hands-on experience in software development life cycle. Work on real-world problems.',
        requirements: ['Java', 'Data Structures', 'Algorithms', 'Git'],
        workLocation: 'onsite',
        stipend: '₹10000/month'
    },
    {
        id: '4',
        title: 'Frontend Developer',
        category: 'Development',
        type: 'Web Development',
        duration: '4 months',
        description: 'Create responsive and interactive web applications using modern frontend technologies.',
        requirements: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
        workLocation: 'remote',
        stipend: '₹6000/month'
    }
];

const InternshipList: React.FC = () => {
    const [filters, setFilters] = useState({
        search: '',
        type: 'All',
        isRemote: false
    });

    const handleFilterChange = (name: string, value: string | boolean) => {
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const filteredInternships = useMemo(() => {
        return SAMPLE_INTERNSHIPS.filter(internship => {
            const matchesSearch = internship.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                                internship.description.toLowerCase().includes(filters.search.toLowerCase());
            const matchesType = filters.type === 'All' || internship.type === filters.type;
            const matchesRemote = !filters.isRemote || internship.workLocation === 'remote';

            return matchesSearch && matchesType && matchesRemote;
        });
    }, [filters]);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom color="primary" sx={{ mb: 4 }}>
                Suvidha Foundation Internship Opportunities
            </Typography>
            
            <InternshipFilters 
                filters={filters}
                onFilterChange={handleFilterChange}
            />

            <Box sx={{ mt: 4 }}>
                {filteredInternships.length > 0 ? (
                    filteredInternships.map(internship => (
                        <InternshipCard 
                            key={internship.id} 
                            internship={internship}
                        />
                    ))
                ) : (
                    <Typography variant="h6" color="text.secondary" align="center">
                        No internships found matching your criteria
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default InternshipList;