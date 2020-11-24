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

const CategoryContainer = styled.div`
    margin: 20px;
`;

const CategoryItem = styled(NavLink)`
    margin: 5px;
    &:visited {
        color: black;
    }
    &.active {
        color: blue;
    }
`;

const Category = () => {
    return (
        <CategoryContainer>
            {categories.map((v, i) => {
                return (
                    <CategoryItem
                        key={v.name}
                        to={v.name === "all" ? `/` : `/${v.name}`}
                        activeClassName="active"
                        exact={v.name === "all"}
                    >
                        {v.text}
                    </CategoryItem>
                );
            })}
        </CategoryContainer>
    );
};

export default Category;
