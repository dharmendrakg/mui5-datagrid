import { Box, Container, Grid, Typography } from "@mui/material";
import Table from "@/components/Table";

export default function Index() {
  return (
    <Box style={{ height: "100vh" }}>
      <Container maxWidth="xl">
        <Typography component="h5" variant="h5" sx={{textAlign: "center"}}>
          Let us Play with MUI DataGrid
        </Typography>
        <Table />
      </Container>
    </Box>
  );
}
