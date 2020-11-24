import React, { useState, useCallback } from "react";
import Newslist from "./components/Newslist";
import Category from "./components/Category";
import { Route } from "react-router-dom";
import NewsPage from "../src/pages/NewsPage";

const App = () => {
    console.log("app리렌더");
    return (
        <div className="App">
            <Route path="/:category?" component={NewsPage}></Route>
        </div>
    );
};

export default App;
