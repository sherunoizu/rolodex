import { useState, useEffect } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldLowerCase = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldLowerCase);
  };

  const onTitleChange = (event) => {
    const searchFieldLowerCase = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldLowerCase);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search users"}
        className={"monsters-search-box"}
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder={"set title"}
        className={"title-search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
