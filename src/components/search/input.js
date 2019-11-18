import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Search } from "emotion-icons/fa-solid";

const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  margin-right: 10px;
`;

const focus = props => css`
  background: white;
  color: ${props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props.theme.darkBlue};
    margin: 0.3em;
  }
`;

const collapse = props => css`
  width: 0;
  cursor: pointer;
  color: ${props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props.focus && focus}
  margin-left: ${props.focus ? `-1.6em` : `-1em`};
  padding-left: ${props.focus ? `1.6em` : `1em`};
  ::placeholder {
    color: ${props.theme.gray};
  }
`;
const expand = props => css`
  background: ${props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`;

const InputStyle = props => css`
  outline: none;
  border: none;
  font-size: 1em;
  background: white;
  transition: ${props.theme.shortTrans};
  border-radius: ${props.theme.smallBorderRadius};
  ${props.collapse ? collapse : expand};
`;
const Input = styled("input")`
  ${InputStyle}
`;

const Form = styled("form")`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export default connectSearchBox(({ refine, ...rest }) => {
  const searchCustom = "";
  const preventSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form className={"formElement"} onSubmit={preventSubmit}>
      <SearchIcon />
      <Input
        className={"searchInput " + searchCustom}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        {...rest}
      />
    </Form>
  );
});
