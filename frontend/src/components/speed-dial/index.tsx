
// React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Material
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

// Local
import { actions } from './actions';

const style = {
    position: 'absolute',
    bottom: 16,
    right: 16,
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1,
};

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleAction = (link: string) => {
    navigate(link);
  };

  return (
    <Box sx={style}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleAction(action.link)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
