import Produto from "./Produto"

export default function Layout(props)
{
    return (
    <div className="bg-white">
        <div className="
            mx-auto max-w-4xl px-4 py-16 
            sm:px-6 sm:py-16 
            lg:max-w-7xl lg:px-8
        ">
            <h1 className="text-3xl font-bold text-gray-500 text-center">LISTA DE PRODUTOS</h1>
            <Produto produtos={props.produtos}></Produto>
        </div>
    </div>
    )
}