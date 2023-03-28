import React from "react";
import {Routes,Route} from 'react-router-dom';
import Create from "../components/create";

import Delete from "../components/delete";
import Read from "../components/read";
import Update from "../components/update";
export default function Reactcontent()
{
    return(
        <Routes>
            <Route path="/create" element={<Create/>}/>
            <Route path="/" element={<Delete/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/read" element={<Read/>}/>
        </Routes>
    )
}