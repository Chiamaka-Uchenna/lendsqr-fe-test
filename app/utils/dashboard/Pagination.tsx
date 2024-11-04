

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4 text-gray-600">
      {/* Items per page dropdown */}
      <div className="flex items-center space-x-2 text-sm text-secondary">
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="px-2 py-1 text-primary bg-gray-200 focus:outline-none"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={44}>44</option>
        </select>
        <span>out of {totalItems}</span>
      </div>

      {/* Pagination buttons */}
      <div className="flex items-center space-x-2">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "text-primary cursor-not-allowed"
              : "text-primary hover:text-gray"
          }`}
        >
          &lt;
        </button>

        {/* Page numbers */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-3 py-1 rounded ${
              number === currentPage
                ? "text-primary bg-gray-200"
                : "text-secondary hover:bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded text-secondary hover:bg-gray-200 ${
            currentPage === totalPages
              ? "text-primary cursor-not-allowed"
              : "text-secondary hover:text-gray-200"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
