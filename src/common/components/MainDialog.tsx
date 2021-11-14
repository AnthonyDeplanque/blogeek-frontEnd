import { DialogProps, useTheme } from '@mui/material';

import * as React from 'react';
import { cardRadius, darkBackgroundColor } from '../theme/Theme';
import HeaderMainCard from './HeaderMainCard';
import MainCard from './MainCard';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';

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
        borderRadius: `11px`,
      }}
      fullWidth
    >

      <HeaderMainCard title={title} onClose={onClose}></HeaderMainCard>
      <Box display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        margin={theme.spacing(2)}
        width="90%"
        height="100%"
        borderRadius='11px'
        style={{
          ...style,
          background: `${darkBackgroundColor}77`,
          backdropFilter: 'blur( 9px )',
          borderRadius: "11px"
        }} >{props.children}</Box>
    </Dialog >
  )
}

export default MainDialog;