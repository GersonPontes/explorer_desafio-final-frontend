import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, DishImg, DishDescription, IngredientsList, DishOrder } from "./styles";
import { IngredientTag } from "../IngredientTag";
import { QtySelect } from "../QtySelect";
import { Button } from "../Button";

import { PiNewspaperClipping } from 'react-icons/pi';

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function DishDetails({ data, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleEditDish(){
    navigate(`/editdish/${data.id}`)
  };

  return ( 
    <Container {...rest}>

      <DishImg>
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt={data.name} />
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

      {
        user.role != USER_ROLE.ADMIN &&
        <DishOrder>
          <QtySelect />
          <Button 
            value={`pedir ∙ R$ ${data.price}`} 
            icon={PiNewspaperClipping} 
          />
        </DishOrder>
      }

      {
        user.role == USER_ROLE.ADMIN &&
        <Button 
          value={"Editar prato"} 
          onClick={handleEditDish}
          className="btnEdit"
        />
      }

    </Container>
  );
};