import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
  position: relative;
  border-radius: 16px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  font-weight: 100;
  font-size: 2rem;
  color: #fff;
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: center;

  &:focus {
    outline: none;
    color: #000;
  }
`;

export const SearchOptionsContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 1);
  border-radius: 0 0 16px 16px;
`;

export const SearchOptions = styled.p`
  font-weight: 100;
  font-size: 1.625rem;
  color: #000;
  z-index: 999;
  margin: 1rem;
`;

export const LoadingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Dot = styled(motion.span)`
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: #000;
  border-radius: 50%;
  margin: 0 0.625rem;
`;
