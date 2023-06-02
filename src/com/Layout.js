import React, { useState } from "react";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <div className="row">
            <div className="col-2 py-2 border-end">
              <Sidebar />
            </div>
            <div className="col-10">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
const Navbar = () => {
  const [dir, setDir] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        {dir ? (
          <button
            className="btn btn-success"
            onClick={() => {
              setDir(!dir);
              document.documentElement.setAttribute("dir", "rtl");
              console.log("Hello Sub");
            }}
          >
            Left
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              setDir(!dir);
              document.documentElement.setAttribute("dir", "ltr");
            }}
          >
            Right
          </button>
        )}
      </div>
    </nav>
  );
};
const Content = () => {
  return (
    <>
      <div className="tab-content" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          tabIndex="0"
        >
          <h1>Home</h1>
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-about"
          role="tabpanel"
          aria-labelledby="v-pills-about-tab"
          tabIndex="0"
        >
          <h1>About Me</h1>
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
          tabIndex="0"
        >
          <h1>Profile</h1>
        </div>

        <div
          className="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
          tabIndex="0"
        >
          <h1>Message</h1>
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
          tabIndex="0"
        >
          <h1>Setting</h1>
        </div>
      </div>
    </>
  );
};
const Sidebar = () => {
  return (
    <>
      <div
        className="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Home
        </button>
        <button
          className="nav-link"
          id="v-pill-about-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-about"
          type="button"
          role="tab"
          aria-controls="v-pills-about"
          aria-selected="true"
        >
          About Me
        </button>
        <button
          className="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Profile
        </button>

        <button
          className="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Messages
        </button>
        <button
          className="nav-link"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Settings
        </button>
      </div>
    </>
  );
};
