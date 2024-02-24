import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { DishGallery } from "../../components/DishGallery";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Banner></Banner>
        <DishGallery 
          name="Refeições" 
          data={[
            {
              id: 1,
              name: "Salada Ravanello",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "49,97"
            },
            {
              id: 2,
              name: "Spaguetti Gambe >",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "79,97"
            },
            {
              id: 3,
              name: "Suco de maracujá",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "13,97"
            },
            {
              id: 4,
              name: "Suco de maracujá",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "13,97"
            },
            {
              id: 5,
              name: "Suco de maracujá",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "13,97"
            }
          ]} 
        />
        <DishGallery 
          name="Sobremesas" 
          data={[
            {
              id: 1,
              name: "Prugna Pie",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "79,97"
            },
            {
              id: 2,
              name: "Peachy pastrie",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "32,97"
            },
            {
              id: 3,
              name: "Peachy pastrie",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "32,97"
            }
          ]} 
        />
        <DishGallery 
          name="Bebidas" 
          data={[
            {
              id: 1,
              name: "Espresso",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "15,97"
            },
            {
              id: 2,
              name: "Suco de maracujá",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "13,97"
            },
            {
              id: 3,
              name: "Peachy pastrie",
              description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
              image: "img",
              price: "32,97"
            }
          ]} 
        />
      </Main>
      <Footer></Footer>
    </Container>
  );
};