import Tilt from 'react-parallax-tilt';
import image from "../../assets/background.png";
import { Image } from '../../components/Image';
import ControlledOpenSpeedDial from "../../components/speed-dial";
import { Page } from "../style";

const HomePage = () => {
  return (
    <Page>
      <Tilt>
        <Image src={image} alt="Cyber Dog"/>
      </Tilt>
      <ControlledOpenSpeedDial />
    </Page>
  );
};

export default HomePage;