import { styled } from '@mui/material/styles';

export const HeaderContainer = styled('div')(({ theme }) => ({
    background:  theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px 40px',
    height: '100%'
}));
