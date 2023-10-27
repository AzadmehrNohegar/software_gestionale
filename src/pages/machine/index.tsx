import { Fragment, useState } from "react";
import { Dialog } from "../../components/dialog";

function Machine() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap"
        >
          <h3 className="text-white fw-bolder fs-2qx me-5">Machin</h3>
          <div className="d-flex align-items-center flex-wrap py-2">
            <button
              className="btn btn-light  my-2"
              onClick={() => setIsOpen(true)}
            >
              <i className="bi bi-plus-square fs-2"></i>
              Nuova Risorsa
            </button>
          </div>
        </div>
      </div>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl"
      >
        <div className="content flex-row-fluid" id="kt_content">
          <div className="card card-page">
            <div className="card-body bg-white">
              <div className="py-5">
                <div className="table-responsive">
                  <table className="table table-row-bordered table-row-gray-300 gy-7 table-flush border">
                    <thead>
                      <tr className="fw-bold fs-6 bg-light text-light-secondary">
                        <th className="border-start px-10 col-md-4">ID</th>
                        <th className="border-start px-10 col-md-8">Nome </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-start px-10">999999</td>
                        <td className="border-start px-10">ALAGNA</td>
                        <td className="border-start px-10">
                          <a
                            className="btn p-0"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_edit_app"
                          >
                            <i className="bi bi-pencil-square fs-1 text-warning"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ul className="pagination">
                    <li className="page-item previous disabled">
                      <a className="page-link">
                        <i className="previous"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link">2</a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link">3</a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link">...</a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link">5</a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link">6</a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link">
                        <i className="next"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <Dialog.Panel>
          <div
            className="modal-content text-start"
            style={{ width: "60vw", maxWidth: "100vw" }}
          >
            <div className="modal-header">
              <h2>Nuova Risorsa</h2>
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span
                  className="svg-icon svg-icon-1"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="6"
                      y="17.3137"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-45 6 17.3137)"
                      fill="black"
                    />
                    <rect
                      x="7.41422"
                      y="6"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(45 7.41422 6)"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="modal-body py-lg-5 px-lg-10">
              <div
                className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                id="kt_modal_create_app_stepper"
              >
                <div className="flex-row-fluid  px-lg-15">
                  <form
                    className="form"
                    noValidate
                    id="kt_modal_create_app_form"
                  >
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="form-group row">
                          <div className="col-md-12">
                            <label className="form-label">Nome:</label>
                            <input
                              type="text"
                              className="form-control mb-2 mb-md-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-stack pt-5">
                      <div className="me-2">
                        <button
                          type="button"
                          disabled
                          className="btn btn-lg btn-light-primary me-3"
                          data-kt-stepper-action="previous"
                        >
                          <span className="svg-icon svg-icon-3 me-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x="6"
                                y="11"
                                width="13"
                                height="2"
                                rx="1"
                                fill="black"
                              ></rect>
                              <path
                                d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-lg btn-success"
                        >
                          Salva
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Fragment>
  );
}

export default Machine;
