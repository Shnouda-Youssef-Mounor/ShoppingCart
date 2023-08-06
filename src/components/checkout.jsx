import React from "react";
import { Link } from "react-router-dom";
export const CheckOut=()=>{
    const style={
        backgroundColor:"black",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer",
        textDecoration:"none",
        padding:"5px"
        
    }
    return<>
    <h1>Successful</h1>
    <Link style={style} to="/">Continue Shopping</Link>
    </>
}