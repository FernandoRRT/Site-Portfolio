import { styled } from "@mui/material/styles";

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '40px 20px 20px 20px',

});

export const Section = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
  },
}));

export const Title = styled('h2')(({ theme }) => ({
  marginBottom: '10px',
  fontFamily: '"Open Sans", sans-serif',
  fontSize: "1.5rem",
  textAlign: "center",
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: theme.palette.card.dark,
}));

export const Content = styled('div')({
  flex: 1,
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
});

export const SubTitle = styled('p')({
  fontFamily: '"Public Sans", sans-serif',
  fontSize: "1rem",
  fontWeight: "700",
  fontStyle: "normal",
  textAlign: "justify",
  paddingBottom: "20px",
  marginLeft: "10px"
});

export const SubTitleinfo = styled('p')({
  fontFamily: '"Public Sans", sans-serif',
  fontSize: "1rem",
  fontWeight: "500",
  fontStyle: "normal",
  textAlign: "justify",
  marginTop: "-20px",
  marginBottom: "10px",
  paddingBottom: "20px",
  marginLeft: "10px"
});

export const Details = styled('p')({
  fontFamily: '"Public Sans", sans-serif',
  fontSize: "0.9rem",
  fontWeight: "500",
  fontStyle: "normal",
  textAlign: "justify",
  paddingBottom: "20px",
  marginLeft: "10px",
  marginTop: "-20px"
});

export const Detail = styled('p')({
  fontFamily: '"Roboto", sans-serif',
  fontSize: "0.9rem",
  fontWeight: "500",
  fontStyle: "normal",
  textAlign: "justify",
  paddingBottom: "20px",
  marginLeft: "20px",
  marginTop: "-20px"
});

export const ListContainer = styled('ul')({
  fontFamily: '"Roboto", sans-serif',
  fontSize: "0.9rem",
  fontWeight: "400",
  fontStyle: "normal",
  textAlign: "justify",
  paddingBottom: "20px",
  marginLeft: "30px",
});

export const ListItem = styled('li')(({ theme }) => ({
  paddingBottom: "5px",
  paddingRight: "5px",
  color: theme.palette.card.contrastText,
  fontWeight: "500",
}));

