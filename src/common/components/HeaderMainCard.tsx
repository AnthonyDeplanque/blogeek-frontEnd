import { Typography } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { BoxProps, useTheme } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import { cardRadius, darkBackgroundColor } from '../theme/Theme';
export interface HeaderMainCardProps extends BoxProps {
  title?: string;
  onClose?(): void;
}

const HeaderMainCard: React.FC<HeaderMainCardProps> = (props) => {
  const { title, onClose } = props;
  const theme = useTheme();
  return (


    <Box
      {...props}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingLeft={theme.spacing(1)}
      paddingRight={theme.spacing(1)}
      style={{
        color: darkBackgroundColor,
        //textShadow: `0px 0px 5px rgba(255,255,230,0.6)`,
        background: `linear-gradient(0.15turn,${theme.palette.primary.light},${theme.palette.primary.dark})`,
        height: "70px",
        width: "100%",
        //   borderTopLeftRadius: cardRadius,
        //   borderTopRightRadius: cardRadius
      }} >
      <Box>{title && <Typography variant="h4" style={{ fontWeight: "bold", padding: theme.spacing(0, 1, 0, 1) }}>{title}</Typography>}</Box>
      <Box>{props.children}</Box>
      <Box>{onClose && <Clear fontSize="large" onClick={onClose} />}</Box>
    </Box>
  )
}

export default HeaderMainCard;