import Popup from "reactjs-popup"
import FormularioPostagem from "../formulariopostagem/FormularioPostagem"
import './ModalPostagem.css'

import 'reactjs-popup/dist/index.css';

function ModalPostagem() {
  return (
    <>
      <Popup 
        trigger={<button className='border rounded p-3 hover:bg-white hover:text-indigo-800'>Nova postagem </button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  )
}

export default ModalPostagem