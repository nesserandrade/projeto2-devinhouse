import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import URL_SERVER from "../../util/servers";

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
    try {
      event.preventDefault();
      event.target.checkValidity();

      if (!social) {
        alert('Nome da empresa é obrigatório')
        return;
      }

      if (!fantasyname) {
        alert('Nome fantasia é obrigatório')
        return;
      }

      if (!CNPJ) {
        alert('CNPJ é obrigatório')
        return;
      }

      if (!email) {
        alert('Email é obrigatório')
        return;
      }

      if (!CEP) {
        alert('CEP é obrigatório')
        return;
      }
      
      if (!address) {
        alert('Endereço é obrigatório')
        return;
      }

      if (!number) {
        alert('Número é obrigatório')
        return;
      }

      if (!district) {
        alert('Bairro é obrigatório')
        return;
      }

      if (!city) {
        alert('Cidade é obrigatória')
        return;
      }

      if (!complement) {
        alert('Complemento é obrigatório')
        return;
      }

      if (!latitude) {
        alert('Latitude é obrigatória')
        return;
      }

      if (!longitude) {
        alert('Longitude é obrigatória')
        return;
      }

      await fetch(`${URL_SERVER}/empresas`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          social: social,
          fantasy_name: fantasyname,
          CNPJ: CNPJ,
          email: email,
          CEP: CEP,
          address: address,
          number: number,
          district: district,
          city: city,
          complement: complement,
          coordinates: [latitude, longitude],
        }),
      });
      alert("Empresa cadastrada com sucesso!");
      navigate("/map");
    } catch (error) {
      alert("Ocorreu um erro na sua requisição.");
    }
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
          <Link to="/map">
            <button className="sendLog">Cancelar</button>
          </Link>
          <input className="sendLog" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default FormCompany;
