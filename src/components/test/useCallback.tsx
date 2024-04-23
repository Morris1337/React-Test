import React from "react";

    const BigButton = (props) => {
      const { handleClick } = props;
    
      console.log("Рендер BigButton");
    
      return <button onClick={handleClick}>БОЛЬШАЯ КНОПКА!</button>;
    };
    
    export default React.memo(BigButton);
    