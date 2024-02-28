import { useState } from "react";

import { Container } from "./styles";
import { FiPlus, FiMinus } from 'react-icons/fi';

export function QtySelect() {
  const [ qty, setQty ] = useState(1);

  function minusQty() {
    if(qty > 1) {
      setQty(qty-1)
    }
  };

  function plusQty() {
    setQty(qty+1)
  };

  return (
    <Container>
      <FiMinus onClick={minusQty}/>
      <p>{qty}</p>      
      <FiPlus onClick={plusQty}/>  
    </Container>
  );
};