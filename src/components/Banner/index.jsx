import { Container, BannerTxt } from "./styles";
import BannerImg from "../../assets/banner.png";

export function Banner() {
  return (
    <Container>
      <img src={BannerImg} />
      <BannerTxt>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </BannerTxt>
    </Container>
  );
};