import { useParams } from "react-router";
import { useGetABookQuery } from "../../redux/services/booksServices";

const EditBook = () => {
  const { id } = useParams();

  const { data, error } = useGetABookQuery(id);

  console.log(data, error);

  console.log(id);

  return (
    <div>
      <h1>book details {id}</h1>
    </div>
  );
};

export default EditBook;
