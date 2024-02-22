import { Container, DishList } from "./styles";
import { DishCard } from "../DishCard";

export function DishGallery({ name, data }) {
  return (
    <Container>
      <h1>{name}</h1>
      <DishList>
        {
          data.map( dish => 
            <DishCard key={dish.id} data={dish} />
          )
        }
      </DishList>
    </Container>
  );
};