import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem;
  row-gap: 1rem;
  overflow-x: hidden;
`;

export const StyledHeading = styled.h1`
  font-weight: 200;
  font-size: 10rem;
  position: relative;
  width: fit-content;
`;

export const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 2.5rem;
`;

export const StyledParagraph = styled(motion.p)`
  font-weight: 100;
  font-size: 1.625rem;
`;

export const StyledDateP = styled(StyledParagraph)`
  font-size: 2.25rem;
`;

export const StyledDetailsP = styled(StyledParagraph)`
  font-size: 1.5rem;
`;

export const FlexContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.25rem;
  align-items: center;
  margin: ${(props) => props.margin};
  justify-content: center;
`;

export const StyledLine = styled.span`
  width: 1px;
  background-color: #fff;
  height: 16px;
  border-radius: 1px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DetailsItemWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  justify-content: center;
  @media (max-width: 340px) {
    width: 180px;
    justify-content: flex-start;
  }
`;

export const TempCounterContainer = styled.div`
  display: flex;
`;
