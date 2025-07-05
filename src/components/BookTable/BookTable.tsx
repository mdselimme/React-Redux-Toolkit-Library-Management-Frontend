import { Link } from "react-router";
import type { IBookModel } from "../../tsInterface/bookInterface";

const BookTable = ({ books }: { books: IBookModel }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 border shadow-2xl">
        <div className="card-body">
          {/* book icon  */}
          <div className="bg-[#023047] w-12 h-12 flex justify-center items-center rounded-4xl mb-3">
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
              />
            </svg>
          </div>
          <h2 className="card-title text-[0.9rem] mb-2">{books?.title}</h2>
          {/* author --- */}
          <h4 className="card-title text-[0.8rem] mb-2 font-semibold text-[#023047]">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {books?.author}
          </h4>
          {/* available and copies  */}
          <div className="flex justify-between items-center font-bold mb-2 text-[#219EBC]">
            <p>
              Availability:{" "}
              {books?.available && books?.copies ? "Available" : "Unavailable"}
            </p>
            <p>
              Copies: {books?.available && books?.copies ? books?.copies : 0}
            </p>
          </div>

          {/* all card buttons  */}
          <div className="card-actions justify-center py-2">
            {/* see details button  */}
            <Link
              to={`/book/${books._id}`}
              className="btn btn-primary text-[14px]"
            >
              See Details{" "}
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                />
              </svg>
            </Link>

            {/* borrow button  */}
            <Link to={`/borrow/${books._id}`}>
              <button className="btn btn-primary text-[14px]">
                Borrow Book{" "}
                <svg
                  className="w-6 h-6 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
