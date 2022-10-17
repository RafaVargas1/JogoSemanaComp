import "./Acoes.css";

export default function Acoes() {
    return (
        <section className="Acoes">
            <Acao 
                nome="Cortar Madeira" 
                trocas={[{recurso: "madeira", valor: 1}]}
            />
            <Acao 
                nome="Vender Madeira" 
                trocas={[
                    {recurso: "madeira", valor: -1}, 
                    {recurso: "dinheiro", valor: 1}
                ]}
            />
            <Acao 
                nome="Cortar Madeira" 
                trocas={[{recurso: "madeira", valor: 1}]}
            />
            <Acao 
                nome="Cortar Madeira" 
                trocas={[{recurso: "madeira", valor: 1}]}
            />
            <Acao 
                nome="Cortar Madeira" 
                trocas={[{recurso: "madeira", valor: 1}]}
            />
        </section>
    );
}

function Acao( props ) {
    return (
        <div className="Acao">
            <button> {props.nome} </button>
            <p>
                {props.trocas[0].valor + " "
                + props.trocas[0].recurso}
            </p>
        </div>
    );
}