import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ComplexGrid from "../card/card";
import { getNewsApi } from "../reduxThunk/state";

const SearchList = () => {
  const news = useSelector((state) => state.newState);
  const dispatch = useDispatch();
  const [newsdata, setNewData] = useState({
    q: "apple",
    from: "2023-03-10",
    to: "2023-03-18",
    sortBy: "popularity",
    page: 1,
    pageSize: "8",
  });
  const handleChange = (event) => {
    setNewData((get) => {
      const cloneList = { ...get };
      cloneList.page = 1;
      cloneList[event.target.name] = event.target.value;
      return cloneList;
    });
  };

  const searchNews = () => {
    dispatch(getNewsApi(newsdata));
  };

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
            name="q"
            onChange={(e) => {
              handleChange(e);
            }}
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
            defaultValue={newsdata.sortBy}
            onChange={(e) => {
              handleChange(e);
            }}
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
            defaultValue={newsdata.from}
            onChange={(e) => {
              handleChange(e);
            }}
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
            defaultValue={newsdata.to}
            onChange={(e) => {
              handleChange(e);
            }}
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
            defaultValue={newsdata.pageSize}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <Button variant="contained" className="mt" onClick={searchNews}>
            Search
          </Button>
        </div>
      </Box>
      <hr />
      {news.newData.articles
        ? news.newData.articles.map((newslist, i) => (
            <ComplexGrid newslist={newslist} i={i} key={`${i}-key`} />
          ))
        : console.log("error")}
    </div>
  );
};

export default SearchList;
