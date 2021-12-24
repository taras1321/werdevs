import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { closePopup } from '../../store/action'
import './Popup.scss'

function cahngeNumber(number) {
  switch (number) {
    case 1:
      return `${number}st `
    case 2:
      return `${number}nd `
    case 3:
      return `${number}rd `
    default:
      return `${number}th `
  }
}

const Popup = () => {
  const dispatch = useDispatch()

  const date = useSelector((state) => state.date)

  const [monthValue, setMonthValue] = useState(date.month)
  const [dayValue, setDayValue] = useState(
    cahngeNumber(date.day) + date.dayOfWeek
  )

  function closeHandler() {
    dispatch(closePopup())
  }

  return (
    <div className="popup-back" onClick={closeHandler}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="month-wrapper">
          <label htmlFor="month">Month</label>
          <input
            type="text"
            id="month"
            value={monthValue}
            onChange={(e) => setMonthValue(e.target.value)}
          />
        </div>

        <div className="day-wrapper">
          <label htmlFor="day">Day</label>
          <input
            type="text"
            id="day"
            value={dayValue}
            onChange={(e) => setDayValue(e.target.value)}
          />
        </div>
        <button onClick={closeHandler}>&#215;</button>
      </div>
    </div>
  )
}

export default Popup
