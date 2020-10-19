import React, { useEffect, useState } from 'react';
import { Loader } from "./component/Loader/Loader";
import  Table from "./component/Table/Table";
import DetailRowView from "./component/DetailRowView/DetailRowView";
import { Person } from "./type/Data";
import _ from 'lodash';
import ModeSelector from "./component/ModeSelector/ModeSelector";
import ReactPaginate from 'react-paginate';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<Person>>();
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [sortField, setSortField] = useState<string>();
  const [row, setRow] = useState<Person>();
  const [isModeSelected, setIsModeSelected] = useState(false);

  async function fetching(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(prevState => !prevState);
    setData(_.orderBy(data, sortField, sort));
  }

  const onSort = (sortField: string) => {
    const cloneData = data?.concat();
    const sortType = sort === "asc" ? "desc" : "asc";
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    setData(orderedData);
    setSort(sortType);
    setSortField(sortField);
  };

  const onRowSelect = (row: Person) => {
    setRow(row)
  };

  const modeSelectHandler = (url: string) => {
    console.log(url);
    setIsModeSelected(true);
    setIsLoading(true);
    fetching(url);
  };

  if(!isModeSelected) {
    return (
      <div className="container">
        <ModeSelector onSelect={modeSelectHandler}/>
      </div>
    )
  }
  return null
};

export default App;
