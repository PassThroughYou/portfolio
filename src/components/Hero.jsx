import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align :center;

  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
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
  flex:2;
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
//   width: 100px;
width : 180px;
  padding:10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right= styled.div`
  flex:3;
  position: relative;
  // display:flex;
  // justify-content: center;
`;
//부모 position: relative
//자식 img position: absolute-> 부모 안에서의 위치 설정됨
const Img= styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;

  position :absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;

  // 2초 간격으로 무한정 천천히 움직임
  // alternative : 동작이 이어지도록 함
  animation: animate 2s infinite  ease alternate;
  @keyframes animate{
    //y축 방향으로 지정한 값만큼 움직임
    
    to{
      transform: translateY(20px);
    }
  }


  
`;
//object-fit: contain : 내용이 가로세로 비를 유지하면서 정의된 크기안에 최대한 크게 넣기

const Hero=()=>{
    return(
       <Section>

        <Navbar/>
        <Container>
          <Left>
              <Title>Passion. Act. Achieve</Title>

              <WhatIDo>
                <Line src="./img/dash.png"/>
                <SubTitle>What I Do</SubTitle>
              </WhatIDo>

              <Desc>
                I enjoy developing somethig new, user friendly.
              </Desc>
                <Button>Learn more</Button>

          </Left>

          <Right>
            {/* 3d model */}
            <Img src="./img/moon.png"></Img>
          </Right>
        </Container>

       </Section>
    )
}

export default Hero;