import { Stack } from "@mui/material"
import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
      <Stack className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
      </Stack>
  )
}

 export default Back
