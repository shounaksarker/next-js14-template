import React, { useState } from 'react';

const CustomTable = ({
  headers,
  data,
  enableSearch = false,
  enablePagination = false,
  className,
  tableClass,
  inputClass,
  headerClass,
  rowClass,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = enablePagination ? 5 : data?.length;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={className || ''}>
      {enableSearch && (
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className={`mb-4 rounded border border-gray-300 p-2 ${inputClass || ''}`}
        />
      )}

      <div className={`overflow-x-auto ${tableClass || ''}`}>
        <div className="mb-4">
          <div className={`justify-betwee flex w-full items-center ${headerClass || ''}`}>
            {headers.map((header, index) => (
              <span
                key={index}
                className={`mr-4 font-bold ${header.thIcon && 'flex gap-x-2'} ${header.style}`}
              >
                {header.thIcon && header.thIcon}
                {header.label}
              </span>
            ))}
          </div>
        </div>
        {console.log('pagi-data: ', paginatedData, '\nheaders: ', headers)}
        {paginatedData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`justify-betwee flex items-center border-t border-bGray py-2 ${rowClass || ''}`}
          >
            {headers.map((header, colIndex) => (
              <span
                key={colIndex}
                className={`mr-4 flex gap-x-2 ${header.tdIcon ? 'flex gap-x-2' : ''} ${header.style}`}
              >
                {header.tdIcon && header.tdIcon}
                {header.index && rowIndex + 1}
                {row[header.target] || row[header.label.toLowerCase().replace(' ', '_')]}
                {header.action && (
                  <span>
                    {header.action.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.onClick(row)}
                        className={`mr-2 ${action.style}`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>

      {enablePagination && (
        <div className="mt-4 flex justify-end">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-2 rounded px-3 py-1 ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-gray-100'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomTable;
