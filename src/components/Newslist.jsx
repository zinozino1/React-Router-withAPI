import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const LoadingContainer = styled.div`
    font-size: 20px;
    margin: 20px;
    text-align: center;
`;

const Newslist = ({ category }) => {
    console.log("news List rerender");
    const [resolved, loading, error] = usePromise(() => {
        return axios.get(
            category === "all"
                ? `http://newsapi.org/v2/top-headlines?country=kr&apiKey=0e1636874c194cf7bed28aef2858db55`
                : `http://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=0e1636874c194cf7bed28aef2858db55`,
        );
    }, [category]);

    if (loading) return <LoadingContainer>fetching...</LoadingContainer>;

    if (!resolved) return null;

    const { articles } = resolved.data;

    return (
        <div>
            {articles.map((v, i) => {
                return <NewsItem key={v.url} data={v}></NewsItem>;
            })}
        </div>
    );
};

export default Newslist;
