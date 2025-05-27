import React from 'react'

const Pagination = ({ categoriesPerPage, totalCategories, paginate, nextPage, prevPage }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCategories / categoriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='mt-[5%] mr-[3%]'>
            {totalCategories >= categoriesPerPage ? (
                <ul className="flex justify-end items-center gap-x-2">
                    <div className="font-[500] text-[14px]">{totalCategories} Items</div>
                    <div onClick={() => prevPage()} className="border rounded-sm hover:shadow-lg hover:cursor-pointer active:bg-[#263238] active:text-white focus:outline-none focus:ring focus:ring-violet-300 border-[#2a6e91] px-2 bg-[white] py-1">&lt;</div>
                    {pageNumbers.map((pageNumber) => (
                        <li className="border rounded-sm hover:shadow-lg hover:cursor-pointer active:bg-[#263238] active:text-white focus:outline-none focus:ring focus:ring-violet-300 border-[#2a6e91] px-2 bg-[white] py-1" key={pageNumber}>
                            <span onClick={() => paginate(pageNumber)} href="">{pageNumber}</span>
                        </li>
                    ))}
                    <div onClick={() => nextPage()} className="border rounded-sm hover:shadow-lg hover:cursor-pointer active:bg-[#263238] active:text-white focus:outline-none focus:ring focus:ring-violet-300 border-[#2a6e91] px-2 bg-[white] py-1">&gt;</div>
                </ul>
            ) : null}
        </div>
    )
}

export default Pagination