import { Container, Main, Form, Buttons } from "./styles";
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

import { Footer } from "../../components/Footer";

export function EditDish() {
  return (
    <Container>
      <Header />
      <Main>
        <ButtonText value="voltar" icon={SlArrowLeft} />
        <h1>Editar Prato</h1>
        <Form>
          <InputFileWrapper title="Selecione imagem para alterá-la" id="image" icon={FiUpload} />
          <InputWrapper title="Nome" type="text" id="name" placeholder="Salada Ceasar" className="dark" />
          <SelectWrapper title="Categoria" id="category" />
          <IngredientTagWrapper 
            title="Ingredientes" 
            data={{
              ingredients: [ 
                {id: 1, name: "alface"},
                {id: 2, name: "cebola"},
                {id: 3, name: "pão naan"},
                {id: 4, name: "pepino"},
                {id: 5, name: "rabanete"},
                {id: 6, name: "tomate"}
              ]
            }}  
          />
          <InputWrapper title="Preço (R$)" type="text" id="price" placeholder="40,00" className="dark" />
          <TextareaWrapper title="Descrição" type="text" id="description" value="A Salada César é uma opção refrescante para o verão." />
          <Buttons>
            <Button value="Excluir prato" className="dark" />
            <Button value="Salvar alterações" className="light" />
          </Buttons>
        </Form>
      </Main>
      <Footer></Footer>
    </Container>
  );
};