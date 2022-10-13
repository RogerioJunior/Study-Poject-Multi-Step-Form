import { useForm } from '../../contexts/FormContext'

import Header from "../Header";
import SideBarItem from "../SideBarItem";

import * as C from "./styles";

const Theme = ({ children }) => {

  const { data } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={data.currentStep === 1}
            />
                        <SideBarItem
              title="Profissional"
              description="Seu nivel"
              icon="book"
              path="/step2"
              active={data.currentStep === 2}
            />
                        <SideBarItem
              title="Contatos"
              description="Como te Achar"
              icon="mail"
              path="/step3"
              active={data.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
