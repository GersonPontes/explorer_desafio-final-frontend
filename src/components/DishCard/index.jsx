import { Container, DishOrder } from "./styles";
import { QtySelect } from "../QtySelect";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";

import FoodImg from "../../assets/food1.png";

export function DishCard({ data }) {
  return (
    <Container>
      <FiHeart />    
      <img src={FoodImg} alt="" />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <h2>{`R$ ${data.price}`}</h2>

      <DishOrder>
        <QtySelect value="01" />
        <Button value="incluir" />
      </DishOrder>

    </Container>
  );
};