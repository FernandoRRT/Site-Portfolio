// import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import {
  ActionButtons,
  Container,
  DetailsArea,
  ProfileArea,
  ProfileDiv,
  ResumeArea,
  TitleArea,
  StyledGitHubIcon,
  StyledLinkedInIcon,
  StyledEmailIcon,
  TitleName,
  ChargeName,
  AboutText,
  ResumeText,
  ResumeTextXL,
  ResumeActionButtons,
  ResumeActionDiv,
  ProfileImageBack,
  ProfileImageFront,
} from "./styles";
import { IconButton } from "@mui/material";

const FrontPage = () => {
  return (
    <Container>
      <ProfileArea>
        <ProfileDiv>
          <ProfileImageBack
            src="/images/FernandoBack.png"
            alt="Profile background"
          />
          <ProfileImageFront
            src="/images/FernandoFront.png"
            alt="Profile front"
          />
        </ProfileDiv>
        <ActionButtons>
          <IconButton
            aria-label="LinkedIn"
            size="large"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/fernandotorres",
                "_blank"
              )
            }
          >
            <StyledLinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="Email"
            size="large"
            onClick={() =>
              (window.location.href = "mailto:suporteiros@gmail.com")
            }
          >
            <StyledEmailIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="Email"
            size="large"
            onClick={() => (
              (window.location.href = "https://github.com/FernandoRRT"),
              "_blank"
            )}
          >
            <StyledGitHubIcon fontSize="inherit" />
          </IconButton>
        </ActionButtons>
      </ProfileArea>
      <DetailsArea>
        <TitleArea>
          <TitleName>FERNANDO TORRES</TitleName>
          <ChargeName>
            Front-End Developer | Expertise in React, CSS/SASS, HTML
          </ChargeName>
        </TitleArea>
        <ResumeArea>
          <AboutText>About Me</AboutText>
          <ResumeText>
            With a solid background in Systems Analysis and Development and a
            hands-on experience in React, CSS/SASS, and HTML, I specialize in
            building modern, dynamic, and responsive user interfaces. My
            Postgraduate Certificate in Mobile Systems Development is further
            strengthening my Flutter and React Native skills. Additionally, I
            know Java, PHP, SQL, MySQL, and Vue.js, which gives me a
            well-rounded perspective on web and mobile development.
          </ResumeText>
          <ResumeTextXL>
            My professional journey includes extensive experience in education,
            where I developed valuable communication and problem-solving skills,
            which I now apply to developing technological solutions. My passion
            for web design started in my teenage years, and today, with a solid
            technical foundation, I am ready to contribute to projects that
            demand innovation, collaboration, and a user-centered approach.
          </ResumeTextXL>
        </ResumeArea>
        <ResumeActionDiv>
          <Link to="/resume/profile" style={{ textDecoration: "none" }}>
            <ResumeActionButtons>Resume</ResumeActionButtons>
          </Link>
          <Link to="/resume/portfolio" style={{ textDecoration: "none" }}>
            <ResumeActionButtons>Portfolio</ResumeActionButtons>
          </Link>
        </ResumeActionDiv>
      </DetailsArea>
    </Container>
  );
};
export default FrontPage;
