import { Link } from "react-router";
import type { IBookModel } from "../../tsInterface/bookInterface";
import { useDeleteABookMutation } from "../../redux/services/booksServices";
import Swal from "sweetalert2";

const BookTable = ({ books }: { books: IBookModel }) => {
  const [deleteABook, { data, error }] = useDeleteABookMutation();

  console.log(data, error);

  // success message
  if (data?.success) {
    Swal.fire({
      title: data?.message,
      icon: "success",
      draggable: true,
    });
  }

  // error message
  if (error) {
    Swal.fire({
      title: error?.data?.message,
      icon: "error",
      draggable: true,
    });
  }

  const handleDeleteABook = (bookId: string) => {
    deleteABook(bookId);
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{books?.title}</h2>
          <p>{books?.description}</p>
          <div className="card-actions justify-center py-2">
            <Link
              to={`/book/${books._id}`}
              className="btn btn-primary text-[14px]"
            >
              See Details
            </Link>
            <Link
              to={`/edit-book/${books._id}`}
              className="btn btn-primary text-[14px]"
            >
              Edit Book
            </Link>
            <button className="btn btn-primary text-[14px]">Borrow Book</button>
            <button
              onClick={() => handleDeleteABook(books._id as string)}
              className="btn btn-primary text-[14px]"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
