import { useContext, useEffect, useState } from 'react';
import CardTemas from '../cardtemas/CardTemas';
import Tema from '../../../model/Tema';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import { DNA } from 'react-loader-spinner';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import AuthContext from '../../../contexts/AuthContexts';

function ListaTemas() {
  const navigate = useNavigate();
  const [temas,setTemas] = useState<Tema[]>([]);
  const {handleLogout,usuario} = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas(){
    try {
      await buscar('/temas',setTemas,{
        headers: {Authorization: token}
      });
    } catch(error:any){
        if(error.toString().includes('401')) {
          handleLogout();
        }
    }
  }
  // Monitora o token
  useEffect(() => {
    if(token === '') {
      ToastAlerta('Você precisa estar logado','info');
      navigate('/')
    }
  },[token])

  // Monitora o Estado Temas
  useEffect(() => {
    buscarTemas();
  },[temas.length])

  return (
    <>
     {
        temas.length === 0 && (<DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto" />
        )}
    <div className="flex justify-center w-full my-4">
    <div className="container flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <CardTemas key={tema.id} tema={tema}  />
            ))}
          
      </div>
    </div>
  </div>
  </>
  )
}

export default ListaTemas