import {Route, Routes, BrowserRouter} from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Erro from "./pages/Erro";


import Header from "./components/Header";


function RouteApp(){
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:id" element={<Filme/>}/>
                
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default RouteApp;