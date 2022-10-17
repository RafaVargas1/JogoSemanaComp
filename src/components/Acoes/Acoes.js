import "./Acoes.css";

export default function Acoes( props ) {


    return (
        <section className="Acoes">
            <Acao 
                nome="Cortar Madeira" 
                id="cortarBtn"
                trocas={[{recurso: "madeira", valor: 1}]}
                handleClick={props.handleClick}
            />
            <Acao 
                nome="Vender Madeira" 
                id="venderBtn"
                trocas={[
                    {recurso: "madeira", valor: -1}, 
                    {recurso: "ouro", valor: 1}
                ]}
                handleClick={props.handleClick}
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
    const trocas = props.trocas;
    const listaTrocas = [];
    let i = 0;
    for (const troca of trocas) {
        let texto = "";
        const recurso = troca.recurso;
        const valor = troca.valor;
        //  Adiciona sinal de + para
        // valores positivos
        if (valor > 0) {
            texto += "+";
        }
        texto += valor + " " + recurso;
    }

    return (
        <div className="Acao">
            <button id={props.id} onClick={props.handleClick}> {props.nome} </button>
            <p>
                {props.trocas[0].valor + " "
                + props.trocas[0].recurso}
            </p>
        </div>
    );
}