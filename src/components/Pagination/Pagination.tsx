import React, { useState } from 'react';
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
  classes,
  onChangePage
}: PaginationProps) => {
  const [activePageLocal, setActivePageLocal] = useState<number>(activePage);
  const countPage = Math.round(totalItems / perPage);

  const onChange = (newCount: number) => {
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
            {withActions && (
              <button disabled={index === 0} onChange={() => index - 1}>
                Previous
              </button>
            )}
            <button
              onChange={() => onChangePage(index)}
              className={cn(classes?.btn, {
                [classes?.activeBtn || '']: activePage === index
              })}
            >
              {index + 1}
            </button>
          </div>
        );
      })}
      {withActions && (
        <button disabled={activePageLocal === countPage} onClick={() => onChange(activePageLocal + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
