import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as C from './styles';

import { useForm } from '../../contexts/FormContext'

import Theme from '../../components/Theme';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { data, setData } = useForm();

    const [inputEmail, setInputEmail] = useState(data.email);
    const [inputGithubUrl, setInputGithubUrl] = useState(data.githubUrl);

    useEffect(() => {
        if (data.name === "") {
            navigate("/");
          } else {
            setData({ ...data, currentStep: 3 });
          }
     }, []);
  

    const handleNextStep = async () => {
        if(inputEmail !== "" && inputGithubUrl !== "") {
            await setData({ ...data, email: inputEmail, githubUrl: inputGithubUrl});
            console.log(data);
        }else {
            alert("Preencha os dados!");
        }
        
    }

    return (
        <Theme>
        <C.Container>
            <p>Passo 3/3</p>
            <h1>Legal {data.name}, onde te achamos?</h1>
            <p>Preencha os seus dados parar conseguirmos entrar em contato.</p>

            <hr />

            <label htmlFor="">Qual seu email ?
            <input type="text" autoFocus onChange={(e) => setInputEmail(e.target.value)} value={inputEmail}/>
            </label>

            <label htmlFor="">Qual seu GitHub ?
            <input type="url" onChange={(e) => setInputGithubUrl(e.target.value)} value={inputGithubUrl}/>
            </label>

            <Link className="backButton" to="/step2">Voltar</Link>
            <button onClick={handleNextStep}>Finalizar Cadastro</button>
        </C.Container>
        </Theme>
    );
}
