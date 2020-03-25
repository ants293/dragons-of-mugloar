import styled from "styled-components";
import treesLeft from "../../assets/illustrations/trees-left.svg";
import treesRight from "../../assets/illustrations/trees-right.svg";

export const Map = styled.div`
  position: relative;
  height: 100%;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 500px;
  }
  &:before {
    left: 0;
    background-image: url(${treesLeft});
    background-position: center right;
  }
  &:after {
    right: 0;
    background-image: url(${treesRight});
    background-position: center left;
  }
`;
