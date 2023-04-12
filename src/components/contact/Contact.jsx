import React from "react";
import { makeStyles } from "@mui/styles";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { Stack } from "@mui/material";
import { themeColors } from '../../constant/themeColors';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    margin: theme.spacing(2),
  },
  message: {
    margin: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Stack py={10}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <div className={classes.form}>
            <Typography variant="h4" align="center" gutterBottom>
              Contactez-nous
            </Typography>
            <Typography align="center">
              Pour nous faire part de vos demandes, questions, (etc.), veuillez
              remplir les cases ci-dessous
            </Typography>
            <form>
              <TextField
                className={classes.textField}
                fullWidth
                variant="outlined"
                label="Nom complet"
                type="text"
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    variant="outlined"
                    label="Email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    variant="outlined"
                    label="Téléphone"
                    type="text"
                  />
                </Grid>
              </Grid>
              <TextField
                className={classes.textField}
                fullWidth
                variant="outlined"
                label="Sujet"
                type="text"
              />
              <TextField
                className={classes.message}
                fullWidth
                variant="outlined"
                label="Votre message..."
                multiline
                rows={6}
              />
              <Stack direction="row" width={1} justifyContent="center">
              <Button
                className={classes.button}
                type="submit"
                  variant="contained"
                color='primary'
                  sx={{
                    width: 300
                  }}
              >
                ENVOYER
              </Button>
              </Stack>
              
            </form>
          </div>
        </Grid>
      </Grid>
      </Stack>
    </Container>
  );
};

export default Contact;