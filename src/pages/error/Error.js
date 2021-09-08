const Error = ({ navbarRef, headerRef, pageTitleRef }) => {

  const pageTitle = "Error";
  const active = null;

  // update page title
  document.title = `MIT Africans | ${pageTitle}`;

  return (
    <div className="app-container">
      <Header headerRef={headerRef} />
      <Navbar active={active} navbarRef={navbarRef} />
      <PageTitle title={pageTitle} pageTitleRef={pageTitleRef} />
      <div className="page-container">
        <div className="page-content">
          <div className="error-container">
            An Awful Error Happened
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

const domContainer = document.querySelector('#error-page');
ReactDOM.render(e(Error), domContainer);
