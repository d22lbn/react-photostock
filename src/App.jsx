import './Header.css'

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="header__inner">
                    <a href="#" className="header__title big">фотосток</a>
                    <nav className="header__nav">
                        <a href="#">Популярное</a>
                        <a href="#">Найти</a>
                        <a href="#">Рейтинг</a>
                        <a href="#">Аукцион</a>
                        <button>
                            <span>Войти</span>
                            <span>></span>
                        </button>
                    </nav>    
                </div>
            </header>
            <main></main>
            <footer></footer>

        </div>
    );
}

export default App;
