import Page from "./paginator_conts/Page";

function Paginator() {
  return (
    <div className="container ms-0 mt-0">
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li>{Array.from(Array(10)).map(x => 
            (
              <Page 
                count={x}
              \>
            ))}
            </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginator;
