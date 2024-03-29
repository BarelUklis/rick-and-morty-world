import { InputLabel, MenuItem, Select } from "@mui/material"
import rootStore from '../../../../store/root-store';
import { IFilter } from "../../table.interface";

const FilterMenuItem = ({ filter }: { filter: IFilter }) => {
  const { rickAndMortyStore } = rootStore;
  const { name, label, options } = filter;
  return (
    <>
      <InputLabel id="filter-select-label">{name}</InputLabel>
      <Select
        id="filter-select"
        value={rickAndMortyStore.filters[name as keyof typeof rickAndMortyStore.filters] || ''}
        sx={{ minWidth: 100 }}
        label={label}
        onChange={(e) => rickAndMortyStore.handleFilterChange({ [name]: e.target.value })}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </>
  )
};

export default FilterMenuItem;