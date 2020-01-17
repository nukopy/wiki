import { system } from "styled-system";
import styled from "@emotion/styled-base";

const borderColor = 'rgb(147, 151, 153)';

const Heading = {
  h1: styled("h1")({
    fortSize: [5, 6]
  }),
  h2: styled("h2")({
    fontSize: 30,
    borderBottom: `solid 2px black`
  }),
  h3: styled("h3")({
    fontSize: 22.5,
    borderBottom: `dashed 1.5px ${borderColor}`
  }),
  h4: styled("h4")({}),
  h5: styled("h5")({}),
  h6: styled("h6")({})
};

export default Heading;
