import { useParams } from "react-router";
import {
  useGetABookQuery,
  useUpdateABookMutation,
} from "../../redux/services/booksServices";
import { useRef, type ChangeEvent, type FormEvent } from "react";
import type { IBookModel } from "../../tsInterface/bookInterface";
import Swal from "sweetalert2";

const EditBook = () => {
  // book data id
  const { id } = useParams();

  // get book data by id  from database
  const { data: bookGetData } = useGetABookQuery(id);

  // form initial ref
  const formRef = useRef<IBookModel>({
    title: bookGetData?.data.title,
    author: bookGetData?.data.author,
    genre: bookGetData?.data.genre,
    isbn: bookGetData?.data.isbn,
    description: bookGetData?.data.description,
    copies: bookGetData?.data.copies,
  });

  // update data mutation from book services
  const [updateBook, { data, error }] = useUpdateABookMutation();

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

  // type for fieldcheck error
  type FieldName =
    | "title"
    | "author"
    | "genre"
    | "isbn"
    | "description"
    | "copies";

  // input value change
  const inputValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as FieldName;
    if (key === "copies") {
      formRef.current.copies = Number(value);
    } else if (key === "genre") {
      formRef.current.genre = value as IBookModel["genre"];
    } else {
      formRef.current[key] = value;
    }
  };

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
    updateBook({ bookData: formRef.current, bookId: bookGetData?.data._id });
  };

  return (
    <div className="w-[35rem] mx-auto shadow-2xl p-8 my-8">
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
            defaultValue={formRef.current?.title}
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
            defaultValue={formRef.current?.author}
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
            defaultValue={formRef.current?.genre}
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
            defaultValue={formRef.current?.isbn}
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
            defaultValue={formRef.current?.description}
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
            defaultValue={formRef.current?.copies}
            required
          />
        </fieldset>
        <button
          type="submit"
          className="btn bg-[#023047] text-[#FB8500] w-full"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
