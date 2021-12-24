import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showPopup } from '../../store/action'
import './Calendar.scss'

const Calendar = () => {
  const dispatch = useDispatch()
  const [date] = useState(new Date())

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const [month, setMonth] = useState(months[date.getMonth()])

  function nextMonthHandler() {
    const index = months.findIndex((m) => m === month)

    date.setMonth(index + 1)
    setMonth(months[date.getMonth()])
  }

  function prevMonthHandler() {
    const index = months.findIndex((m) => m === month)

    date.setMonth(index - 1)
    setMonth(months[date.getMonth()])
  }

  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate()

  const lastDayOfPrevMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate()

  const firstDayWeekIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay()

  const lastDayWeekIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay()

  const prevMonthDays = []

  for (let i = firstDayWeekIndex; i > 0; i--) {
    prevMonthDays.push(lastDayOfPrevMonth - i + 1)
  }

  const days = []

  for (let i = 1; i <= lastDayOfMonth; i++) {
    days.push(i)
  }

  const neextMonthDays = []
  const nextDays = 7 - lastDayWeekIndex - 1

  for (let i = 1; i <= nextDays; i++) {
    neextMonthDays.push(i)
  }

  function dayClickHandler(day) {
    const dayOfWeek = new Date(
      date.getFullYear(),
      months.findIndex((m) => m === month),
      day
    ).getDay()

    const dateItem = {
      day,
      month,
      dayOfWeek: weekDay[dayOfWeek],
    }

    dispatch(showPopup(dateItem))
  }

  return (
    <div className="calender-block">
      <div className="calender">
        <div className="calendar-header">
          <div className="left-arrow" onClick={prevMonthHandler}>
            &lt;
          </div>
          <span className="data">
            {month} {date.getFullYear()}
          </span>
          <div className="right-arrow" onClick={nextMonthHandler}>
            &gt;
          </div>
        </div>
        <div className="days">
          {prevMonthDays.map((day) => (
            <div className="prev-month-day" key={day}>
              {day}
            </div>
          ))}

          {days.map((day) => {
            if (
              day === new Date().getDate() &&
              month === months[new Date().getMonth()] &&
              date.getFullYear() === new Date().getFullYear()
            ) {
              return (
                <div
                  className="day today"
                  key={day}
                  onClick={() => dayClickHandler(day)}
                >
                  {day}
                </div>
              )
            }

            return (
              <div
                className="day"
                key={day}
                onClick={() => dayClickHandler(day)}
              >
                {day}
              </div>
            )
          })}

          {neextMonthDays.map((day) => (
            <div className="next-month-day" key={day}>
              {day}
            </div>
          ))}
        </div>

        <div className="week-days">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>
      </div>
    </div>
  )
}

export default Calendar
