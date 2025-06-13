export interface Internship {
    id: string;
    title: string;
    category: string;
    duration: string;
    type: 'UI/UX' | 'Web Development' | 'Software Engineering' | 'MERN Stack' | 'Other';
    description: string;
    requirements: string[];
    workLocation: 'remote' | 'onsite' | 'hybrid' | 'flexible';
    stipend: string;
}