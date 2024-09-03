import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContexts'
import FormularioTema from './components/temas/formtema/FormTema'
import ListaTemas from './components/temas/listartemas/ListaTemas'
import DeletarTema from './components/temas/deletartema/DeletarTema'
import ListaPostagens from './components/postagens/listapostagem/ListaPostagens'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem'
import FormularioPostagem from './components/postagens/formulariopostagem/FormularioPostagem'
import Perfil from './pages/perfil/Perfil'


function App() {
  // Código TypeScript

  return (
    // Código TSX => HTML + CSS
    <>
      {/* 
          Envolvemos todos os Componentes inseridos no Componente App, 
          com o Componente AuthProvider. 
          Desta forma, todos os Componentes dentro dele, terão acesso 
          aos Estados e Funções guardados na context.
      */}
      <AuthProvider>
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