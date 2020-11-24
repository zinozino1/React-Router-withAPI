import React from "react";
import Category from "../components/Category";
import Newslist from "../components/Newslist";

const NewsPage = ({ match }) => {
    console.log("news page rerender");
    const category = match.params.category || "all";

    return (
        <>
            <Category></Category>
            <Newslist category={category}></Newslist>
        </>
    );
};

export default NewsPage;
