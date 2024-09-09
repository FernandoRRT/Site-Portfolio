import { keyframes, styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  background: theme.palette.background.default,
  display: "flex",
  flexDirection: "row",
  minHeight: "100vh",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: "50px 0 0 0",
  },
}));

export const ProfileArea = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100%",
  [theme.breakpoints.up("md")]: {
    minWidth: "600px",
  },
  }));

export const DetailsArea = styled("div")(({ theme }) => ({
  background: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  borderTopLeftRadius: "50px",
  borderBottomLeftRadius: "50px",
}));

const fadeInBack = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ProfileDiv = styled("div")`
  width: 350px;
  height: 350px;
  border: none;
  overflow: hidden;
  border-radius: 40px;
  position: relative;
`;

export const ProfileImageBack = styled("img")`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  animation: ${fadeInBack} 500ms ease-in-out forwards;
`;

export const ProfileImageFront = styled("img")`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  animation: ${slideUp} 1200ms ease-in-out forwards;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  margin-top: -40px;
`;

export const TitleArea = styled("div")(({ theme }) => ({
  background: theme.palette.card.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  color: theme.palette.card.contrastText,
  borderTopLeftRadius: "50px",
  borderBottomLeftRadius: "50px",
  padding: "50px 100px",
}));

export const ResumeArea = styled("div")(({ theme }) => ({
  background: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  color: theme.palette.card.dark,
  padding: "50px 100px",
}));

export const ActionButtons = styled("div")(({ theme }) => ({
  paddingTop: "20px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 0",
  },
}));

export const StyledLinkedInIcon = styled(LinkedInIcon)(({ theme }) => ({
  color: theme.palette.card.main,
  fontSize: "3rem",
  transition: "color 0.3s ease", 
  '&:hover': {
    color: "#0077b5",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "4rem"
  },
}));

export const StyledEmailIcon = styled(EmailIcon)(({ theme }) => ({
  color: theme.palette.card.main,
  fontSize: "3rem",
  transition: "color 0.3s ease", 
  '&:hover': {
    color: "#D93025",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "4rem"
  },
}));

export const StyledGitHubIcon = styled(GitHubIcon)(({ theme }) => ({
  color: theme.palette.card.main,
  fontSize: "3rem",
  transition: "color 0.3s ease", 
  '&:hover': {
    color: "#181717",
    background: "#fff",
    borderRadius: "50%",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "4rem"
  }
}));

export const TitleName = styled("h1")`
  font-family: "Open Sans", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 4px;
  margin-left: -4px;
`;

export const ChargeName = styled("p")`
  font-family: "Public Sans", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  font-style: normal;
`;

export const AboutText = styled("h2")`
  font-family: "Open Sans", sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  font-style: normal;
  padding-bottom: 20px;
`;

export const ResumeText = styled("p")`
  font-family: "Public Sans", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  text-align: justify;
  padding-bottom: 20px;
`;

export const ResumeTextXL = styled("p")(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
  fontFamily: "Public Sans, sans-serif",
  fontSize: "1rem",
  fontWeight: 500,
  fontStyle: "normal",
  textAlign: "justify",
  paddingBottom: "0px",
}));

export const ResumeActionDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: "0px 200px",
  [theme.breakpoints.down("xl")]: {
    padding: "0px 100px",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "0px 100px 50px 100px",
  }
  ,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px",
    marginBottom: "20px",
  }
}));

export const ResumeActionButtons = styled(Button)(({ theme }) => ({
  background: theme.palette.card.main,
  color: theme.palette.card.contrastText,
  width: "200px",
  fontFamily: "Public Sans, sans-serif",
  fontSize: "1.125rem",
  fontWeight: 700,
  fontStyle: "normal",
  [theme.breakpoints.down("lg")]: {
    width: "150px",
  }
  ,
  [theme.breakpoints.down("md")]: {
    marginBottom: "20px",
  }
}));
