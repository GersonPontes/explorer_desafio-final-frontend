import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Main, Form, FormPt1, FormPt2, FormPt3 } from "./styles";
import { SlArrowLeft } from "react-icons/sl";
import { FiUpload } from "react-icons/fi";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { InputWrapper } from "../../components/InputWrapper";
import { InputFileWrapper } from "../../components/InputFileWrapper";
import { SelectWrapper } from "../../components/SelectWrapper";
import { TextareaWrapper } from "../../components/TextareaWrapper";
import { IngredientTagWrapper } from "../../components/IngredientTagWrapper";
import { DishIngredientTag } from "../../components/DishIngredientTag";

import { Footer } from "../../components/Footer";

export function NewDish() {
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("meal");
  const [ description, setDescription ] = useState("");

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState("");

  const navigate = new useNavigate();

  function handleAddIngredients() {
    if(!newIngredient) {
      return
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  };

  async function handleNewDish() {
    if(!name) {
      return alert("Digite o nome do prato");
    };
    if(ingredients.length == 0) {
      return alert("Adicione pelo menos 1 ingrediente");
    };
    if(newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio");
     };
    if(!price) {
      return alert("Informe o valor do prato");
    };
    if(!description) {
      return alert("Adicione uma descrição para o prato");
    };

    try {
      await api.post("/dishes", {
        name,
        description,
        price,
        category,
        ingredients
      });
  
      alert("Prato cadastrado com sucesso!");
      handleBack();

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel cadastrar o prato");
      };
    };
  };  

  function handleBack() {
    navigate(-1);
  };

  return (
    <Container>
      <Header />
      <Main>
        <ButtonText 
          value="voltar" 
          icon={SlArrowLeft} 
          onClick={handleBack}
        />
        <h1>Novo Prato</h1>
        <Form>

          <FormPt1>
            <InputFileWrapper title="Selecione imagem" id="image" icon={FiUpload} />
            <InputWrapper 
              title="Nome" 
              type="text" 
              id="name" 
              placeholder="Ex.: Salada Ceasar" 
              className="dark" 
              onChange={e => setName(e.target.value)}
            />
            <SelectWrapper 
              title="Categoria" 
              id="category" 
              onChange={e => setCategory(e.target.value)}
            />
          </FormPt1>

          <FormPt2>

            <IngredientTagWrapper>

              {
                ingredients.map(( ingredient, index ) => (
                  <DishIngredientTag
                    key={String(index)} 
                    value={ingredient}
                    onClick={() => handleRemoveIngredients(ingredient)}
                  />
                ))
              }

              <DishIngredientTag
                isNew={true}        
                placeholder="Novo"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredients}
              />

            </IngredientTagWrapper>

            <InputWrapper 
              title="Preço (R$)" 
              type="number" 
              id="price" 
              placeholder="00,00" 
              className="dark" 
              onChange={e => setPrice(e.target.value)}
            />
          </FormPt2>

          <FormPt3>
            <TextareaWrapper 
              title="Descrição" 
              type="text" 
              id="description" 
              value="Fale brevemente sobre o prato, seus ingredientes e composição" 
              onChange={e => setDescription(e.target.value)}
            />
            <Button 
              value="Salvar alterações" 
              className="light" 
              onClick={handleNewDish}                       
            />
          </FormPt3>

        </Form>
      </Main>
      <Footer></Footer>
    </Container>
  );
};