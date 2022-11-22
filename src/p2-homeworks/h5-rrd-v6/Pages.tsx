import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";
import JuniorHW3 from "./pages/Junior HW3";
import JuniorHW4 from "./pages/Junior HW4";
import HomeWorksHW6 from "./pages/HomeWorksHW6";
import HomeWorksHW7 from "./pages/HomeWorksHW7";
import HomePage from "./pages/HomePage";
import HomeWorksHW9 from "./pages/HomeWorksHW9";
import HomeWorksHW10 from "./pages/HomeWorksHW10";

export const PATH = {
    HOME: '/home_page',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
    JUNIOR_HW3: '/junior_HW3',
    JUNIOR_HW4: '/junior_HW4',
    HOME_WORKS_HW6: '/HomeWorksHW6',
    HOME_WORKS_HW7: '/HomeWorksHW7',
    HOME_WORKS_HW9: '/HomeWorksHW9',
    HOME_WORKS_HW10: '/HomeWorksHW10'
}

function Pages() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} element={<HomePage/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.JUNIOR_HW3} element={<JuniorHW3/>}/>
                <Route path={PATH.JUNIOR_HW4} element={<JuniorHW4/>}/>
                <Route path={PATH.HOME_WORKS_HW6} element={<HomeWorksHW6/>}/>
                <Route path={PATH.HOME_WORKS_HW7} element={<HomeWorksHW7/>}/>
                <Route path={PATH.HOME_WORKS_HW9} element={<HomeWorksHW9/>}/>
                <Route path={PATH.HOME_WORKS_HW10} element={<HomeWorksHW10/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
