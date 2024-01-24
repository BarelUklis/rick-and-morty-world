import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Button } from "@mui/material"
import { useState } from "react";

import rootStore from '../../../../store/root-store';
import FilterMenu from './filter-menu';
import { observer } from 'mobx-react-lite';

const FilterControl = observer(() => {
  const { rickAndMortyStore } = rootStore;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { filters } = rickAndMortyStore;
  const activeFilter = filters.gender || filters.status || filters.status;
  return (
    <>
      <Button
        variant="outlined"
        aria-controls="filter-menu"
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        fullWidth
        endIcon={<FilterAltIcon />}
      >
        Filters
      </Button>
      {activeFilter &&
        <Button
          variant="outlined"
          aria-controls="filter-menu"
          aria-haspopup="true"
          onClick={() => rickAndMortyStore.clearFilters()}
        >
          <FilterAltOffIcon />
        </Button>
      }
      <FilterMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  )
});

export default FilterControl;