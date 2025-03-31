export const colorLight = (definedColor,currentColor) =>{
    if (definedColor === "red" && currentColor === "red"){
        return{
            boxShadow: "0px 0px 50px 40px rgba(255, 0, 0, 1)",
            backgroundPosition: "center",
            borderRadius: "50%"
        }
    }
    if (definedColor === "yellow" && currentColor === "yellow"){
        return{
            
            boxShadow: "0px 0px 50px 40px rgba(255, 255, 0, 1)",
            borderRadius: "50%"
        }
    }
    if (definedColor === "green" && currentColor === "green"){
        return{
            
            boxShadow: "0px 0px 50px 40px rgba(0, 255, 0, 1)",
            borderRadius: "50%"
        }
    } else{
        return{}
    }
}

// Rojo: rgba(255, 0, 0, 1)
// Verde: rgba(0, 255, 0, 1)
// Amarillo: rgba(255, 255, 0, 1)