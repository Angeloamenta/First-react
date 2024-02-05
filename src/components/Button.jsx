import { useState, useEffect } from 'react'



function Button({cities, selectAll}) {
    console.log("button", cities);
    
    
    
    function removeSelected() { 
        selectAll()
    }

    return (
        <>
            {/* <div>
                <button disabled={cities.length === 4}>Seleziona</button>
            </div> */}
            <div>
                <button onClick={removeSelected} >Seleziona</button>
            </div>
            
        </>
    )
}

export default Button