import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {
    let data = new Date().getFullYear()
  return (
    <div className=" flex justify-center bg-indigo-900 text-center text-white py-4">
        <div>
            <p className="font-bold text-lg">Blog Pessoal | Copyright: {data} </p>
            <p className="text-sm">Acesse nossas redes sociais</p>
            <div className="flex justify-center">
                <GithubLogo size={48}/>
                <LinkedinLogo size={48} />
            </div>
        </div>
    </div>
  )
}

export default Footer