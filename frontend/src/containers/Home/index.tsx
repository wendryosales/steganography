// Third
import Tilt from 'react-parallax-tilt';

// Local and Project
import image from "../../assets/background.png";
import { Help } from '../../components/help';
import { Image } from '../../components/logo';
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { Page } from "../style";
import { Container } from './styles';

const HomePage = () => {
  return (
    <Page>
      <Container >
        <h1>Catpunk Steganography</h1>
        <Tilt>
          <Image src={image} alt="Cyber Dog"/>
        </Tilt>
      </Container>
      <Help />
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default HomePage;