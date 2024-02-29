import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Main, Form, FormPt1, FormPt2, FormPt3, Buttons } from "./styles";
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

export function EditDish() {
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ description, setDescription ] = useState("");

  const [ image, setImage ] = useState("");
  const [ imageName, setImageName ] = useState("Selecione imagem");

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState("");

  const params = useParams(); 
  const navigate = useNavigate(); 

  function handleAddIngredients() {
    if(!newIngredient) {
      return
    }
    setIngredients(prevState => [...prevState, newIngredient.trim()]);
    setNewIngredient("");
  };

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  };

  async function handleChangeDishImg(e) {
    if(e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    } else {
      setImage("");
      const response = await api.get(`/dishes/${params.id}`);
      setImageName(response.data.image);
    }
  };

  async function handleUpdateDish() {
    const confirm = window.confirm(`Deseja realmente atualizar o prato com os dados digitados?`);

    if(confirm) {
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
    } else {
      return;
    }

    try {
      await api.put(`/dishes/${params.id}`, {
        name,
        description,
        price,
        category,
        ingredients
      });

      if(image) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("dishImg", image);
    
        await api.patch(`/dishes/${params.id}`, fileUploadForm);
      } 

      alert("Prato atualizado com sucesso!");
      navigate("/");
      
    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato");
      };
    };

    return;
  };

  async function handleDeleteDish() {
    const confirm = window.confirm(`Deseja realmente deletar o prato: ${name}?`);

    if(confirm) {

      try {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");
        
      } catch(error) {
        if(error.response){
          alert(error.response.data.message);
        } else {
          alert("Não foi deletar o prato");
        };
      }
    };
    
    return;
  }; 
  
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
      setImageName(response.data.image);

      setIngredients(response.data.ingredients.map( ingredient => {
        return ingredient.name
      }));

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
        <h1>Editar Prato</h1>
        <Form>
          <FormPt1>
            <InputFileWrapper 
              title={imageName} 
              id="image" 
              icon={FiUpload} 
              onChange={handleChangeDishImg}
            />
            <InputWrapper 
              title="Nome" 
              type="text" 
              id="name" 
              placeholder={name} 
              className="dark"
              onChange={e => setName(e.target.value)}
            />
            <SelectWrapper 
              title="Categoria" 
              id="category" 
              value={category}
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
              placeholder={price} 
              className="dark" 
              onChange={e => setPrice(e.target.value)}
            />
          </FormPt2>

          <FormPt3>
            <TextareaWrapper 
              title="Descrição" 
              type="text" 
              id="description"
              value={description} 
              onChange={e => setDescription(e.target.value)}
            />
          </FormPt3>          
          
          <Buttons>
            <Button 
              value="Excluir prato" 
              className="dark" 
              onClick={handleDeleteDish}
            />
            <Button 
              value="Salvar alterações" 
              className="light" 
              onClick={handleUpdateDish}
            />
          </Buttons>
        </Form>
      </Main>
      <Footer></Footer>
    </Container>
  );
};