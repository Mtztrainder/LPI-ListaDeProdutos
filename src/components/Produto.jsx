import ProdutoItem from "./ProdutoItem"

export default function Produto(props){
    let itens=[]
    let titulo = ""

    if (props.produtos == undefined || props.produtos.length == 0)
        titulo = "Nenhum produto encontrado."
    else if (props.produtos.length > 0){
        titulo = `Total de ${props.produtos.length} produto${props.produtos.length > 1 ? "s" : ""}`
        props.produtos.forEach(e =>{
            itens.push(
                <ProdutoItem nome={e.nome} descricao={e.descricao} url={e.url} valor={e.valor}></ProdutoItem>
            )
        })
    }

    return (
        <div>
            <h2 className="sr-only">Listagem de Produtos</h2>
            <h1 className="
                text-2xl text-left font-bold text-gray-700 mb-2 pb-4
                border-b-2"
            >{titulo}</h1>

            <div className="
                grid grid-cols-1 gap-x-6 gap-y-10 
                sm:grid-cols-2 
                lg:grid-cols-4 
                xl:grid-cols-5 xl:gap-x-8
            ">
                {itens}
            </div>
        </div>
    )
}