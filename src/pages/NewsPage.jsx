import React from "react";
import Category from "../components/Category";
import Newslist from "../components/Newslist";

const NewsPage = ({ match }) => {
    const category = match.params.category || "all"; // state를 사용하지 않고 params 이용

    return (
        <>
            <Category></Category>
            <Newslist category={category}></Newslist>
        </>
    );
};

export default NewsPage;
