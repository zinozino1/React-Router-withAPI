import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
    { name: "all", text: "전체보기" },
    { name: "business", text: "비즈니스" },
    { name: "entertainment", text: "연예" },
    { name: "health", text: "건강" },
    { name: "science", text: "과학" },
    { name: "sports", text: "스포츠" },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const CategoryItem = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    margin-left: 10px;
    &:hover {
        color: #495057;
    }
    &.active {
        color: royalblue;
    }
`;

const Category = () => {
    return (
        <CategoriesBlock>
            {categories.map((v, i) => {
                return (
                    <CategoryItem
                        key={v.name}
                        activeClassName="active"
                        exact={v.name === "all"}
                        to={v.name === "all" ? "/" : `/${v.name}`}
                    >
                        {v.text}
                    </CategoryItem>
                );
            })}
        </CategoriesBlock>
    );
};

export default Category;
