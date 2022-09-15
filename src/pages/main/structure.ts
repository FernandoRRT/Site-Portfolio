import { styled } from '@mui/material/styles';

export const GridStructure = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(180px, 240px) auto',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `'header header'
                        'sidenav content'
                        'sidenav footer'`,
    height: '100%',
    [theme.breakpoints.down("lg")]: {
        display: 'grid',
        gridTemplateColumns: 'minmax(160px, 180px) auto',
        gridTemplateAreas: `"header header"
        "sidenav content"
        "sidenav footer"`
    },
    [theme.breakpoints.down("md")]: {
        display: 'grid',
        gridTemplateColumns: 'minmax(140px, 170px) auto',
        gridTemplateAreas: `"header header"
                            "sidenav content"
                            "sidenav footer"`
    },
    [theme.breakpoints.down("tablet")]: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridTemplateAreas: `"header"
                            "content"
                            "footer"`
    }
}));

export const GridHeader = styled('header')({
    gridArea: 'header'
});

export const GridAside = styled('aside')({
    gridArea: 'sidenav',
    // [theme.breakpoints.up('tablet')]: {
    //     display: 'none'
    // }
});

export const GridMain = styled('main')({
    gridArea: 'content'
});

export const GridFooter = styled('footer')({
    gridArea: 'footer'
});
