import { useState, useEffect, ChangeEvent } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

import "./App.css";
import { StringLiteral } from "typescript";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldLowerCase = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldLowerCase);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
