import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Main } from "./styles";
import { SlArrowLeft } from "react-icons/sl";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { DishDetails } from "../../components/DishDetails";
import { Footer } from "../../components/Footer";

import FoodImg from "../../assets/food1.png";

export function Dish() {
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ ingredients, setIngredients ] = useState([]);

  const params = useParams(); 
  const navigate = useNavigate(); 

  function handleBack() {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setName(response.data.name);
      setPrice(response.data.price);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setIngredients(response.data.ingredients);
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
        <DishDetails data={{ name, description, price, ingredients, image: {FoodImg} }} />     
      </Main>
      <Footer></Footer>
    </Container>
  );
};