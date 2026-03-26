import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function BookingCalanderStartDate({open, startDate, setStartDate, setOpenStartDate,setOpenEndDate}) {
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
      setStartDate(date.toDateString())
    },[])

    const changeHandler = (date) =>{
      setDate(date)
      setStartDate(date.toDateString())
    }
    const close = ()=>{
      setOpenStartDate(false)
      setOpenEndDate(true)
    }
  return (
    <dialog open={open} className='z-10 bg-white p-5 shadow-md shadow-neutral-400 fixed top-[350px] xl:top-[260px] 2xl:right-[-230px] xl:right-[-120px] lg:right-[-10px] '>
        <button onClick={close}>{date.toDateString()}</button>
        <Calendar onChange={changeHandler} value={date} onClickDay={close} />
    </dialog>
  )
}

export default BookingCalanderStartDate