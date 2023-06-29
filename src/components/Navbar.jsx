import React from 'react';
import { styled } from 'styled-components';
import App from './../App';


const Section = styled.div`
    //네비게이션 바 가운데 놓기 위해서 
    display : flex;
    justify-content:center;

    // @media only screen and (max-width : 768px){
    //     width : 100%;
    // }
`;
//display :flex; : 요소들을 한 줄 차지하도록 설정
// justify-content :  가운데에 위치하도록 설정
//@media screen : 

const Container=styled.div`
    width : 1400px;

    display: flex;
    justify-content: space-between;
    align-items : center;
    //네비게이션 바 위에 간격을 줌
    padding: 10px  0px;
    
    // @media only screen and (max-width : 768px){
    //     width:100%;
    //     padding:10px;
    // }

`

const Links=styled.div`
    display:flex;
    align-items:center;
    gap: 50px;

`
const Logo = styled.img`
  height:50px;
`;

const List=styled.ul`
//    cursor : pointer;
    //li구성 요소 가로로 정렬, 20px간격
    display: flex;
    gap:20px;

    list-style:none;
`
//cursor : 커서의 모양을 지정

const ListItem=styled.li`
    // display: flex;
    // gap:20px;
    // list=style: none;
    cursor :pointer;
`
//gap :  내부의 childrenㅇ 요소들이 일정한 간격으로 위치할 수 있도록 사용하는 스타일 속성

const Icons=styled.div`
  display: flex;
  align-items: center;
  gap:20px;

`
const Icon=styled.img`
    width : 20px;
    cursor:pointer;
   

`
const Button=styled.button`
    width : 100px;
    padding: 10px;
    background-color:#da4ea2;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
`

const Navbar = () => {
    return (
     <Section>
        <Container>
            <Links>
                <Logo src="./img/logo.jpg"></Logo>

                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>

               
            </Links>
            <Icons>   
                <Icon src="./img/search.png"></Icon>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
     </Section>
    );
};

export default Navbar;