import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/bg.jpg");
  color: white;
  // background-size :cover;
  &::-webkit-scrollbar{
    display: none;
  }
`;
// scroll-snap-type: 스크롤 동작시 콘텐츠를 부드럽게 다음 콘텐츠로 이동시킴
// scroll-behavior:smooth 스크롤의 움직임이 부드러워짐
// over-flow-y y축 속성이 넘칠 때, 어떻게 보여줄 시 정함
// scrollbar-width:none : 스코롤바 없앰


function App() {

  return (
    <Container>
    
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>      
    
  )
}

export default App
