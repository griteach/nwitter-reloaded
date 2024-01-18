import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-size: 24px;
`;

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Text>
        <h1>loading.....</h1>
      </Text>
    </Wrapper>
  );
}
