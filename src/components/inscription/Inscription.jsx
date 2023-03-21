import React, { useState } from 'react'
import { Stack } from '@mui/material';
import TabButton from '../common/custom/tab/TabButton';
import TabPanel from '../common/custom/tab/TabPanel';


export default function Inscription() {
    const [currentTab, setCurrentTab]= useState(0);


  return (
    <Stack width={1} justifyContent='center' alignItems='center'>

        <Stack width={1} direction='row' spacing={3} justifyContent='center'>
            <TabButton title='Personal Information' value={0} selected={currentTab === 0} onClick={setCurrentTab} />
            <TabButton title='Travel Information' value={1} selected={currentTab === 1} onClick={setCurrentTab} />
            <TabButton title='Hosting Information' value={2} selected={currentTab === 2} onClick={setCurrentTab} />
            <TabButton title='Summary' value={3} selected={currentTab === 3} onClick={setCurrentTab} />
        </Stack>

       {currentTab ===0 && <TabPanel> 01 </TabPanel>}
       {currentTab ===1 && <TabPanel> 02 </TabPanel>}
       {currentTab ===2 && <TabPanel> 03 </TabPanel>}
       {currentTab ===3 && <TabPanel> 04 </TabPanel>}

    </Stack>
  )
}

