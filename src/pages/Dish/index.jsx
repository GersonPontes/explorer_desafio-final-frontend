import { Container, Main, DishOrder } from "./styles";
import { SlArrowLeft } from "react-icons/sl";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { DishDetails } from "../../components/DishDetails";
import { QtySelect } from "../../components/QtySelect";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { PiNewspaperClipping } from 'react-icons/pi';

import FoodImg from "../../assets/food1.png";

export function Dish() {
  return (
    <Container>
      <Header />
      <Main>
        <ButtonText value="voltar" icon={SlArrowLeft} />
        <DishDetails 
          data={{
            name: "Salada Ravanello",
            description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
            image: {FoodImg},
            ingredients: [ 
              {id: 1, name: "alface"},
              {id: 2, name: "cebola"},
              {id: 3, name: "pão naan"},
              {id: 4, name: "pepino"},
              {id: 5, name: "rabanete"},
              {id: 6, name: "tomate"}
            ]
          }}        
        />
        <DishOrder>
          <QtySelect value="01" />
          <Button value="pedir ∙ R$ 25,00" icon={PiNewspaperClipping} />
        </DishOrder>
      </Main>
      <Footer></Footer>
    </Container>
  );
};