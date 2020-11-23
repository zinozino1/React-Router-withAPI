import React, { useState, useCallback } from "react";
import Newslist from "./components/Newslist";
import Category from "./components/Category";
import { Route } from "react-router-dom";
import NewsPage from "../src/pages/NewsPage";

const App = () => {
    return (
        <div className="App">
            <Route path="/:category?" component={NewsPage}></Route>
            {/* {/:category? ==> category값이 선택적이란 의미. 있을수도 없을 수도 있다.} */}
        </div>
    );
};

export default App;
