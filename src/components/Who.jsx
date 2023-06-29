import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align :center;

  display: flex;
  justify-content:center;
`;
//scroll-snap-align :center; : 스크롤시 중심에 해당하는 부분이  화면의 중앙이 되도록 위치하게 함


const Container= styled.div`
  height: 100vh;
  scroll-snap-align :center;

  width:1400px;
  display: flex;
  justify-content:space-between;

`;

const Left= styled.div`
  flex:1;
  

`;




const Right= styled.div`
  flex:1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:20px;
`;

const Title= styled.h1`
  font-size:74px;
`;

const WhatIDo= styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`;

const Line= styled.img`
  height :50px;
`;

const SubTitle= styled.h2`
  color :#da4ea2;
`;

const Desc= styled.p`
  font:-size:24px;
  color: lightgray;
`;

const Button= styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
//width: 120px;
  width:180px;
  padding:10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

//object-fit: contain : 내용이 가로세로 비를 유지하면서 정의된 크기안에 최대한 크게 넣기

const Who=()=>{
    return(
       <Section>

        <Container>
          <Left>

          </Left>

          <Right>
        


            <Title>Think ouside of the square space</Title>

            <WhatIDo>
                <Line src="./img/dash.png"/>
                <SubTitle>What I Am</SubTitle>
            </WhatIDo>

            <Desc>
                a creative person of designers and developers with a passion for the website.
            </Desc>

            <Button>See My works</Button>
          </Right>
        </Container>

       </Section>
    )
}

export default Who;