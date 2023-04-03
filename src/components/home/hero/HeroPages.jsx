import React from "react"
import { Stack } from '@mui/material';
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <Stack height={1} width={1} justifyContent='center' alignItems='center'>
          <h2>Accueil / {location.pathname.split("/")[1]}</h2>
          <h1>{title}</h1>
        </Stack>
      </section>
    </>
  )
}

export default Back
