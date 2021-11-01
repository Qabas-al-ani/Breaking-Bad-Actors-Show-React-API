import React, { useState } from "react";

const Search = () => {
  return (
    <section className="search">
      <form
        className="form-control"
        type="text"
        placeholder="Search Characters!"
        autoFocus
      ></form>
    </section>
  );
};

export default Search;
