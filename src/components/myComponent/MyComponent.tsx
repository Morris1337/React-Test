import React from "react";

export default function MyComponent({children}){
    return(
        <div>
            {
                children.map((item, index) =>{
                    return(
                        <div key={index}>
                            Element {item}
                        </div>
                    )
                })
            }
        </div>
    )
}