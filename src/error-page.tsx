import { Link } from "react-router-dom";

export default function ErrorPage() {
  // const error: unknown = useRouteError();
  // console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center items-center h-screen bg-[#0a192f] w-full px-4"
    >
      <h1>Oops!</h1> <br />
      <p>Sorry, an unexpected error has occurred.</p>
      <br />
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
      <br />
      <Link className="block" to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
}
