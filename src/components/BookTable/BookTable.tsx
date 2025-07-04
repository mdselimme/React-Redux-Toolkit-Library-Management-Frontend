import { Link } from "react-router";
import type { IBookModel } from "../../tsInterface/bookInterface";

const BookTable = ({ books }: { books: IBookModel }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 border shadow-2xl">
        <div className="card-body">
          {/* book icon  */}
          <div>
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
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
          <h2 className="card-title text-[0.9rem]">{books?.title}</h2>
          {/* author --- */}
          <h4 className="card-title text-[0.8rem] font-semibold text-[#023047]">
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
          {/* book description  */}
          <p className="text-[0.8rem] font-medium text-[#]">
            {books?.description}
          </p>

          {/* available and copies  */}
          <div className="flex justify-between items-center text-[#219EBC]">
            <p>
              Availability:{" "}
              {books?.available && books?.copies ? "In Stock" : "Not availabe"}
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
              See Details
            </Link>
            {/* edit button  */}
            {/* <Link
              title="edit"
              to={`/edit-book/${books._id}`}
              className="btn btn-primary text-[14px]"
            >
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link> */}
            {/* borrow button  */}
            <button className="btn btn-primary text-[14px]">
              <Link to={`/borrow/${books._id}`}>Borrow Book</Link>
            </button>
            {/* delete button  */}
            {/* <button
              title="delete"
              onClick={() => handleDeleteABook(books._id as string)}
              className="btn btn-primary text-[14px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden={true}
                fill="currentColor"
                className="w-6 h-6 text-white dark:text-white"
                viewBox="0 0 30 30"
              >
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
