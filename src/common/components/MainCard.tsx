import { Box, useTheme } from '@mui/material';
import React from 'react';
import { cardRadius, darkBackgroundColor, lightDarkBackgroundColor } from '../theme/Theme';
import HeaderMainCard, { HeaderMainCardProps } from './HeaderMainCard';
interface MainCardProps extends HeaderMainCardProps {
  title?: string;
  style?: any;
  noHeader?: boolean;

}

const MainCard: React.FC<MainCardProps> = (props) => {
  const theme = useTheme();
  const { title, style, onClose, noHeader } = props;
  return (
    <Box
      {...props}
      style={{ ...style, background: `linear-gradient(0.65turn,${lightDarkBackgroundColor},${darkBackgroundColor})` }}
      display={props.display ? props.display : "flex"}
      flexDirection={props.flexDirection ? props.flexDirection : "column"}
      justifyContent={props.justifyContent ? props.justifyContent : "flex-start"}
      margin={props.margin ? props.margin : theme.spacing(2)}
      width={props.width ? props.width : "90%"}
      height={props.height ? props.height : "100%"}
      borderRadius={props.borderRadius ? props.borderRadius : '0'}

    >
      {!noHeader && <HeaderMainCard title={title} onClose={onClose} />}
      <Box padding={theme.spacing(1)}>{props.children}</Box>
    </Box >
  )
}

export default MainCard;