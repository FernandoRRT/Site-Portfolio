import { styled } from '@mui/material/styles';

export const GridStructure = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'auto  1fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `'sidenav header'
                        'sidenav content'
                        'sidenav footer'`,
    height: '100%',
}));

export const GridHeader = styled('header')({
    gridArea: 'header'
});

export const GridAside = styled('aside')({
    gridArea: 'sidenav',
});

export const GridMain = styled('main')({
    gridArea: 'content'
});

export const GridFooter = styled('footer')({
    gridArea: 'footer',
});
