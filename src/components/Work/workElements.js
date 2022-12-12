import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H1 = styled.div`
color: #FFFFFF;
font-weight: 600;
font-size: 3rem;
opacity: 0.8;
`;

export const P = styled.div`
color: #FFFFFF;
font-weight: 500;
opacity: 0.8;
`;

export const H3 = styled.div`
color: #FFFFFF;
font-weight: 600;
opacity: 0.8;
`;

export const H2 = styled.div`
color: #FFFFFF;
`;

export const Link1 = styled.div`
display: flex;
margin: 2rem 0rem;
padding: 1rem 5rem;
align-items: center;
`;

export const H4 = styled.div`
padding: 0rem 2rem;
`;

export const CardInfo = styled.div`
`;

export const Default = styled(Link)`
margin: 0;
padding: 0;
box-sizing: border-box;
`;

export const Title = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
`;

export const Progress = styled.div`
background: linear-gradient(to right top, #152238, #000000);
width: 100%;
height: 25%;
border-radius: 1rem;
position: relative;
overflow: hidden;
`;

export const ProgressBack = styled.div`
content: "";
width: 100%;
height: 100%;
background: rgb(236, 236, 236);
position: absolute;
left: 70%;
`;

export const Percentage = styled.div`
font-weight: bold;
background: linear-gradient(to right top, #65dfc9, #6cdbeb);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const Main = styled.div`
font-family: "Poppins", sans-serif;
min-height: 100vh;
background: linear-gradient(to right top, #152238, #192841);
display: flex;
align-items: center;
justify-content: center;
`;


export const Container = styled.div`
background: white;
min-height: 80vh;
width: 60%;
background: linear-gradient(
  to right bottom,
  rgba(0, 51, 102, 0.7),
  rgba(0, 51, 102, 0.3)
);
border-radius: 2rem;
z-index: 2;
backdrop-filter: blur(2rem);
display: flex;
`;

export const Dashboard = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
text-align: center;
background: linear-gradient(
  to right bottom,
  rgba(0, 51, 102, 0.7),
  rgba(0, 51, 102, 0.3)
);
border-radius: 2rem;
`;

export const User = styled.div`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  font-colour: #ffffff;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const Card = styled.div`
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 2rem 0rem;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: space-between;
`;

export const Users = styled.div`
`;


export const Cards = styled.div`
`;

export const Details = styled.div`
`;

export const Links = styled.div`

`;

export const Circle1 = styled.div`
top: 5%;
right: 15%;
`;

export const Circle2 = styled.div`
background: white;
background: linear-gradient(
  to right bottom,
  rgba(255, 255, 255, 0.8),
  rgba(255, 255, 255, 0.3)
);
height: 20rem;
width: 20rem;
position: absolute;
border-radius: 50%;
bottom: 5%;
left: 10%;
`;
