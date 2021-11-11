import { Box, Typography, useTheme } from "@mui/material"

interface AvatarDisplayerProps {
  avatar?: string;
  littleImage?: boolean
}
const AvatarDisplayer: React.FC<AvatarDisplayerProps> = (props) => {
  const { avatar, littleImage } = props
  const theme = useTheme()

  return (<Box
    borderRadius="50%"
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
    width={littleImage ? '30px' : '150px'}
    height={littleImage ? '30px' : '150px'}
    border={`1px solid ${theme.palette.secondary.main}`}
    style={{
      background: avatar
        ? `url(${avatar}) center / contain no-repeat`
        : `linear-gradient(0.65turn,${theme.palette.secondary.light},${theme.palette.secondary.dark})`
    }}>
    {!avatar &&
      <Typography variant="subtitle2">Pas d'image de profile</Typography>
    }
  </Box>)
}

export default AvatarDisplayer