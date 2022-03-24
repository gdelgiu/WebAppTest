var count;

function Page() {
  return (
    <li className="page-item">
      <a className="page-link" href="#">
        {this.count};
      </a>
    </li>
  );
}

export default Page;
