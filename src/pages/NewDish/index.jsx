import { Container, Main, Form } from "./styles";
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

export function NewDish() {
  return (
    <Container>
      <Header />
      <Main>
        <ButtonText value="voltar" icon={SlArrowLeft} />
        <h1>Novo Prato</h1>
        <Form>
          <InputFileWrapper title="Selecione imagem" id="image" icon={FiUpload} />
          <InputWrapper title="Nome" type="text" id="name" placeholder="Ex.: Salada Ceasar" className="dark" />
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
          <InputWrapper title="Preço (R$)" type="text" id="price" placeholder="00,00" className="dark" />
          <TextareaWrapper title="Descrição" type="text" id="description" value="Fale brevemente sobre o prato, seus ingredientes e composição" />
          <Button value="Salvar alterações" className="light" />
        </Form>
      </Main>
      <Footer></Footer>
    </Container>
  );
};