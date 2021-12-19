import React, {useState} from 'react'
import hardDrive from '../resources/hard-drive.png'
import fileText from '../resources/file-text.png'
import printer from '../resources/printer.png'
import  upcScan from  '../resources/upc-scan.png'
const SideBar = () => {
    const [keepWidth, setKeepWidth] = useState(false);
    return (
        <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-secondary sidebar collapse show"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={hardDrive} alt="Оборудование" />
                Оборудование
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={fileText} alt="Ведомости" />
                Ведомости
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <img src={upcScan} alt="Оборудование" />
                Формирование штрих-кодов
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={printer} alt="Оборудование" />
                Печать штрих кодов
              </a>
            </li>

          </ul>
        </div>
      </nav>
    )
}

export default SideBar
