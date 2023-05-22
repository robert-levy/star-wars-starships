import starwarsLogo from "../../assets/starwars-logo.png";
import { HeaderWrapper, IntroText } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={starwarsLogo} width={210} height={210} />
        <IntroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum laborum repudiandae nam quibusdam pariatur commodi deleniti reiciendis animi. Sequi consequatur voluptatum laborum itaque nisi non, dolor laboriosam consequuntur ratione.
        </IntroText>
    </HeaderWrapper>
  );
};

export default Header;
