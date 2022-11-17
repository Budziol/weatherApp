import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMain = styled(motion.main)`
  background: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
