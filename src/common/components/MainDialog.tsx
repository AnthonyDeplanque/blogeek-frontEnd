import { DialogProps, useTheme } from '@mui/material';

import * as React from 'react';
import { cardRadius } from '../theme/Theme';
import HeaderMainCard from './HeaderMainCard';
import MainCard from './MainCard';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface MainDialogProps extends DialogProps {
  title?: string;
  style?: any;
  open: boolean;
  onClose?: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MainDialog: React.FC<MainDialogProps> = (props) => {
  const theme = useTheme();
  const { title, style, open, onClose } = props;
  return (
    <Dialog
      // TransitionComponent={Transition}
      open={open}
      onClose={onClose}
      style={{
        ...style,
        backgroundColor: "transparent",
        margin: theme.spacing(2),
        borderRadius: `${cardRadius}px`,
      }}
      fullWidth
    >
      <HeaderMainCard title={title} onClose={onClose}></HeaderMainCard>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>

      </DialogActions>
    </Dialog >
  )
}

export default MainDialog;