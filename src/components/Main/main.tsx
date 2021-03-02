import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import './App.css';

function Main() {
  const [page, setPage] = useState<number>(1);

  return (
    <div>
      <div>1</div>
      <Pagination
        activePage={page}
        totalItems={40}
        perPage={4}
        classes={{ btn: 'btn', activeBtn: 'activeBtn' }}
        onChangePage={setPage}
      />
    </div>
  );
}

export default Main;
