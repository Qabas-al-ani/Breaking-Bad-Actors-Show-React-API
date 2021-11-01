import React, { useState } from "react";

const Search = () => {
    const [text,setText] = useState('')
  return (
    <section className="search">
      <form>
      <input
        className="form-control"
        type="text"
        placeholder="Search Characters!"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
