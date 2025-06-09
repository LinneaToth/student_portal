//Just a page telling the user that whatever they wanted to access wasn't there

export default function PageNotFound() {
  return (
    <main className="justify-content-center container-fluid">
      <h1 className="text-center mb-5 display-5 mb-5 mt-5">Page Not Found</h1>{" "}
      <h2 className="lead text-center">Oops! Nothing to see here!</h2>
    </main>
  );
}
