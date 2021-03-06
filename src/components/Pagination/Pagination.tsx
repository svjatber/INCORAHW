import React, { useState } from 'react';
import './Pagination.scss';
import cn from 'classnames';
interface PaginationProps {
  activePage: number;
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
  onChangePage: (newPage: number) => void;
}

const Pagination = ({
  activePage,
  totalItems,
  perPage,
  withActions,
  onChangePage,
  classes
}: PaginationProps) => {
  const countPage = Math.round(totalItems / perPage);

  console.log(activePage);

  const onChange = (newCount: number) => {
    onChangePage(newCount);
  };

  return (
    <div className={'pagination'}>
      {withActions && (
        <button disabled={activePage === 0} onClick={() => onChange(activePage - 1)}>
          Previous
        </button>
      )}
      {Array.from({ length: countPage }).map((v, index) => {
        return (
          <div>
            <button
              onClick={() => onChange(index)}
              className={cn(classes?.btn, { [classes?.activeBtn || '']: activePage === index })}
            >
              {index + 1}
            </button>
          </div>
        );
      })}
      {withActions && (
        <button disabled={activePage === countPage - 1} onClick={() => onChange(activePage + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
