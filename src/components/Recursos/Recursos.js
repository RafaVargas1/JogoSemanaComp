import './Recursos.css'

import { GiWoodPile, GiHouse, GiCoins} from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { BiStore } from 'react-icons/bi';



export default function Recursos(){
    return (
        <section className='Recursos'>
            <Recurso name={"Madeira"} icon={<GiWoodPile size={30}/>} />
            <Recurso name={"Moedas"} icon={<GiCoins size={30}/>} />
            <Recurso name={"Casa"} icon={<GiHouse size={30}/>} />
            <Recurso name={"Trabalhador"} icon={<GrUserWorker size={30}/>} />
            <Recurso name={"Comércio"} icon={<BiStore size={30}/>} />
        </section>
    )
};

function Recurso( props ){
    return (
        <section className='Recurso'>  
            <h1> {props.name} </h1>
            <span> {props.icon} </span>
            <p>0</p>
        </section>     
    )
}