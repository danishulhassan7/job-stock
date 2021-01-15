import React from 'react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const PaginationComp = (props) => (

<Pagination size="lg" className="Pagination-css App">
  <Pagination.First />
  {/* <Pagination.Prev /> */}
  <Pagination.Item active>{1}</Pagination.Item>

  <Pagination.Item style={{backgroundColor:"#03a504", color:"#03a504"}}>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
  <Pagination.Item>{5}</Pagination.Item>

  <Pagination.Ellipsis />
  {/* <Pagination.Next /> */}
  <Pagination.Last />
</Pagination>
);