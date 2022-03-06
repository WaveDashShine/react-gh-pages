// import css / images up here
import MenuBar from "./menuBar";
import logo from './logo.svg'

function Header() {
    return (
        <div className="bg-slate-700">
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
                <p className="underline">
                    Header text testing...
                </p>
            </header>
        </div>
    );
};

export default Header; 