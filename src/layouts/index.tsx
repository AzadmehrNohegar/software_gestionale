import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <Fragment>
      <header
        id="kt_header"
        className="header align-items-stretch"
        data-kt-sticky="true"
        data-kt-sticky-name="header"
        data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      >
        <div className="container-xxl d-flex align-items-center">
          <div
            className="d-flex align-items-center d-lg-none ms-n2 me-3"
            title="Show aside menu"
          ></div>
          <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
            <a href="../dist/index.html" className="text-white">
              Software Gestionale
            </a>
          </div>
          <div className="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
            <a href="../dist/index.html" className="text-white"></a>
          </div>
          <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
            <div className="d-flex align-items-stretch" id="kt_header_nav">
              <div
                className="header-menu align-items-stretch"
                data-kt-drawer="true"
                data-kt-drawer-name="header-menu"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
                data-kt-swapper="true"
                data-kt-swapper-mode="prepend"
                data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
              >
                <div
                  className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
                  id="#kt_header_menu"
                  data-kt-menu="true"
                >
                  <div className="menu-item menu-lg-down-accordion me-lg-1">
                    <a className="menu-link py-3" href="../">
                      <span className="menu-title text-white">Dashboard</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </a>
                  </div>
                  <div className="menu-item    menu-lg-down-accordion me-lg-1">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "menu-link py-3 bg-white bg-opacity-10"
                          : "menu-link py-3"
                      }
                      to="/personal-info"
                    >
                      <span className="menu-title text-white">
                        Personal Info{" "}
                      </span>
                      <span className="menu-arrow d-lg-none"></span>
                    </NavLink>
                  </div>
                  <div className="menu-item menu-lg-down-accordion me-lg-1">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "menu-link py-3 bg-white bg-opacity-10"
                          : "menu-link py-3"
                      }
                      to="/esigenze-formative"
                    >
                      <span className="menu-title text-white">
                        Esigenze Formative
                      </span>
                      <span className="menu-arrow d-lg-none"></span>
                    </NavLink>
                  </div>
                  <div className="menu-item menu-lg-down-accordion me-lg-1">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "menu-link py-3 bg-white bg-opacity-10"
                          : "menu-link py-3"
                      }
                      to="/"
                    >
                      <span className="menu-title text-white">Standard </span>
                      <span className="menu-arrow d-lg-none"></span>
                    </NavLink>
                  </div>
                  <div className="menu-item menu-lg-down-accordion me-lg-1">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "menu-link py-3 bg-white bg-opacity-10"
                          : "menu-link py-3"
                      }
                      to="/gestione-standard"
                    >
                      <span className="menu-title text-white">
                        Gestione Standard
                      </span>
                      <span className="menu-arrow d-lg-none"></span>
                    </NavLink>
                  </div>

                  <div className="menu-item menu-lg-down-accordion me-lg-1">
                    <a className="menu-link py-3">
                      <span className="menu-title text-white">
                        Storico formazione
                      </span>
                      <span className="menu-arrow d-lg-none"></span>
                    </a>
                  </div>
                  <div className="menu-item menu-lg-down-accordion me-lg-1">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "menu-link py-3 bg-white bg-opacity-10"
                          : "menu-link py-3"
                      }
                      to="/machine"
                    >
                      <span className="menu-title text-white">Machine</span>
                      <span className="menu-arrow d-lg-none"></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
        <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="text-dark order-2 order-md-1">
            <span className="text-muted fw-bold me-1">2021©</span>
            <a
              href="https://keenthemes.com"
              target="_blank"
              className="text-gray-800 text-hover-primary"
            >
              Stefano
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { DashboardLayout };
