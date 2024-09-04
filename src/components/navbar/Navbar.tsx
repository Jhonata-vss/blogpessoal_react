import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ToastAlerta } from "../../utils/ToastAlerta";
import AuthContext from "../../contexts/AuthContexts";

function Navbar() {
  const navigate = useNavigate();
  const {handleLogout,usuario} = useContext(AuthContext)
  
  function logout(){
    handleLogout();
    ToastAlerta("Usuário foi desconectado com sucesso!","sucesso");
    navigate("/");
  }

  let component: ReactNode;

  if(usuario.token !== "") {
    component = (
      <div className="flex justify-between  bg-indigo-900 px-20 py-3 text-white">
        <div className="text-2xl font-bold uppercase">
            <Link to='/home'>Blog Pessoal</Link>
        </div>
        <div>
            <ul className="flex *:px-1">
              <li className="hover:underline cursor-pointer"><Link to ='/postagens'>Postagens</Link></li>
              <li className="hover:underline cursor-pointer"><Link to ='/temas'>Tema</Link></li>
              <li className="hover:underline cursor-pointer"><Link to ='/cadastroTema'>Cadastrar Tema</Link></li>
              <li className="hover:underline cursor-pointer"><Link to ='/perfil'>Perfil</Link></li>
              <li className="hover:underline cursor-pointer"><Link to ='' onClick={logout}>Sair </Link></li>
            </ul>
        </div>
     </div>
    )
  }

  return (
    <>
      {component}
    </>
  )
}

export default Navbar