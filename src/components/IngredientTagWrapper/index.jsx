import { Container, Ingredients } from "./styles";
import { IngredientTag } from "../IngredientTag";

export function IngredientTagWrapper({ icon, title, data, ...rest }) {
  return (
    <Container>
      <label>
        {title}
      </label>

      <Ingredients>
        {
          data.ingredients.map( ingredient => 
            <IngredientTag key={ingredient.id} name={ingredient.name} className="light" />
          )
        }
      </Ingredients>


    </Container>
  );
};