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

import { Footer } from "../../components/Footer";

export function EditDish() {
  return (
    <Container>
      <Header />
      <Main>
        <ButtonText value="voltar" icon={SlArrowLeft} />
        <h1>Editar Prato</h1>
        <Form>
          <FormPt1>
            <InputFileWrapper title="Selecione imagem" id="image" icon={FiUpload} />
            <InputWrapper title="Nome" type="text" id="name" placeholder="Salada Ceasar" className="dark" />
            <SelectWrapper title="Categoria" id="category" />
          </FormPt1>

          <FormPt2>
            <IngredientTagWrapper title="Ingredientes" isNew />
            <InputWrapper title="Preço (R$)" type="text" id="price" placeholder="40,00" className="dark" />
          </FormPt2>

          <FormPt3>
            <TextareaWrapper title="Descrição" type="text" id="description" value="A Salada César é uma opção refrescante para o verão." />
          </FormPt3>          
          
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