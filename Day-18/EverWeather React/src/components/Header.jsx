import {
  Input,
  Nav,
  Logo,
  NavItem,
  SearchBox,
  SearchIcon,
} from "./stylescomponents/Header";


import { useState, useEffect } from "react";

const Header = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() !== "") {
        props.setLoading(true);
        props
          .fetchWeatherData(query)
          .then(() => {
            props.setLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        setQuery("");
      }
    }, 800);

    return () => clearTimeout(delay);
  }, [query]);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  return (
    <Nav>
      <NavItem>
      <Logo src="/logo_with_text.svg" alt="Logo" />
        <SearchBox>
          <Input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
          />
          <SearchIcon>
            <i className="ri-search-line"></i>
          </SearchIcon>
        </SearchBox>
      </NavItem>
    </Nav>
  );
};

export default Header;
