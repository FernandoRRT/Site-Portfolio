import { Container, Wrapper, Section, Title, Content } from './styles';

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Content>
          <Title>Work Experience</Title>
            <p>Palmares Do Sul City Hall | History Teacher</p>
            <p>April 2017 – Present (7 years, 6 months)</p>
            <ul>
              <li>
                Planned and organized teaching strategies with a focus on
                reducing student dropout rates.
              </li>
              <li>
                Taught History classes to upper elementary school students.
              </li>
              <li>
                Delivered virtual classes through distance learning (via
                videoconferencing) using Google Classroom.
              </li>
              <li>Organized and coordinated educational fairs.</li>
              <li>Recorded grades and evaluated student performance.</li>
              <li>
                Created and utilized multimedia resources in the classroom
                (PowerPoint presentations, images/memes, films, documentaries,
                etc.).
              </li>
            </ul>
            <p>Freelancer | Self-employed</p>
            <p>June 2022 – June 2024 (2 years)</p>
            <ul>
              <li>Deployed websites and applications.</li>
              <li>Created hotsites and email marketing campaigns.</li>
              <li>Consumed and created APIs.</li>
              <li>Managed databases.</li>
              <li>Created, managed, and supported STPs.</li>
            </ul>
          </Content>
          <Content>
          <Title>Education</Title>
            <p>
              2024-2026 | Lato Sensu Postgraduate – Specialization in Systems
              Development for Mobile Devices
            </p>
            <p>
              IFSP – Instituto Federal de Educação, Ciência e Tecnologia São
              Paulo
            </p>
            <p>
              2019-2021 | Higher Technology Course (CST) - Computer Systems
              Analysis
            </p>
            <p>UNINTER – Centro Universitário Internacional</p>
            <p>2015-2017 | Associate's degree - Tourism Management</p>
            <p>UNINTER – Centro Universitário Internacional</p>
            <p>2009-2012 | Lato Sensu Postgraduate – Education</p>
            <p>
              IFSUL – Instituto Federal de Educação e Tecnologia
              Sul-rio-grandense
            </p>
            <p>2003-2008 | Bachelor’s Degree - History</p>
            <p>FAPA – Faculdades Porto-Alegrense</p>
          </Content>
        </Section>
      </Wrapper>
      <Wrapper>
        <Section>
          <Content>
          <Title>Front-End Skills</Title>
            <ul>
              <li>
                Advanced level: HTML, CSS/SASS, JQuery, Javascript, React (JS);
              </li>
              <li>
                Intermediate level: Typescript, React (TS), Vue.js, Material UI,
                Bootstrap;
              </li>
              <li>Beginner level: Tailwind, Angular.</li>
            </ul>
          <Title>Back-End Skills</Title>
            <ul>
              <li>
                Intermediate level: Java, Laravel, Relational Database (MySQL,
                PostgreSQL);
              </li>
              <li>Beginner level: PHP, Node, Java.</li>
            </ul>
          <Title>Mobile Skills</Title>
            <ul>
              <li>Intermediate level: React Native (TS e JS);</li>
              <li>Beginner level: Flutter (Dart) and Android (Java/Kotlin).</li>
            </ul>
          </Content>
          <Content>
          <Title>Languages</Title>
            <ul>
              <li>English – C1</li>
              <li>Spanish – B1</li>
              <li>Portuguese – Native</li>
            </ul>
            <Title>Courses/Bootcamps</Title>
            <ul>
              <li>User Experience (IGTI)</li>
              <li>Node.JS Developer (IGTI)</li>
              <li>Cross-Platform Mobile Developer (IGTI)</li>
              <li>React Developer (IGTI)</li>
              <li>Front-End Developer (IGTI)</li>
              <li>REST API with Laravel 8 (Udemy)</li>
              <li>CSS/Flexbox/Grid Layout (Origamid)</li>
            </ul>
          </Content>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Profile;
