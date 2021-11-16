import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import URL_SERVER from "../../util/servers";

const FormProduct = () => {
  useEffect(() => {
    async function getSupplier() {
      const result = await fetch(`${URL_SERVER}/fornecedores`);
      const data = await result.json();
      setSuppliers(data);
    }

    getSupplier();

    async function getGroup() {
      const result = await fetch(`${URL_SERVER}/categorias`);
      const data = await result.json();
      setGroups(data);
    }

    getGroup();
  }, []);

  const navigate = useNavigate();
  const [URLimage, setURLImage] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [group, setGroup] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [groups, setGroups] = useState([]);

  const handleChangeURLimage = (event) => {
    const { value } = event.target;
    setURLImage(value);
  };

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeCost = (event) => {
    const { value } = event.target;
    setCost(value);
  };

  const handleChangeDescription = (event) => {
    const { value } = event.target;
    setDescription(value);
  };

  const handleChangeSupplier = (event) => {
    const { value } = event.target;
    setSupplier(value);
  };

  const handleChangeGroup = (event) => {
    const { value } = event.target;
    setGroup(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.checkValidity();

    await fetch(
      `${URL_SERVER}/produtos`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            "URLimage": URLimage,
            "name": name,
            "cost": cost,
            "description": description,
            "supplier": supplier,
            "group": group,
          })
        }
      );
      alert("Produto cadastrado com sucesso!")
      navigate("/listproducts")
  };
  return (
    <>
      <div className="containerLog">
        <form className="formLog" onSubmit={handleSubmit}>
         {URLimage && <img className="img-product" src={URLimage} alt="Coloque a URL correta da imagem" />}
          <label>URL da imagem:</label>
          <input
            type="text"
            name="URLimage"
            value={URLimage}
            onChange={handleChangeURLimage}
            placeholder="Digite a URL da imagem do produto"
            required
          ></input>

          <label>Nome do produto:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Digite sua senha"
            required
          ></input>

          <label>Valor unitário:</label>
          <input
            type="number"
            name="cost"
            value={cost}
            onChange={handleChangeCost}
            placeholder="Digite o valor unitário"
            required
          ></input>

          <label>Descrição:</label>
          <textarea
            rows={5}
            value={description}
            onChange={handleChangeDescription}
            placeholder="Descreva o produto"
          />

          <label>Fornecedor:</label>
          <select
            name="supplier"
            value={supplier}
            onChange={handleChangeSupplier}
          >
            <option value="" selected disabled>
              Selecione..
            </option>
            {suppliers.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>

          <label>Grupo:</label>
          <select name="group" value={group} onChange={handleChangeGroup}>
            <option value="" selected disabled>
              Selecione..
            </option>
            {groups.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>

          <input className="sendLog" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default FormProduct;
