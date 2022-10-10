import * as C from "./styles";

import Header from "../Header";

const Theme = ({ children }) => {
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            .....
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
