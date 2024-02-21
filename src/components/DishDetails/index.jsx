import { Container, IngredientsList } from "./styles";
import { IngredientTag } from "../IngredientTag";

export function DishDetails({ data, ...rest }) {
  return ( 
    <Container {...rest}>
      <img src={data.image.FoodImg} alt={data.name} />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <IngredientsList>
        {
          data.ingredients.map( ingredient => 
            <IngredientTag key={ingredient.id} name={ingredient.name} />
          )
        }
      </IngredientsList>
    </Container>
  );
};