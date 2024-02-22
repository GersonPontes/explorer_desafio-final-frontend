import { Container } from "./styles";
import { InputFile } from "../InputFile";

export function InputFileWrapper({ icon, title, id, ...rest }) {
  return (
    <Container>

      <span>
        Imagem do prato 
      </span>
      
      <InputFile         
        icon= {icon}
        title= {title}
        id={id}
        {...rest}
      />

    </Container>
  );
};