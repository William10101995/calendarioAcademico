import "./App.css";
import Logo from "./images/LogoSoloBlanco.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord, FaCircle, FaCloudDownloadAlt } from "react-icons/fa";
import Calendar from "rc-year-calendar";
import "rc-year-calendar/locales/rc-year-calendar.es.js";
import { useState } from "react";
import Modal from "./Modal";
import { dataSource } from "./datos";
import { Boton, Contenido } from "./styles";

function App() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estado, cambiarEstado] = useState({});

  return (
    <div className="App">
      <div className="header">
        <h1>Calendario Academico</h1>
      </div>
      <div className="body">
        <div className="colizq">
          <h2>Referencias</h2>
          <div className="rayita"></div>
          <div className="referencias">
            <ul className="referencia">
              <li>
                <span className="manito1">
                  {" "}
                  <FaCircle />{" "}
                </span>{" "}
                Inicio / Fin de Clases
              </li>
              <li>
                <span className="manito2">
                  {" "}
                  <FaCircle />{" "}
                </span>{" "}
                Feriados
              </li>
              <li>
                <span className="manito3">
                  {" "}
                  <FaCircle />{" "}
                </span>{" "}
                Mesas de Examenes
              </li>
              <li>
                <span className="manito4">
                  {" "}
                  <FaCircle />{" "}
                </span>{" "}
                Receso Invernal
              </li>
            </ul>
          </div>
          <div className="footer">
            <img src={Logo} alt="Logo" />
            <h3> Renovacion Tecnologica </h3>
            <ul className="footer-list">
              <li>
                <a
                  href="https://discord.gg/WqzsV6JXV6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rtecnologica"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaCloudDownloadAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="calendar">
          <Calendar
            language="es"
            style="background"
            dataSource={dataSource}
            year={2022}
            displayHeader={true}
            roundRangeLimits={false}
            enableContextMenu={true}
            contextMenuItems={[
              {
                text: "Ver Evento",
                click: (e) => {
                  cambiarEstadoModal1(!estadoModal1);
                  cambiarEstado(e);
                },
              },
            ]}
          />
          <Modal
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1}
            titulo={estado.name}
            mostrarHeader={true}
            mostrarOverlay={true}
            posicionModal={"center"}
            padding={"20px"}
          >
            <Contenido>
              <h1>{estado.title}</h1>
              <p>{estado.desc}</p>
              <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>
                OK
              </Boton>
            </Contenido>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;
