import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

const  SearchFilter = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
  };
  const categories = Array.from(useSelector((state: any) => state.categoriesStore.categories))

  const results = !searchTerm ? people : people.filter(person => person.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

  return (
    <div className="search-filter-categories">
      <input
        type="text"
        placeholder="Find category"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter