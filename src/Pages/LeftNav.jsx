import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/categories/2")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div>
      <h5>All categories</h5>
      {categories.map((category) => (
        <p className="ps-3" key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="text-decoration-none text-black"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
