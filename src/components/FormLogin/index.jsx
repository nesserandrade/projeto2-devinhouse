import { useState } from "react";
import { useNavigate } from "react-router-dom";
import URL_SERVER from "../../util/servers";

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
    try {
      event.preventDefault();
      event.target.checkValidity();
      let response = await fetch(`${URL_SERVER}/users`);
      let login = await response.json();
      if (login[0].user !== user) {
        alert("Usuário incorreto.");
        return;
      }
      if (login[0].password === password) {
        alert("Login feito!");
        navigate("/map");
      } else {
        alert("Sua senha está incorreta.");
      }
    } catch (error) {
      alert("Ocorreu um erro na sua requisição");
    }
  };
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

          <input className="sendLog" type="submit" value="Logar" />
        </form>
      </div>
    </>
  );
};

export default FormLogin;
