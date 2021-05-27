import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
export default function Pagination({ page, setPage, totalPages }) {
  const location = useLocation();
  const [array, setArray] = useState([]);
  useEffect(() => {
    let obj = [];
    let from = page < 5 ? 1 : page;
    let to = page < 5 ? 5 : page + 4;
    for (let index = from; index <= to; index++) {
      let item = {
        page: index,
      };
      obj.push(item);
    }
    setArray(obj);
  }, [page]);
  return (
    <div className="pagenav">
      <ul className="pagination">
        <li className={page > 1 ? "active" : "disabled"}>
          <span>«</span>
        </li>
        {array.length > 0 &&
          array.map((item, index) => (
            <li key={index} className={location.search === `?page=${item.page}` ? "active" : ""}>
              <Link to={`${location.pathname}?page=${item.page}`} onClick={() => setPage(item.page)}>
                {item.page}
              </Link>
            </li>
          ))}
        <li>
          <Link to={`${location.pathname}?page=${page + 1}`} onClick={() => setPage(page + 1)}>
            →
          </Link>
        </li>
        <li>
          <Link to={`${location.pathname}?page=${totalPages}`} onClick={() => setPage(totalPages)}>
            »
          </Link>
        </li>
      </ul>
    </div>
  );
}
