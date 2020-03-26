import styled from "styled-components";
import treesLeft from "../../assets/illustrations/trees-left.svg";
import treesRight from "../../assets/illustrations/trees-right.svg";
import houseOne from "../../assets/illustrations/house-1.svg";
import houseTwo from "../../assets/illustrations/house-2.svg";
import noticeboard from "../../assets/illustrations/noticeboard.svg";

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
  .illustration_1,
  .illustration_2,
  .illustration_3 {
    position: absolute;
  }
  .illustration_1 {
    background-image: url(${houseOne});
  }
  .illustration_2 {
    background-image: url(${houseTwo});
  }
  .illustration_3 {
    background-image: url(${noticeboard});
  }
`;
