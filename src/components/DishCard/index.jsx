import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, DishDetails, DishOrder } from "./styles";
import { QtySelect } from "../QtySelect";
import { Button } from "../Button";

import { FiHeart } from "react-icons/fi";
import { PiPencilSimpleBold } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function DishCard({ data, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleEditDish() {
    navigate(`/editdish/${data.id}`)
  };

  return (
    <Container>
      {
        user.role == USER_ROLE.ADMIN ? <PiPencilSimpleBold onClick={handleEditDish} /> : <FiHeart />
      }          

      <DishDetails {...rest} >
        <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="data.name" />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <h2>{`R$ ${data.price}`}</h2>
      </DishDetails>  

      {
        user.role != USER_ROLE.ADMIN ?
        <DishOrder>
          <QtySelect />
          <Button value="incluir" />
        </DishOrder> : <><br /><br /><br /></>
      }  

    </Container>
  );
};