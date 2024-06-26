import styled from "@emotion/styled";
import DataView from "components/DataView";
import InputContainer from "components/InputContainer";
import { TodoListContextProvider } from "contexts/TodoListContext";

const WrapStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

function App() {
  return (
    <WrapStyle>
      <TodoListContextProvider>
        <DataView />
        <InputContainer />
      </TodoListContextProvider>
    </WrapStyle>
  );
}

export default App;
