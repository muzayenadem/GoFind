import { useEffect, useState } from "react"

const findIp = ({api}) =>{
    const [ipAddress,setIpAddress] = useState('')
    //'https://api.ipify.org'
    useEffect(()=>{
        fetch(api)
        .then(res => res.text())
        .then(ip => setIpAddress(ip))
        .catch(err => setIpAddress(err.message))
      },[])
      return ipAddress
}

export default findIp