import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function DishIngredientTag({ isNew, value, ...rest }) {
  return (
    <Container 
      $isnew={isNew}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type="button"
        className= { isNew ? 'button-add' : 'button-delete' }
      >    
        { isNew ? <FiPlus /> : <FiX /> }    
      </button>
      
    </Container>
  );
};