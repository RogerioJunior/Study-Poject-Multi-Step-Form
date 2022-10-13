import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as C from './styles';

import { useForm } from '../../contexts/FormContext'

import Theme from '../../components/Theme';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { data, setData } = useForm();

    const [inputName, setInputName] = useState(data.name);

    useEffect(() => {
        setData({ ...data, currentStep: 1 });
     }, []);
  

    const handleNextStep = () => {
        if(inputName !== "") {
            navigate('/step2');
        }else {
            alert("Preencha os dados!");
        }
        
    }

    return (
        <Theme>
        <C.Container>
            <p>Passo 1/3</p>
            <h1>Vamos começar com o seu nome</h1>
            <p>Preencha o campo abaixo com o seu nome completo</p>

            <hr />

            <label htmlFor="">Seu nome completo
            <input type="text" autoFocus onChange={(e) => setInputName(e.target.value)} value={inputName}/>
            </label>

            <button onClick={handleNextStep}>Proximo</button>
        </C.Container>
        </Theme>
    );
}
