import { Box, Pagination } from "@mui/material"
import rootStore from "../../../store/root-store"
import { observer } from "mobx-react-lite";

const TablePaginationComponent = observer(() => {
  const { rickAndMortyStore } = rootStore;
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      {rickAndMortyStore.numberOfPages > 1 &&
        <Pagination
          count={rickAndMortyStore.numberOfPages}
          page={rickAndMortyStore.currentPage}
          onChange={(_event, value) => rickAndMortyStore.setPage(value)}
          variant="outlined"
          shape="rounded"
        />
      }
    </Box>
  )
});

export default TablePaginationComponent;
