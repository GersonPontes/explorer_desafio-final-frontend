import { Container, DishImg, DishDescription, IngredientsList, DishOrder } from "./styles";
import { IngredientTag } from "../IngredientTag";
import { QtySelect } from "../QtySelect";
import { Button } from "../Button";

import { PiNewspaperClipping } from 'react-icons/pi';

export function DishDetails({ data, ...rest }) {
  return ( 
    <Container {...rest}>

      <DishImg>
        <img src={data.image.FoodImg} alt={data.name} />
      </DishImg>

      <DishDescription>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </DishDescription>

      <IngredientsList>
        {
          data.ingredients.map( ingredient => 
            <IngredientTag key={ingredient.id} name={ingredient.name} />
          )
        }
      </IngredientsList>

      <DishOrder>
        <QtySelect value="01" />
        <Button value={`pedir ∙ R$ ${data.price}`} icon={PiNewspaperClipping} />
      </DishOrder>

    </Container>
  );
};