import { useRef, type ChangeEvent, type FormEvent } from "react";
import type { IBookModel } from "../../tsInterface/bookInterface";
import { useCreateABookMutation } from "../../redux/services/booksServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { errorPrint } from "../../components/errorMessage/errorMessage";

const AddBook = () => {
  const navigate = useNavigate();

  // book initial ref
  const formRef = useRef<IBookModel>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 0,
  });

  // create book in database
  const [createAbook, { data, error }] = useCreateABookMutation();

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
      if (Number(value) <= 0) {
        errorPrint("Copies Must be Greater than 0");
      }
      formRef.current.copies = Number(value);
    } else if (key === "genre") {
      formRef.current.genre = value as IBookModel["genre"];
    } else {
      formRef.current[key] = value;
    }
  };

  // genre for select
  const genreList = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  // add book form event
  const handleAddBook = (e: FormEvent) => {
    e.preventDefault();
    formRef.current.available = true;
    createAbook(formRef.current);
  };

  return (
    <div className="w-full md:w-[35rem] mx-auto shadow-2xl p-8 my-8">
      <h1 className="text-3xl font-extrabold text-center text-[#FB8500]">
        Add Book
      </h1>
      <form onSubmit={handleAddBook}>
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
            defaultValue="Pick a genre"
            className="select w-full"
            onChange={inputValueChange}
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
            Book Isbn Number
          </legend>
          <input
            name="isbn"
            type="text"
            className="input w-full"
            placeholder="Book isbn number type here"
            onChange={inputValueChange}
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

export default AddBook;
