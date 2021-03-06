import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination';

function Main() {
  const [page, setPage] = useState<number>(1);

  const onChangePage = (num: number) => {
    setPage(num);
  };

  return (
    <div>
      <div>{page + 1}</div>
      <Pagination
        activePage={page}
        totalItems={40}
        withActions={true}
        perPage={10}
        classes={{ btn: 'btn', activeBtn: 'activeBtn' }}
        onChangePage={onChangePage}
      />
    </div>
  );
}

export default Main;
