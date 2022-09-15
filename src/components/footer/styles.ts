import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));
