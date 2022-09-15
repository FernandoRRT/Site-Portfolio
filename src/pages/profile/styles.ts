import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '20px 30px',
}));
