import { styled } from "@mui/material";

export const Nav = styled('nav')`
margin: 0 25px;
display: flex;
gap: 15px;
a {
    text-decoration: none;
    color: #afa;
    &: hover {
        text-decoration: underline;
    }
}
`