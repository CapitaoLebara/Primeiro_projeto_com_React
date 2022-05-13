import './menu.css'
/*==== IMAGE ====*/
import Home_menu from './image/svgexport-12.svg'
import Explore_menu from './image/svgexport-13.svg'
import Shot_menu from './image/svgexport-14.svg'
import Insc_menu from './image/svgexport-15.svg'
import Bibli_menu from './image/svgexport-16.svg'
function Menu(){
    return(
        <div className='menu_dad'>
            <div className='content '>
                <img src={Home_menu} />
                <h5>Início</h5>
            </div>
            <div className='content  _space'>
                <img src={Explore_menu} />
                <h5>Explorar</h5>
            </div>
            <div className='content  _space'>
                <img src={Shot_menu} />
                <h5>Shorta</h5>
            </div>
            <div className='content  _space'>
                <img src={Insc_menu} />
                <h5>Inscrições</h5>
            </div>
            <div className='content  _space'>
                <img src={Bibli_menu} />
                <h5>Biblíoteca</h5>
            </div>
        </div>
    )
}
export default Menu