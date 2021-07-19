import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import {Container, SubContainer, Paragrafo} from './styles';
import InputMask from 'react-input-mask'


export const useForm = (initialState) => { //Custom Hook
  const [form, setForm] = useState(initialState)
  
  const onChange = (event) => {
    const key = event.target.name
    setForm( {...form, [key]: event.target.value})
  }

  const resetForm = () => {
    setForm(initialState)
  }
  return [form, onChange, resetForm]
}

  function Formulario () {

    const [form, onChange, resetForm] = useForm({name: '', birth: '', cpf:'',  phone: '', email: '', cep:'', city: ''})
    
    function onBlurCep(ev) {
      const {value} = ev.target;
      if(value?.length !== 8){
        return
      }

      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    
    const onSubmitForm = (event) => {
      event.preventDefault();
      console.log(form);
      resetForm()

      alert('Dados cadastrados')
    };

    return(
      <Container>
        <Paragrafo>Cadastro</Paragrafo>
            <form onSubmit={onSubmitForm}>
              <SubContainer>
                <TextField  
                  id="outlined-basic"
                  type={"text"} 
                  label="Nome Completo" 
                  variant="outlined"
                  min="4"
                  name={"name"}
                  onChange={onChange}
                  value={form.name}
                  required
                />
              </SubContainer>
              <SubContainer>
                <InputMask 
                   id="outlined-basic"
                   type={"text"} 
                   label="Data de Nascimento"
                   onChange={onChange}
                   placeholder="11/11/1111"
                   mask="99/99/9999"
                   variant="outlined" 
                   name={"birth"}
                   value={form.birth}
                   required
                   >
                    {<TextField/>}
                   </InputMask>
              </SubContainer>
              <SubContainer>
              <InputMask
                  id="outlined-basic"
                  type={"text"} 
                  label="CPF" 
                  variant="outlined"
                  name={"cpf"}
                  mask="999.999.999-99"
                  onChange={onChange}
                  value={form.cpf}                  
                  // inputProps= {{ pattern: "\d{3}\.\d{3}\.\d{3}-\d{2}"}}
                  required
              >
                {<TextField/>}
              </InputMask>
              </SubContainer>
              <SubContainer>
                <InputMask 
                  id="outlined-basic"
                  type={"text"} 
                  label="Telefone Principal" 
                  variant="outlined" 
                  name={"phone"}
                  mask="(99) 99999-9999"
                  onChange={onChange}
                  value={form.phone}
                  inputProps= {{ pattern: "(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})"}}
                  required
                  >
                    {<TextField/>}
                  </InputMask>
              </SubContainer>
              <SubContainer>
                <TextField 
                  id="outlined-basic"
                  forHtml="email" 
                  type="text" 
                  label="E-mail" 
                  variant="outlined"
                  name={"email"}
                  onChange={onChange}
                  value={form.email}
                  placeholder="exemplo@gmail.com"
                  inputProps= {{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}}
                  required
                />
              </SubContainer>
              <SubContainer>
              <InputMask 
                  id="outlined-basic"
                  type={"text"} 
                  label="CEP" 
                  variant="outlined" 
                  name={"cep"}
                  mask="99.999-999"
                  onChange={onChange}
                  value={form.cep}
                  onBlur={onBlurCep}
                  required
                  >
                    {<TextField/>}
                  </InputMask>
              </SubContainer>
              <SubContainer>
                <TextField 
                    id="outlined-basic" 
                    type="text" 
                    label="Município" 
                    variant="outlined"
                    name={"city"}
                    onChange={onChange}
                    value={form.city}
                    required
                  />
              </SubContainer>
              <button>Enviar</button>
            </form>
      </Container>
    );
}
  export default Formulario

