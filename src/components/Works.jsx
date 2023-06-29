import React from 'react';
import styled from 'styled-components';

const data=[
    "Web Developer", 
    "Back-end",
    "Front-end", 
    "Algorithm",
    "Data Engineer"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align :center;
  display: flex;
  justify-content: flex;


`

const Container=styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left=styled.div`
    flex:1;
    display: flex;
    justify-content: center;

    align-items: center;
`;

const List=styled.ul`
    list-style:none;
    display:flex;
    flex-direction: column;
    gap:20px;
`;

const ListItem=styled.li`
    font-size: 90px;
    font-weight:bold;
    cursor: pointer;

    // 글자색 투명
    // 글자 윤곽선 흰색, 굵기 1px으로 설정
    color: transparent;
    -webkit-text-stroke: 1px white;

    position: relative;

    //?...
    white-space: nowrap;

    //선택한 element 뒤에 가상 콘텐츠 삽입
    &::after {
        content: "${(props)=>props.text}";
        position: absolute;
        top: 0;
        left: 0;

        //색은 핑크, 넘치면 안 보이게 설정->즉 너비가 0이어서 안 보임
        color : pink;
        width: 0px;
        overflow: hidden;
        //줄바꿈 여부를 결정->줄바꿈 안 함
        white-space: nowrap;
    }

    //마우스를 가져가면 색이 바뀌도록 함
    &:hover{
        &::after{
            animation : moveText 0.5s linear both ;
            //both:색이 채워진 후 상태 유지하도록함

            @keyframes moveText{
                to{
                    //widrh:0인 요소를 100%로 늘려서 핑크색 글씨가 보이게 함
                    width:100%;
                }
            }
            color: pink;
        }
    }

`;


const Right=styled.div`
    flex:1;
`;

const Img=styled.img`

`;

const Works=()=>{
    return(
        <Section>
            <Container>
                <Left>
                    <List>
                        {/* 반복문으로 데이터 불러오기 */}
                        {data.map((item)=>(
                            <ListItem key={item} text={item}>{item}</ListItem>
                        ))}
                    </List>
                </Left>

                <Right>


                </Right>
            </Container>
        </Section>
    )
}

export default Works;