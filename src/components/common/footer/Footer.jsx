import React, {useState} from "react"
import { CircularProgress, Stack, InputBase, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import "./footer.css"
import { checkUser } from "../../../utils/api/requests"
import UserConfirmation from "./UserConfirmation"

const Footer = () => {
  const [mail, setMail] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSearch = () => {
    setLoading(true);
    checkUser ({
      email:mail, 
      callback:(data = []) => {
        setLoading(false);
        setResults(data);
        handleOpen();
      },
      onError:() => {
        setLoading(false);
        setResults(null);
      }
    })
  }
  console.log(results)
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Vérification de votre inscription</h1>
          </div>
          <div className='right row'>
            <Stack width={1} direction='row' alignItems='center' borderRadius={2}  sx={{ bgcolor: 'white', height: 50}}>
            <InputBase 
             size="small"
              fullWidth 
              onChange={(e) => setMail(e.currentTarget.value)} 
              value={mail} 
              type='text' 
              placeholder='Entrer votre adresse email' 
             
            />
            <Stack px={1}>
              {loading ? 
                <CircularProgress size={20} /> : 
                <IconButton color='info' onClick={handleSearch}> <SendIcon /> </IconButton>
                }
            </Stack>
            </Stack>
          </div>
        </div>
      </section>
  
      <div className='legal'>
      <div className='container'>
          <div className='logo'>
            <img src="https://www.zonta.org/images/Online/zontalogosm.png" alt="" height={50}/>
          </div>
          <div className="social">
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
        </div>
        <p>
          Copyright ©2023 Tous droits réservés | Développé par <a href="https://okydook.com">OKYDOOK</a>
        </p>
      </div>
      <UserConfirmation open={open} onClose={handleClose} data={results} />
    </>
  )
}

export default Footer
