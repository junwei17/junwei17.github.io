import React from 'react';
import {
    H1,
    P,
    H2,
    H3,
    H4,
    Main,
    Users,
    Container,
    Dashboard,
    Links,
    Link1,
    Details,
    Cards,
    CardInfo,
    Progress,
    ProgressBack,
    Percentage,
    Default,
    Title,
    Circle1,
    Circle2,
    Card
  } from './workElements';

const Work = () => {
    return (
      <>
      <Default>
      <Main>
        <Container>
            <Dashboard>
                <Users>
                   <img src="./images/avatar.png" alt="" />
                   <H3>TEST</H3>
                   <P>TEST</P>
                </Users>
                <Links>
                  <Link1>
                    <img src="./images/twitch.png" alt="" />
                    <H2>TEST</H2>
                  </Link1>
                  <Link1>
                    <img src="./images/twitch.png" alt="" />
                    <H2>TEST</H2>
                  </Link1>
                  <Link1>
                    <img src="./images/twitch.png" alt="" />
                    <H2>TEST</H2>
                  </Link1>
                </Links>
            </Dashboard>
            <Details>
                <Cards>
                  <Title>
                    <H1>SkillSet</H1>
                  </Title>
                    <Card>  
                      <img src="./images/assassins.png" alt="" />  
                      <CardInfo>
                       <H4>Test</H4>
                       <P>TEST</P>
                        <Progress>
                        <ProgressBack>
                        </ProgressBack>
                        </Progress>
                      </CardInfo>
                      <Percentage>
                      </Percentage>
                    </Card>
                    <Card>    
                    </Card>
                    <Card>    
                    </Card>
                </Cards>
            </Details>
        </Container>
        </Main>
        <Circle1></Circle1>
        <Circle2></Circle2>
        </Default>
      </>
    );
  };
  
  export default Work;