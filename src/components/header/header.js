import './header.css'
/*==== IMAGES ====*/
import Menu_Header from './image/svgexport-4.svg'
import Logo_Header from './image/svgexport-5.svg'
import Searche_Header from './image/svgexport-6.svg'
import Audio_Header from './image/svgexport-7.svg'
import Camera_Header from './image/svgexport-8.svg'
import Matriz_Header from './image/svgexport-9.svg'
import Cine_Header from './image/svgexport-10.svg'
import Avatar_Header from './image/profileavatar.png'

function Header(){
return(
    <div className='header_dad'>
        <img src={Menu_Header} className='img_menu' />
        <img src={Logo_Header} className='img_logo'/>
        <input type="text" placeholder='Pesquisar' className='input'/>
        <button>
            <img src={Searche_Header}/>
        </button>
        <div className='circle'>
            <img src={Audio_Header}/>
        </div>
        <img src={Camera_Header} className='camera'/>
        <img src={Matriz_Header} className='matriz'/>
        <img src={Cine_Header} className='cine'/>
        <img src={Avatar_Header} className='avatar'/>
    </div>
)
}
export default Header