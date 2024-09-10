import {
  Container,
  Section,
  Title,
  Content,
  SubTitle,
  Details,
  ListContainer,
  ListItem,
  SubTitleinfo,
  Detail,
} from './styles';

const Profile = () => {
  return (
    <Container>
      <Section>
        <Content>
          <Title>Experience</Title>
          <SubTitle>Palmares Do Sul City Hall | History Teacher</SubTitle>
          <Details>April 2017 – Present (7 years, 6 months)</Details>
          <ListContainer>
            <ListItem>
              Planned and organized teaching strategies with a focus on reducing student dropout rates.
            </ListItem>
            <ListItem>Taught History classes to upper elementary school students.</ListItem>
            <ListItem>
              Delivered virtual classes through distance learning (via videoconferencing) using Google Classroom.
            </ListItem>
            <ListItem>Organized and coordinated educational fairs.</ListItem>
            <ListItem>Recorded grades and evaluated student performance.</ListItem>
            <ListItem>
              Created and utilized multimedia resources in the classroom (PowerPoint presentations, images/memes, films, documentaries, etc.).
            </ListItem>
          </ListContainer>

          <SubTitle>Freelancer | Self-employed</SubTitle>
          <Details>June 2022 – June 2024 (2 years)</Details>
          <ListContainer>
            <ListItem>Deployed websites and applications.</ListItem>
            <ListItem>Created hotsites and email marketing campaigns.</ListItem>
            <ListItem>Consumed and created APIs.</ListItem>
            <ListItem>Managed databases.</ListItem>
            <ListItem>Created, managed, and supported STPs.</ListItem>
          </ListContainer>
        </Content>

        <Content>
          <Title>Education</Title>
          <SubTitle>2024-2026 | Lato Sensu Postgraduate</SubTitle>
          <SubTitleinfo> Specialization in Systems Development for Mobile Devices</SubTitleinfo>
          <Detail>IFSP – Instituto Federal de Educação, Ciência e Tecnologia São Paulo</Detail>

          <SubTitle>2019-2021 | Higher Technology Course (CST) </SubTitle>
          <SubTitleinfo>Computer Systems Analysis</SubTitleinfo>
          <Detail>UNINTER – Centro Universitário Internacional</Detail>

          <SubTitle>2015-2017 | Associate's degree</SubTitle>
          <SubTitleinfo>Tourism Management</SubTitleinfo>
          <Detail>UNINTER – Centro Universitário Internacional</Detail>

          <SubTitle>2009-2012 | Lato Sensu Postgraduate </SubTitle>
          <SubTitleinfo>Education</SubTitleinfo>
          <Detail>IFSUL – Instituto Federal de Educação e Tecnologia Sul-rio-grandense</Detail>

          <SubTitle>2003-2008 | Bachelor’s Degree  </SubTitle>
          <SubTitleinfo> History</SubTitleinfo>
          <Detail>FAPA – Faculdades Porto-Alegrense</Detail>
        </Content>
      </Section>

      <Section>
        <Content>
          <Title>Front-End Skills</Title>
          <ListContainer>
            <ListItem>Advanced level: HTML, CSS/SASS, JQuery, Javascript, React (JS);</ListItem>
            <ListItem>Intermediate level: Typescript, React (TS), Vue.js, Material UI, Bootstrap;</ListItem>
            <ListItem>Beginner level: Tailwind, Angular.</ListItem>
          </ListContainer>

          <Title>Back-End Skills</Title>
          <ListContainer>
            <ListItem>Intermediate level: Java, Laravel, Relational Database (MySQL, PostgreSQL);</ListItem>
            <ListItem>Beginner level: PHP, Node, Java.</ListItem>
          </ListContainer>

          <Title>Mobile Skills</Title>
          <ListContainer>
            <ListItem>Intermediate level: React Native (TS e JS);</ListItem>
            <ListItem>Beginner level: Flutter (Dart) and Android (Java/Kotlin).</ListItem>
          </ListContainer>
        </Content>

        <Content>
          <Title>Languages</Title>
          <ListContainer>
            <ListItem>English – C1</ListItem>
            <ListItem>Spanish – B1</ListItem>
            <ListItem>Portuguese – Native</ListItem>
          </ListContainer>

          <Title>Courses/Bootcamps</Title>
          <ListContainer>
            <ListItem>User Experience (IGTI)</ListItem>
            <ListItem>Node.JS Developer (IGTI)</ListItem>
            <ListItem>Cross-Platform Mobile Developer (IGTI)</ListItem>
            <ListItem>React Developer (IGTI)</ListItem>
            <ListItem>Front-End Developer (IGTI)</ListItem>
            <ListItem>REST API with Laravel 8 (Udemy)</ListItem>
            <ListItem>CSS/Flexbox/Grid Layout (Origamid)</ListItem>
          </ListContainer>
        </Content>
      </Section>
    </Container>
  );
};

export default Profile;
