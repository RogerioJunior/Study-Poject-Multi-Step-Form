import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useForm } from "../../contexts/FormContext";
import Theme from "../../components/Theme";
import { SelectOption } from "../../components/SelectOptions";

import * as C from "./styles";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { data, setData } = useForm();

  const [inputLevel, setInputLevel] = useState(data.level);

  useEffect(() => {
    if (data.name === "") {
      navigate("/");
    } else {
      setData({ ...data, currentStep: 2 });
    }
  }, []);

  const handleNextStep = () => {
    if (inputLevel !== "") {
      setData({ ...data, level: inputLevel });
      navigate("/step3");
    } else {
      alert("Preencha os dados!");
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{data.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="😬"
          selected={inputLevel === 0}
          onClick={() => setInputLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais "
          icon="😬"
          selected={inputLevel === 1}
          onClick={() => setInputLevel(1)}
        />

        <Link className="backButton" to="/">Voltar</Link>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};
