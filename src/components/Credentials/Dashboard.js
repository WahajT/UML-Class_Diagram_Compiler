// import React, { useRef, useState } from 'react'
import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Dashboard() {
    
    let navigate = useNavigate()
    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
          navigate('/login');
        }
      }, [])

    return (
        <div>
            this is main page

            

            
            
        </div>
    )
}   