import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// import ReactPaginate from 'react-paginate';
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }
// function PaginatedItems({ itemsPerPage }) {
//     // Here we use item offsets; we could also use page offsets
//     // following the API or data you're working with.
//     const [itemOffset, setItemOffset] = useState(0);
  
//     // Simulate fetching items from another resources.
//     // (This could be items from props; or items loaded in a local state
//     // from an API endpoint with useEffect and useState)
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     const currentItems = items.slice(itemOffset, endOffset);
//     const pageCount = Math.ceil(items.length / itemsPerPage);
  
//     // Invoke when user click to request another page.
//     const handlePageClick = (event) => {
//       const newOffset = (event.selected * itemsPerPage) % items.length;
//       console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//       );
//       setItemOffset(newOffset);
//     };
  
//     return (
//       <>
//         <Items currentItems={currentItems} />
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//         />
//       </>
//     );
//   }
  
  // Add a <div id="container"> to your HTML to see the component rendered.
//   CreateRoot(
//     <PaginatedItems itemsPerPage={4} />,
//     document.getElementById('container')
//   );

function Pagination() {
  return (
    <nav aria-label="Pagination" className=" items-center justify-center flex -space-x-px rounded-md shadow-sm py-6 px-5 dark:text-gray-800">
	<button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-300">
		<span className="sr-only">Previous</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
		</svg>
	</button>
	<button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-600 dark:text-gray-50 dark:border-gray-300">1</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">2</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">3</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">...</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">7</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">8</button>
	<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">9</button>
	<button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-300">
		<span className="sr-only">Next</span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
			<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
		</svg>
	</button>
</nav>
  )
}

export default Pagination