import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const Newslist = ({ category }) => {
    console.log(1);
    const [loading, response, error] = usePromise(() => {
        return axios.get(
            category === "all"
                ? `http://newsapi.org/v2/top-headlines?country=kr&apiKey=0e1636874c194cf7bed28aef2858db55`
                : `http://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=0e1636874c194cf7bed28aef2858db55`,
        );
    }, [category]);

    console.log(3);
    console.log(loading);
    console.log(response);
    if (loading) {
        return <NewsListBlock>...loading 중</NewsListBlock>;
    }

    if (!response) {
        // 아주아주 잠깐동안 null을 렌더링한다.
        // NewsList가 마운트되자마자 실행되는 것. 마운트가 끝나면
        // useEffect가 실행되어 article을 받아오게되고 그 때부터 map을 사용할 수 있게 된다.
        return null;
    }
    if (error) {
        return <div>error 발생</div>;
    }

    console.log(4);
    return (
        <NewsListBlock>
            {response.data.articles.map((v, i) => {
                return <NewsItem article={v} key={v.url}></NewsItem>;
            })}
        </NewsListBlock>
    );
};

export default Newslist;
