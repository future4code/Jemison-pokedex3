import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;

`;
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-right: 1px solid black;
  min-height: 250px;

`;
export const Name = styled.h2`
  color: black;
  text-transform: capitalize;
`;
export const FrontImage = styled.img``;

export const BackImage = styled.img``;

export const PowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-right: 1px solid black;
  min-height: 250px;

`;
export const TitleContainer = styled.h2`
  color:black;
`;
export const PowerDetails = styled.div`
  text-transform: capitalize;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-right: 1px solid black;
  min-height: 250px;


`;
export const Types = styled.div`
  text-transform: capitalize;
`;

export const AttackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  min-height: 250px;

`;
export const Attacks = styled.div`
  text-transform: capitalize;
`;