import { useRouteError } from "react-router-dom";

export default function Error() {
  useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
