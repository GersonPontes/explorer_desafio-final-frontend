import { Container, Ingredients } from "./styles";
import { DishIngredientTag } from "../DishIngredientTag";

export function IngredientTagWrapper({ title, isNew, value, ...rest }) {
  return (
    <Container>
      <label>
        {title}
      </label>

      <Ingredients>
        <DishIngredientTag 
          isNew={isNew} 
          value={value} 
          {...rest} 
        />
      </Ingredients>

    </Container>
  );
};