import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import FormularioTema from './components/temas/formulariotema/FormularioTema'
import ListaTemas from './components/temas/listartemas/ListaTemas'
import DeletarTema from './components/temas/deletartema/DeletarTema'
import ListaPostagens from './components/postagens/listapostagem/ListaPostagens'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem'
import FormularioPostagem from './components/postagens/formulariopostagem/FormularioPostagem'
import Perfil from './pages/perfil/Perfil'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './contexts/AuthContexts'

function App() {
  //Código Typescript
  return (
  // Código TSX - HTML e CSS
  <>
  <AuthProvider>
    <ToastContainer/>
    <BrowserRouter>
          <Navbar/>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path = "/" element={<Login/>}/>
              <Route path = "/home" element={<Home/>}/>
              <Route path = "/cadastro" element={<Cadastro/>}/>
              <Route path = "/login" element={<Login/>}/>
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
  </AuthProvider>
  </>
  )
}

export default App