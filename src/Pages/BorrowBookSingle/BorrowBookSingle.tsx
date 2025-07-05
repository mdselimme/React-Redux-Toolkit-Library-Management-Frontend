import { useNavigate, useParams } from "react-router";
import { useGetABookQuery } from "../../redux/services/booksServices";
import { type FormEvent } from "react";
import Swal from "sweetalert2";
import { useCreateABorrowMutation } from "../../redux/services/borrowServices";

const BorrowBookSingle = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  // Get A Book By BookId
  const { data } = useGetABookQuery(bookId);

  // Create A Borro Book
  const [borrowBook, { data: borrowBookData, error: borrowError }] =
    useCreateABorrowMutation();

  // borrow success message
  if (borrowBookData?.success) {
    Swal.fire({
      title: borrowBookData.message,
      icon: "success",
      draggable: true,
    });
    navigate("/borrow-summary");
  }
  // error message
  if (borrowError instanceof Error) {
    Swal.fire({
      title: borrowError?.message,
      icon: "error",
      draggable: true,
    });
  }

  // borrow handle form
  const handleBorrowFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const copies = Number(form.borrow_copies.value);
    if (copies <= 0) {
      Swal.fire({
        title: "Copies Must be Greater than 0",
        icon: "error",
        draggable: true,
      });
      return;
    }
    const dueDate = new Date(form.due_date.value).toISOString();
    try {
      const bookBorrowData = {
        book: bookId,
        quantity: copies,
        dueDate,
      };
      borrowBook(bookBorrowData);
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: error.message,
          icon: "error",
          draggable: true,
        });
      }
    }
  };

  return (
    <div className="py-10 w-full md:w-3/6 mx-auto">
      <h1 className="text-center text-3xl font-bold text-[#023047]">
        Borrow A Book
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-2xl p-10 mx-auto">
        <div>
          <div>
            <div className="card bg-base-100 w-full">
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
                <h2 className="card-title text-[0.9rem]">{data?.data.title}</h2>
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
                  {data?.data.author}
                </h4>
                {/* book description  */}
                <p className="text-[0.8rem] font-medium text-[#]">
                  {data?.data.description}
                </p>

                {/* available and copies  */}
                <div className="flex justify-between gap-5 items-center text-[#219EBC]">
                  <p>
                    Availability:{" "}
                    {data?.data.available && data?.data.copies ? (
                      "Available"
                    ) : (
                      <span className="text-[#FB8500]">Unavailable</span>
                    )}
                  </p>
                  <p>
                    Copies:{" "}
                    {data?.data.available && data?.data.copies
                      ? data?.data.copies
                      : 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[35rem]">
          <form onSubmit={handleBorrowFormSubmit}>
            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
                Borrow Quantity
              </legend>
              <input
                type="text"
                name="borrow_copies"
                className="input w-full"
                placeholder="How much Copy You Need type here"
                // onChange={inputValueChange}
                required
              />
            </fieldset>
            <fieldset className="fieldset mb-2">
              <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
                Due Date
              </legend>
              <input
                name="due_date"
                required
                type="date"
                className="input w-full"
              />
            </fieldset>
            <button className="btn bg-[#023047] text-white">Borrow Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BorrowBookSingle;
