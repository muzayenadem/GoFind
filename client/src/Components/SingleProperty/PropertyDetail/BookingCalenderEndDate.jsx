import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function BookingCalenderEndDate({open,endDate, setEndDate,setOpenEndDate}) {
  console.log({Calendar})
    const [date, setDate] = useState(new Date());

    useEffect(()=>{
      setEndDate(date.toDateString())
    },[])

    const changeHandler = (date) =>{
      setDate(date)
      setEndDate(date.toDateString())
    }

    const close = ()=>{
      setOpenEndDate(false)
    }
  return (
    <dialog open={open}  className='z-10 bg-white p-5 shadow-md shadow-neutral-400 fixed top-[350px] xl:top-[260px]  2xl:right-[-230px] xl:right-[-120px] lg:right-[-10px]'>
        <span>{date.toDateString()}</span>
        <Calendar onChange={changeHandler} value={date} onClickDay={close} />
    </dialog>
  )
}
export default BookingCalenderEndDate