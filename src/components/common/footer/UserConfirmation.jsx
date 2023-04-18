import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Stack, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SummaryContainer } from "../../inscription/Summary";

export default function UserConfirmation({open, onClose, data }) {
    console.log({data});
  return (
    <Dialog maxWidth='md' fullWidth open={open} onClose={onClose}>
        <DialogTitle>
        <Stack width={1} direction="row" justifyContent='flex-end'>
          <Stack>
            <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
            </Stack>
        </Stack>
        </DialogTitle>
        <DialogContent>
                {(!data || !data?.length)? 
                (<DialogContentText>
                    Impossible de trouver un compte associé à cet e-mail
                </DialogContentText>) :        
                <SummaryContainer values={data?.at(0)} />
                }
        </DialogContent>
    </Dialog>
  )
}
