import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

const SearchList = () => {
  const [newsdat, setNewData] = useState({
    q: "turkey",
    from: "16/03/2023",
    to: "19/03/2023",
    sortBy: "Popularity",
    Page: "1",
    pageSize: "8",
  });

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "20ch", height: "10px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Search"
            id="outlined-size-small"
            size="small"
            name="search"
          />
          <TextField
            id="outlined-select-currency-native"
            select
            label="SortBy"
            size="small"
            SelectProps={{
              native: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            name="sortBy"
          >
            <option value="">Popularity</option>
            <option value="">Relevancy</option>
            <option value="">Published</option>
          </TextField>
        </div>
        <div>
          <TextField
            label="From"
            id="outlined-size-Small"
            type="date"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            name="from"
          />
          <TextField
            label="To"
            id="outlined-size-Small"
            type="date"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            name="to"
          />
        </div>
        <div>
          <TextField
            label="PageSize"
            id="outlined-size-Small"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            name="pageSize"
          />
        </div>
        <div>
          <Button variant="contained" className="mt">
            Search
          </Button>
        </div>
      </Box>
      <hr />
    </div>
  );
};

export default SearchList;
