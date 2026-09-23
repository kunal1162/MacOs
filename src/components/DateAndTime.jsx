import React, { useEffect, useState } from 'react'

const formatDateTime = (date = new Date()) => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const meridiem = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12

  return `${weekdays[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${formattedHours}:${minutes} ${meridiem}`
}

const DateAndTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(() => formatDateTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(formatDateTime())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return <div>{currentDateTime}</div>
}

export default DateAndTime
