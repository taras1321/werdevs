import { useSelector } from 'react-redux'
import Calendar from '../../components/Calendar/Calendar'
import Main from '../../components/Main/Main'
import Popup from '../../components/Popup/Popup'
import './Home.scss'

const Home = () => {
  const showPopup = useSelector((state) => state.showPopup)

  return (
    <div className="home">
      <Main />
      <Calendar />
      {showPopup ? <Popup /> : null}
    </div>
  )
}

export default Home
