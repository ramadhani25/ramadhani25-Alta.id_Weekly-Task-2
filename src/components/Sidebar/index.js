import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = ({ data }) => {
  return (
    <div>
      <Container className="py-5 px-2">
        {data.map((item, itemIdx) => (
          <div className="d-grid mb-2">
            <Link
              style={{ fontSize: "0.8em" }}
              className="btn btn-dark"
              key={itemIdx}
              to={`/${item.eventKey}`}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Sidebar;
