import logo from "../assets/images/Vector.png";

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
                <p>Todo List</p>
            </div>
        </header>
    );
};

export default Header;
