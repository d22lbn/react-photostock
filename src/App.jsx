import './Header.css'
import arrow from './arrow.svg'

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
                            <span>
                                <img src={arrow}/>
                            </span>
                        </button>
                    </nav>    
                </div>
            </header>



            <main>
                <div className="computer device">
                    <div className="device__inner">
                        <div className="device__item item1"></div>
                        <div className="device__items">
                            <div className="device__item item2"></div>
                            <div className="device__item item3"></div>
                            <div className="device__item item4"></div>
                            <div className="device__item item5"></div>    
                        </div>
                    </div>
                </div>
                <div className="phone device">
                    <div className="device__inner">
                        <div className="device__item phone__item1"></div>
                        <div className="device__items phone__items">
                            <div className="device__item phone__item2"></div>
                            <div className="device__item phone__item3"></div>
                            <div className="device__item phone__item4"></div>
                            <div className="device__item phone__item5"></div>
                            <div className="device__item phone__item6"></div>
                            <div className="device__item phone__item7"></div>
                        </div>
                        <div className="phone__footer"></div>
                    </div>
                </div>
                <div className="title">Размещайте и приобретайте красивые фотографии в несколько кликов</div>
                <div className="search">
                    <span>Найти</span>
                    <span>
                        <img src={arrow}/>
                    </span>
                </div>
            </main>
            <footer></footer>

        </div>
    );
}

export default App;
