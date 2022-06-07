//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

const Products = () => {
  //const { counter } = useContext(CounterContext);
  const {counter} = useCounterContext();

  return (
    <div>
      <h1>Lista de produtos</h1>
      <p>Valor contador: {counter}</p>
    </div>
  );
};

export default Products;