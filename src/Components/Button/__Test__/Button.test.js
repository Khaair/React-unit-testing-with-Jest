import React from "react";
import ReactDom from 'react-dom'
import Button from "../Button";

it("renders without crushing", () =>{
    const div = document.createElement("div")
    ReactDom.render(<Button></Button>,div)
})