import { Link } from "react-router";
import BookTable from "../../../components/BookTable/BookTable";
import { useGetAllBooksQuery } from "../../../redux/services/booksServices";
import type { IBookModel } from "../../../tsInterface/bookInterface";

const HomeBooks = () => {
  const { data } = useGetAllBooksQuery({});
  return (
    <div className="container mx-auto py-10">
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-5">Book Shelf & Swap</h1>
        <p className="leading-8">
          Book Shelf & Swap offers a vibrant community space to
          <br /> exchange beloved books. Discover new reads, declutter your
          shelves, and connect <br />
          with fellow bookworms. It's sustainable, social, and simply satisfying
          for every literary soul.
        </p>
      </div>
      <div className="grid grid-cols-3 items-start gap-20">
        {data?.data.slice(0, 6).map((books: IBookModel, index: number) => (
          <BookTable books={books} key={index} />
        ))}
      </div>
      <Link to={"/allbooks"}>See All Books</Link>
    </div>
  );
};

export default HomeBooks;
