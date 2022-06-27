import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Foo = () => {
  return <Wrapper>Hello</Wrapper>;
};

const Wrapper = styled(Box)({
  backgroundColor: "hotpink",
});
