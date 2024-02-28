import { api } from "../../services/api";

import { Container, DishDetails, DishOrder } from "./styles";
import { QtySelect } from "../QtySelect";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";

export function DishCard({ data, ...rest }) {
  return (
    <Container>
      <FiHeart />

      <DishDetails {...rest} >
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="data.name" />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <h2>{`R$ ${data.price}`}</h2>
      </DishDetails>     

      <DishOrder>
        <QtySelect />
        <Button value="incluir" />
      </DishOrder>

    </Container>
  );
};