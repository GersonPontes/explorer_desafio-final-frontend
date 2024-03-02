import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Main } from "./styles";
import { SlArrowLeft } from "react-icons/sl";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { DishDetails } from "../../components/DishDetails";
import { Footer } from "../../components/Footer";

export function Dish() {
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ ingredients, setIngredients ] = useState([]);

  const [ image, setImage ] = useState("");

  const params = useParams(); 
  const navigate = useNavigate(); 

  function handleBack() {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchDish() {

      let response

      try {
        response = await api.get(`/dishes/${params.id}`, { withCredentials:true });
      } catch {
        navigate("/");
      };

      setName(response.data.name);
      setPrice(response.data.price);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setIngredients(response.data.ingredients);
      setImage(response.data.image);
    };
    fetchDish()
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <ButtonText 
          value="voltar" 
          icon={SlArrowLeft} 
          onClick={handleBack}
        />
        <DishDetails data={{ id:params.id, name, description, price, ingredients, image }} />     
      </Main>
      <Footer></Footer>
    </Container>
  );
};