import '../../components/FirstBlock/FirstBlock.css'
import image from '../../assets/image.png'


function App() {
    return (
      <div className="App">
        <div className="container">
        <div className="Navbar">
          <div className="Logo">
          </div>
          <div className="Links">
            <ul>
              <li className="">Главная</li>
              <li className="">Сеансы</li>
              <li className="">Отзывы</li>
              <li className="">Контакты</li>
              <li className="">Новости</li>
              <li className="">Обо мне</li>
              <li className="">Блог</li>
            </ul>
          </div>
          <div className="Add_btn">
            <button className="btn">Записаться на сеанс</button>
          </div>
        </div>
        <div className="mainPage">
        <img src={image} alt=''/>
          <h1>Акватерапия
            RitmStyle
          </h1>
        </div>
        </div>
      </div>
    );
  }
  
  export default App;