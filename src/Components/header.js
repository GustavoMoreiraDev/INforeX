import {FiSearch } from 'react-icons/fi'
const Header = () => {
    
    return (
        <header className="sessao-header">
            
            <form>
                <input type="text" placeholder="Buscar por Paridade" id="search"/>
                <div className='icon'>
                    <a href='#'><FiSearch/></a>
                </div>
            </form>

            <span className="menu-header">
                <a href="#">Inicio</a>
                <a href="sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </span>
           
            <h1>Logo</h1>

        </header>
    )
}

export default Header;