import styled from "styled-components";

export const ForecastSection = styled.section`
  margin: 1rem;
`;

export const ForecastCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ForecastCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  max-width: 180px;
  justify-content: space-between;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.8px);
  -webkit-backdrop-filter: blur(2.8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ForecastCardTemp = styled.p`
  font-weight: 300;
  font-size: 1.625rem;
  margin-top: 1rem;
`;

export const ForecastCardDay = styled.h2`
  font-weight: 300;
  font-size: 1.625rem;
  margin-bottom: 1rem;
`;
