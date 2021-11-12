import { useState } from "react";
import { useNavigate } from "react-router-dom"

const FormLogin = () => {

const navigate = useNavigate();
const [user, setUser] = useState("");
const [password, setPassword] = useState("");

  const handleChangeUser = (event) => {
    const { value } = event.target;
    setUser(value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.checkValidity();
    let response = await fetch('http://localhost:3333/users')
    let login = await response.json()
    if (login[0].user !== user) {
        console.log(login[0].user)
        alert("Usuário incorreto.");
        return
    }
    if (login[0].password === password) {
        alert("Login feito!");
        navigate("/map");
    }
    else {
        alert("Sua senha está incorreta.")
    }
}    
    return (
      <>
        <div className="containerLog">
          <form className="formLog" onSubmit={handleSubmit}>
            <label>Usuário:</label>
            <input
              type="text"
              name="user"
              value={user}
              onChange={handleChangeUser}
              placeholder="Digite seu usuário"
              required
            ></input>

            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
              placeholder="Digite sua senha"
              required
            ></input>

            <input className="sendLog" type="submit" value="Enviar" />
          </form>
        </div>
      </>
    );
}

export default FormLogin;