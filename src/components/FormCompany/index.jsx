import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormCompany = () => {
  const navigate = useNavigate();

  const [social, setSocial] = useState("");
  const [fantasyname, setFantasyName] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [email, setEmail] = useState("");
  const [CEP, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [complement, setComplement] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleChangeSocial = (event) => {
    const { value } = event.target;
    setSocial(value);
  };

  const handleChangeFantasy = (event) => {
    const { value } = event.target;
    setFantasyName(value);
  };

  const handleChangeCNPJ = (event) => {
    const { value } = event.target;
    setCNPJ(value);
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleChangeCEP = (event) => {
    const { value } = event.target;
    setCEP(value);
  };

  const handleChangeAddress = (event) => {
    const { value } = event.target;
    setAddress(value);
  };

  const handleChangeNumber = (event) => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleChangeDistrict = (event) => {
    const { value } = event.target;
    setDistrict(value);
  };

  const handleChangeCity = (event) => {
    const { value } = event.target;
    setCity(value);
  };

  const handleChangeComplement = (event) => {
    const { value } = event.target;
    setComplement(value);
  };

  const handleChangeLatitude = (event) => {
    const { value } = event.target;
    setLatitude(value);
  };

  const handleChangeLongitude = (event) => {
    const { value } = event.target;
    setLongitude(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.target.checkValidity();

    await fetch(
      'http://localhost:3333/empresas',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "social": social,
          "fantasy_name": fantasyname,
          "CNPJ": CNPJ,
          "email": email,
          "CEP": CEP,
          "address": address,
          "number": number,
          "district": district,
          "city": city,
          "complement": complement,
          "coordinates": [latitude, longitude]
        })
      }
    );
    alert("Empresa cadastrada com sucesso!")
    navigate("/map")
  };
  return (
    <>
      <div className="containerLog">
        <form className="formLog" onSubmit={handleSubmit}>
          <label>Razão social:</label>
          <input
            type="text"
            name="social"
            value={social}
            onChange={handleChangeSocial}
            placeholder="Digite a razão social"
            required
          ></input>

          <label>Nome fantasia:</label>
          <input
            type="text"
            name="fantasyname"
            value={fantasyname}
            onChange={handleChangeFantasy}
            placeholder="Digite o nome fantasia"
            required
          ></input>

          <label>CNPJ:</label>
          <input
            type="text"
            name="CNPJ"
            value={CNPJ}
            onChange={handleChangeCNPJ}
            placeholder="Digite o CNPJ"
            required
          ></input>

          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Digite o email da empresa"
            required
          ></input>

          <label>CEP:</label>
          <input
            type="text"
            name="CEP"
            value={CEP}
            onChange={handleChangeCEP}
            placeholder="Digite o CEP da empresa"
            required
          ></input>

          <label>Endereço:</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChangeAddress}
            placeholder="Digite o endereço"
            required
          ></input>

          <label>Número:</label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChangeNumber}
            placeholder="Digite o número"
            required
          ></input>

          <label>Bairro:</label>
          <input
            type="text"
            name="district"
            value={district}
            onChange={handleChangeDistrict}
            placeholder="Digite o bairro"
            required
          ></input>

          <label>Cidade:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChangeCity}
            placeholder="Digite a cidade"
            required
          ></input>

          <label>Complemento:</label>
          <input
            type="text"
            name="complement"
            value={complement}
            onChange={handleChangeComplement}
            placeholder="Digite o complemento"
            required
          ></input>

          <label>Latitude:</label>
          <input
            type="number"
            name="latitude"
            value={latitude}
            onChange={handleChangeLatitude}
            placeholder="Digite a latitude"
            required
          ></input>

          <label>Longitude:</label>
          <input
            type="number"
            name="longitude"
            value={longitude}
            onChange={handleChangeLongitude}
            placeholder="Digite a longitude"
            required
          ></input>

          <input className="sendLog" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default FormCompany;
