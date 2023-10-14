import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const CoffeeStateContext = createContext(null);

const CoffeeContext = ({ children }) => {
  const [allCoffees, setAllCoffees] = useState("hello from context");

  const contextValue = {
    allCoffees,
    setAllCoffees,
  };

  return (
    <CoffeeStateContext.Provider value={contextValue}>
      {children}
    </CoffeeStateContext.Provider>
  );
};

export default CoffeeContext;

CoffeeContext.propTypes = {
  children: PropTypes.node.isRequired,
};
