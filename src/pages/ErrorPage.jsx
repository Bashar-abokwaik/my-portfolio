import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
    return (
        <div className="error-page-container">
            <h1 className="error-title">An Unexpected Error Occurred</h1>
            <p className="error-message">{error.statusText || error.message}</p>
        </div>
    );
}  