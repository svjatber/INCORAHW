import React, { useState } from 'react';

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
  onChangePage
}: PaginationProps) => {

  const [activePageLocal, setActivePageLocal] = useState<number>(activePage);
  const countPage = Math.round(totalItems / perPage);

  const onChange = (newCount: number) => {
    console.log(newCount)
    setActivePageLocal(newCount);
    onChangePage(newCount);

  };

  return (
    <div>
      {withActions && (
        <button disabled={activePageLocal === 0} onClick={() => onChange(activePageLocal - 1)}>
          Previous
        </button>
      )}
      {Array.from({ length: countPage }).map((v, index) => {
        return (
          <div>
            <button
              onClick={() => onChange(index)}
              // className={(classes?.btn, {
              //   [classes?.activeBtn || '']: activePage === index
              // })}
            >
              {index + 1}
            </button>
          </div>
        );
      })}
      {withActions && (
        <button disabled={activePageLocal === countPage - 1} onClick={() => onChange(activePageLocal + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
