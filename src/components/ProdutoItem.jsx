export default function ProdutoItem(props){
    return (

        <a className="group" title={props.nome}>
            <div className="
                aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 
                xl:aspect-h-8 xl:aspect-w-7
                ">
                <img
                    src={props.url}
                    alt="Imagem do produto"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />

            </div>
            <h3 className="mt-1 text-md font-medium text-gray-900 text-center">{props.nome}</h3>
            <p className="mt-1 text-md font-bold text-center text-orange-500"> {props.valor}</p>
            <p className="mt-1 text-sm text-gray-700 limitaTamanhoExibido" title={props.descricao}>{props.descricao}</p>
        </a>
    )
}