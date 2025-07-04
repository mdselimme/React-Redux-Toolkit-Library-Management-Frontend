import { useGetAllBorrowsQuery } from "../../redux/services/borrowServices";
import type { IBorrowBookSummary } from "../../tsInterface/bookInterface";

const BorrowSummary = () => {
  const { data: borrowBookData } = useGetAllBorrowsQuery({});

  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-5">
        Borrow Summary
      </h1>
      <div className="container mx-auto mb-10 mt-3 px-5 py-10 shadow-2xl">
        <div className="overflow-x-auto border">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Book Summary No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Total Quantity</th>
              </tr>
            </thead>
            <tbody>
              {borrowBookData?.data.length !== 0 ? (
                borrowBookData?.data.map(
                  (borrow: IBorrowBookSummary, index: number) => (
                    <tr key={index} className="text-center">
                      <th>{index + 1}</th>
                      <td>{borrow?.book.title}</td>
                      <td>{borrow?.book.author}</td>
                      <td>{borrow?.book.isbn}</td>
                      <td>{borrow?.totalQuantity}</td>
                    </tr>
                  )
                )
              ) : (
                <tr className="text-center">
                  <td colSpan={7} className="font-bold">
                    No Borrow Book List Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BorrowSummary;
