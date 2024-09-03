import { useContext, useEffect, useState } from "react"
import CardPostagem from "../cardpostagem/CardPostagem"
import { useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import Postagem from "../../../model/Postagem";
import AuthContext from "../../../contexts/AuthContexts";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaPostagens() {
    // O ([]) indica que o valor inicial é um array vazio
    const [postagens,setPostagens] = useState<Postagem[]>([])

    // Usar para fazer o redirecionamento das páginas
    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    // Vai monitorar o valor do token. Se tiver um token,significa que o usuário logou na aplicação
    // Caso contrário, significa que o usuário não logou ou já fez o logout
    useEffect(() => {
        if(token === '') {
            alert('Você precisa estar logado');
            navigate('/')
        }
    },[token]);

    async function buscarPostagens(){
        try {
            await buscar('/postagens',setPostagens, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error:any) {
            if(error.toString().includes('403')) {
                alert('O token expirou,favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens();
    },[postagens.length])

    return (
        <>
        {postagens.length === 0 && (
          < DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {postagens.map((postagem) => (
             <CardPostagem key={postagem.id} post={postagem} />
          ))}
        </div>
      </>
    );
}

export default ListaPostagens