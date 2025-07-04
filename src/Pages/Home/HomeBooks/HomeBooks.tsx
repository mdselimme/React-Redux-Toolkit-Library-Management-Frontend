import { Link } from "react-router";
import BookTable from "../../../components/BookTable/BookTable";
import { useGetAllBooksQuery } from "../../../redux/services/booksServices";
import type { IBookModel } from "../../../tsInterface/bookInterface";

const HomeBooks = () => {
  const { data } = useGetAllBooksQuery({});
  return (
    <div className="container mx-auto py-10">
      <div className="py-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-5">
          Book Shelf & Swap
        </h1>
        <p className="leading-8 md:w-[48rem] mx-auto">
          Book Shelf & Swap offers a vibrant community space to exchange beloved
          books. Discover new reads, declutter your shelves, and connect with
          fellow bookworms. It's sustainable, social, and simply satisfying for
          every literary soul.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 items-start gap-20">
        {data?.data.slice(0, 6).map((books: IBookModel, index: number) => (
          <BookTable books={books} key={index} />
        ))}
      </div>
      <div className="text-center pt-8">
        <Link to={"/books"}>
          <button className="bg-[#023047] cursor-pointer text-white py-2.5 rounded-sm px-8">
            See All Books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBooks;
