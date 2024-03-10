import { Link } from "react-router-dom";

export default function ErrorPage() {
  // const error: unknown = useRouteError();
  // console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center items-center h-screen bg-[#0a192f] w-full px-4 flex-col"
    >
      <div className="block">
        <p>Oops! Sorry, an unexpected error has occurred.</p>
        <br />
        <p>{/* <i>{error.statusText || error.message}</i> */}</p>
        <br />
      </div>
      <div className="block">
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
}
