import { useState } from "react";
import { AppContext } from "./AppContext";

const AppState = (props) => {

    const [addItems, setAddItems] = useState(0)

    const myName = 'Sayyed Irfan'

  return (
    <div>
      <AppContext.Provider value={{myName, addItems, setAddItems}}>

        {props.children}

        </AppContext.Provider>
    </div>
  );
};

export default AppState;
