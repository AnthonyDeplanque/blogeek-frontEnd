import { DialogProps, useTheme } from '@mui/material';

import * as React from 'react';
import HeaderMainCard from './HeaderMainCard';
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        height="100%"
        borderRadius='11px'
        style={{
          ...style,
          // background: `${darkBackgroundColor}77`,
          backdropFilter: 'blur( 9px )',
          borderRadius: "11px"
        }} >{props.children}</Box>
    </Dialog >
  )
}

export default MainDialog;