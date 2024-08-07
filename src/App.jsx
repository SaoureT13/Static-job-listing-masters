import { useEffect, useState } from "react";
import "./App.scss";
import { JobCard } from "./Component/Card.jsx";
import { FilterBar } from "./Component/FilterBar.jsx";
import { datas } from "./datas.jsx";

function App() {
  const [data, setData] = useState(datas);
  const [filterList, setFilterList] = useState([]);

  const HandleFilter = (value) => {

    if (filterList.includes(value)) {
      setFilterList(filterList.filter((v) => v !== value));
    } else {
      setFilterList((prevDatas) => [...prevDatas, value]);
    }
  };

  const HandleDelete = (value) => {
    setFilterList(filterList.filter((v) => v !== value));
  };

  const HandleClearAll = () => {
    setFilterList([]);
  };

  useEffect(() => {
    if (filterList.length === 0) {
      setData(datas);
    } else {
      setData(
        datas.filter((data) => {
          for (let key of filterList) {
            if (
              data.role !== key &&
              data.level !== key &&
              !data.languages.includes(key) &&
              !data.tools.includes(key)
            ) {
              return false;
            }
          }
          return true;
        })
      );
    }
  }, [filterList]);

  return (
    <div className="container">
      {filterList.length > 0 && (
        <FilterBar filters={filterList} onClick={HandleDelete} HandleDeleteAll={HandleClearAll}/>
      )}
      <div className="Cards">
        <JobCard
          content={data}
          onClick={HandleFilter}
        />
      </div>
    </div>
  );
}

export default App;
