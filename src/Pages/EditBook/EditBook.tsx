import { useNavigate, useParams } from "react-router";
import {
  useGetAllBooksQuery,
  useUpdateABookMutation,
} from "../../redux/services/booksServices";
import { useReducer, type FormEvent } from "react";
import type { Action, IBookModel } from "../../tsInterface/bookInterface";
import Swal from "sweetalert2";

const EditBook = () => {
  // book data id
  const { id } = useParams();

  const navigate = useNavigate();

  // get book data by id  from database
  const { data: bookGetData } = useGetAllBooksQuery({});

  // form initial ref
  const singleBookFindById = bookGetData?.data.find(
    (bk: IBookModel) => bk._id === id
  );

  // initial State Data
  const initialState: IBookModel = {
    _id: singleBookFindById?._id,
    title: singleBookFindById?.title,
    author: singleBookFindById?.author,
    genre: singleBookFindById?.genre,
    isbn: singleBookFindById?.isbn,
    description: singleBookFindById?.description,
    copies: singleBookFindById?.copies,
    available: singleBookFindById?.available,
  };

  // Use Reducer Function
  const reducer = (state: IBookModel, action: Action) => {
    switch (action.type) {
      case "update_value":
        return { ...state, [action.payload.input]: action.payload.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [bookValue, dispatch] = useReducer(reducer, initialState);

  // Input Value Change Function and dispatch function
  const inputValueChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch({
      type: "update_value",
      payload: {
        input: target.name as keyof IBookModel,
        value: target.value,
      },
    });
  };

  // update data mutation from book services
  const [updateBook, { data, error }] = useUpdateABookMutation();

  // success message
  if (data?.success) {
    Swal.fire({
      title: data?.message,
      icon: "success",
      draggable: true,
    });
    navigate("/books");
  }

  // error message
  if (error instanceof Error) {
    Swal.fire({
      title: error?.message,
      icon: "error",
      draggable: true,
    });
  }

  // genre list for select
  const genreList = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  // book update event
  const handleEditBook = (e: FormEvent) => {
    e.preventDefault();
    bookValue.copies = Number(bookValue.copies);
    updateBook({ bookData: bookValue, bookId: bookValue._id });
  };

  return (
    <div className="w-full md:w-[35rem] mx-auto shadow-2xl p-8 my-8">
      <h1 className="text-3xl font-extrabold text-center text-[#FB8500]">
        Edit Book
      </h1>
      <form onSubmit={handleEditBook}>
        {/* title field  */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
            Book Title
          </legend>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Book title type here"
            onChange={inputValueChange}
            defaultValue={bookValue?.title}
            required
          />
        </fieldset>
        {/* author field  */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
            Book Author
          </legend>
          <input
            type="text"
            name="author"
            className="input w-full"
            placeholder="Book author type here"
            onChange={inputValueChange}
            defaultValue={bookValue?.author}
            required
          />
        </fieldset>
        {/* genre field  */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
            Book Genre
          </legend>
          <select
            name="genre"
            className="select w-full"
            onChange={inputValueChange}
            defaultValue={bookValue?.genre}
            required
          >
            <option disabled={true}>Pick a genre</option>
            {genreList.map((gen, idx) => (
              <option key={idx}>{gen}</option>
            ))}
          </select>
        </fieldset>
        {/* isbn field  */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
            Book Isbn Number Can't Change
          </legend>
          <input
            name="isbn"
            type="text"
            className="input w-full text-green-700"
            placeholder="Book isbn number type here"
            onChange={inputValueChange}
            defaultValue={bookValue?.isbn}
            disabled={true}
            required
          />
        </fieldset>
        {/* book description field  */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
            Books Description
          </legend>
          <textarea
            name="description"
            className="textarea h-24 w-full"
            placeholder="book description"
            onChange={inputValueChange}
            defaultValue={bookValue?.description}
          ></textarea>
        </fieldset>
        {/* available book copies field  */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-[14px] font-medium text-[#023047]">
            Book Available copies
          </legend>
          <input
            name="copies"
            type="number"
            className="input w-full"
            placeholder="Book available copies"
            onChange={inputValueChange}
            defaultValue={bookValue?.copies}
            required
          />
        </fieldset>
        <button
          type="submit"
          className="btn bg-[#023047] text-[#FB8500] w-full"
        >
          Edit book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
