import { system } from "styled-system";
import styled from "@emotion/styled-base";

const Heading = {
  h1: styled("h1")({
    fortSize: [5, 6]
  }),
  h2: styled("h2")({
    fontSize: 30
  }),
  h3: styled("h3")({
    fontSize: 25
  }),
  h4: styled("h4")({}),
  h5: styled("h5")({}),
  h6: styled("h6")({})
};

export default Heading;
