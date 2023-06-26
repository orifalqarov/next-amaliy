import { ButtonGroup , Button} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {format} from 'date-fns'
const Footer = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor:'primary.main', color:'white', padding:'20px' }}>
        <Typography>& {format(new Date(), 'yyyy')} IT park</Typography>
        <ButtonGroup>
            <TelegramIcon/>
            <Button>Two</Button>
        </ButtonGroup>
    </Box>
  )
}

export default Footer