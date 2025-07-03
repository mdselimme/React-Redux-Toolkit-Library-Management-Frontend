import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBook from "../Pages/AddBook/AddBook";
import BorrowSummary from "../Pages/BorrowSummary/BorrowSummary";
import BookDetails from "../components/BookDetails/BookDetails";
import EditBook from "../Pages/EditBook/EditBook";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/allbooks",
        Component: AllBooks,
      },
      {
        path: "/book/:id",
        Component: BookDetails,
      },
      {
        path: "/edit-book/:id",
        Component: EditBook,
      },
      {
        path: "/addbook",
        Component: AddBook,
      },
      {
        path: "/borrowsummary",
        Component: BorrowSummary,
      },
    ],
  },
]);
