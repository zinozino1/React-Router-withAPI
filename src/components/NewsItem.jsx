import React from "react";
import styled from "styled-components";

const NewsItemContainer = styled.div`
    border: 1px solid blue;
    display: flex;
    margin: 20px;
    .thumbnail {
        margin: 5px;
        img {
            width: 100px;
            height: 100px;
        }
    }
    .content {
        margin: 5px;
        a {
            font-size: 24px;
            color: black;
            font-weight: 600;
            text-decoration: none;
            &:hover {
                color: blue;
            }
        }
    }
`;

const NewsItem = ({ data }) => {
    const { title, description, url, urlToImage } = data;
    console.log("news Item rerender");
    return (
        <NewsItemContainer>
            <div className="thumbnail">
                <a href={url} target="_blank">
                    <img src={urlToImage} alt="image" />
                </a>
            </div>
            <div className="content">
                <a href={url} target="_blank">
                    {title}
                </a>
                <p>{description}</p>
            </div>
        </NewsItemContainer>
    );
};

export default NewsItem;
