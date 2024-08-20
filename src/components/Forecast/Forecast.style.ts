import styled from "styled-components";

export const StyledForecast = styled.article`
    border: 1px solid blueviolet;
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    width: 40%;

    &:hover{
        background-color: blueviolet;
        color: white;
    }

    ${(props) => props.large && `
        width: 100%;
        font-size: 32px;
    `}

    ${(props) =>
        props.min < 15 &&
        `
            color: lightblue
        `
    }
`
