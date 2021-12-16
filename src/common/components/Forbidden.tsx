import { Typography } from "@mui/material"
import MainCard from "./MainCard"

const Forbidden = () => {
  return <MainCard noHeader>
    <Typography variant="h3">Vous n'avez pas l'autorisation de voir cette page</Typography>
  </MainCard>
}

export default Forbidden;