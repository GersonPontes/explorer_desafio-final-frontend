import { Container, Ingredients } from "./styles";

export function IngredientTagWrapper({ children }) {
  return (
    <Container>
      <label>
        Ingredientes
      </label>

      <Ingredients>
        {children}
      </Ingredients>

    </Container>
  );
};