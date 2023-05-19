import Provider from "./Provider/Provider";
import "./App.css";
import styled from "styled-components";
import Header from './components/Header/Header'
import SpaceshipList from "./components/SpaceshipList/SpaceshipList";
import Footer from "./components/Footer/Footer";
import spaceBackground from './assets/space-bg.jpg'

const StylingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  background-image: url(${spaceBackground});
  width:100%;
  height: 100%;
  text-align: center;
`;

function App() {

  return (
    <Provider>
      <StylingWrapper>
        <Header/>
        <SpaceshipList />
        <Footer/>
      </StylingWrapper>
    </Provider>
  );
}

export default App;
