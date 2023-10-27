import { Fragment, useState } from "react";
import { Dialog } from "../../components/dialog";

function Standard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap"
        >
          <h3 className="text-white fw-bolder fs-2qx me-5">Standard</h3>
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
                      <tr className="fw-bold fs-13 bg-light text-light-secondary">
                        <th className="border-start px-2">TIPOLOGIE</th>
                        <th className="border-start px-2 min-w-200">CODICE</th>
                        <th className="border-start px-2 min-w-300">
                          DENOMINAZIONE
                        </th>
                        <th className="border-start px-2">Emissione</th>
                        <th className="border-start px-2">Vision</th>
                        <th className="border-start px-2">Coordinatore</th>
                        <th className="border-start px-2">Validazione</th>
                        <th className="border-start px-2">Durata</th>
                        <th className="border-start px-2">Sicurezza</th>
                        <th className="border-start px-2">Qualita</th>
                        <th className="border-start px-2">Produzione</th>
                        <th className="border-start px-2">Management</th>

                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_machine"
                      >
                        <td className="border-start px-2"></td>
                        <td className="border-start px-2">WI 46.21</td>
                        <td className="border-start px-2">
                          FUNZIONAMENTO APPARECCHIO UOMO A TERRA
                        </td>
                        <td className="border-start px-2">2013/04/30</td>
                        <td className="border-start px-2">0</td>
                        <td className="border-start px-2">RSPP</td>
                        <td className="border-start px-2"></td>
                        <td className="border-start px-2">0.2</td>
                        <td className="border-start px-2">Si</td>
                        <td className="border-start px-2">No</td>
                        <td className="border-start px-2">No</td>
                        <td className="border-start px-2">No</td>
                        <td className="border-start px-2">
                          <button
                            className="btn p-0"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_edit_app"
                          >
                            <i className="bi bi-pencil-square fs-1 text-warning"></i>
                          </button>
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
          <div className="modal-content text-start">
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
                    noValidate={true}
                    id="kt_modal_create_app_form"
                  >
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="form-group row">
                          <div className="col-md-6">
                            <label className="form-label">TIPOLOGIE STD:</label>
                            <select
                              className="form-select form-select-solid bg-white"
                              data-control="select"
                              data-placeholder="Select an option"
                              data-hide-search="true"
                            >
                              <option data-select2-id="select2-data-9-fkcc"></option>
                              <option
                                value="all"
                                data-select2-id="select2-data-135-2vpq"
                              >
                                ASR RISCHIO ALTO - MODULO 3 - Anzio -
                                aggiornamento
                              </option>
                              <option
                                value="Manager"
                                data-select2-id="select2-data-136-bivo"
                              >
                                CARRELLI ELEVATORI - Modulo pratico (secondo
                                ASR) - Anzio - aggiornamento
                              </option>
                              <option
                                value="Senior Manager"
                                data-select2-id="select2-data-137-3udq"
                              >
                                PROVA ANNUALE EVACUAZIONE - Anzio -
                                aggiornamento
                              </option>
                              <option
                                value="Director"
                                data-select2-id="select2-data-138-kyn8"
                              >
                                ASR RISCHIO BASSO - MODULO 1 - Anzio -
                                aggiornamento
                              </option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              DENOMINAZIONE STANDARD WORK:
                            </label>
                            <input
                              type="text"
                              className="form-control mb-2 mb-md-0"
                            />
                          </div>
                        </div>
                        <div className="form-group row mt-5">
                          <div className="col-md-6">
                            <label className="form-label">Emissione:</label>
                            <input
                              className="form-control"
                              placeholder="Pick a date"
                              id="kt_datepicker_nas-edit"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Coordinatore:</label>
                            <select
                              className="form-select form-select-solid bg-white"
                              data-control="select"
                              data-placeholder="Select an option"
                              data-hide-search="true"
                            >
                              <option data-select2-id="select2-data-9-fkcc"></option>
                              <option
                                value="all"
                                data-select2-id="select2-data-135-2vpq"
                              >
                                ASR RISCHIO ALTO - MODULO 3 - Anzio -
                                aggiornamento
                              </option>
                              <option
                                value="Manager"
                                data-select2-id="select2-data-136-bivo"
                              >
                                CARRELLI ELEVATORI - Modulo pratico (secondo
                                ASR) - Anzio - aggiornamento
                              </option>
                              <option
                                value="Senior Manager"
                                data-select2-id="select2-data-137-3udq"
                              >
                                PROVA ANNUALE EVACUAZIONE - Anzio -
                                aggiornamento
                              </option>
                              <option
                                value="Director"
                                data-select2-id="select2-data-138-kyn8"
                              >
                                ASR RISCHIO BASSO - MODULO 1 - Anzio -
                                aggiornamento
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row mt-5">
                          <div className="col-md-6">
                            <label className="form-label">Validazione:</label>
                            <select
                              className="form-select form-select-solid bg-white"
                              data-control="select"
                              data-placeholder="Select an option"
                              data-hide-search="true"
                            >
                              <option data-select2-id="select2-data-9-fkcc"></option>
                              <option
                                value="all"
                                data-select2-id="select2-data-135-2vpq"
                              >
                                ASR RISCHIO ALTO - MODULO 3 - Anzio -
                                aggiornamento
                              </option>
                              <option
                                value="Manager"
                                data-select2-id="select2-data-136-bivo"
                              >
                                CARRELLI ELEVATORI - Modulo pratico (secondo
                                ASR) - Anzio - aggiornamento
                              </option>
                              <option
                                value="Senior Manager"
                                data-select2-id="select2-data-137-3udq"
                              >
                                PROVA ANNUALE EVACUAZIONE - Anzio -
                                aggiornamento
                              </option>
                              <option
                                value="Director"
                                data-select2-id="select2-data-138-kyn8"
                              >
                                ASR RISCHIO BASSO - MODULO 1 - Anzio -
                                aggiornamento
                              </option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">
                              Tempo formazione HH:
                            </label>
                            <input
                              type="number"
                              className="form-control mb-2 mb-md-0"
                            />
                          </div>
                        </div>
                        <div className="form-group row mt-5">
                          <div className="col-md-4">
                            <label className="form-label">Safety:</label>
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value=""
                                id="flexCheckDefault1"
                                name="radio2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault1"
                              >
                                Yes
                              </label>
                              <input
                                className="form-check-input ms-5"
                                type="radio"
                                value=""
                                id="flexCheckChecked1"
                                name="radio2"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked1"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Quality:</label>
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value=""
                                id="flexCheckDefault1"
                                name="radio3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault1"
                              >
                                Yes
                              </label>
                              <input
                                className="form-check-input ms-5"
                                type="radio"
                                value=""
                                id="flexCheckChecked1"
                                name="radio3"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked1"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Production:</label>
                            <div>
                              <input
                                className="form-check-input"
                                type="radio"
                                value=""
                                id="flexCheckDefault1"
                                name="radio1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault1"
                              >
                                Yes
                              </label>
                              <input
                                className="form-check-input ms-5"
                                type="radio"
                                value=""
                                id="flexCheckChecked1"
                                name="radio1"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked1"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row mt-5">
                          <div className="col-md-6">
                            <label className="form-label">Management:</label>
                            <input
                              type="text"
                              className="form-control mb-2 mb-md-0"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Vision:</label>
                            <input
                              type="text"
                              className="form-control mb-2 mb-md-0"
                            />
                          </div>
                        </div>
                        <div className="form-group row mt-5">
                          <div id="kt_docs_repeater_basic-edit">
                            <div className="form-group">
                              <div data-repeater-list="kt_docs_repeater_basic">
                                <div data-repeater-item>
                                  <div className="form-group row">
                                    <div className="col-md-11">
                                      <label className="form-label">
                                        Machine:
                                      </label>
                                      <select
                                        className="form-select form-select-solid bg-white"
                                        data-control="select"
                                        data-placeholder="Select an option"
                                        data-hide-search="true"
                                      >
                                        <option data-select2-id="select2-data-9-fkcc"></option>
                                        <option
                                          value="all"
                                          data-select2-id="select2-data-135-2vpq"
                                        >
                                          ASR RISCHIO ALTO - MODULO 3 - Anzio -
                                          aggiornamento
                                        </option>
                                        <option
                                          value="Manager"
                                          data-select2-id="select2-data-136-bivo"
                                        >
                                          CARRELLI ELEVATORI - Modulo pratico
                                          (secondo ASR) - Anzio - aggiornamento
                                        </option>
                                        <option
                                          value="Senior Manager"
                                          data-select2-id="select2-data-137-3udq"
                                        >
                                          PROVA ANNUALE EVACUAZIONE - Anzio -
                                          aggiornamento
                                        </option>
                                        <option
                                          value="Director"
                                          data-select2-id="select2-data-138-kyn8"
                                        >
                                          ASR RISCHIO BASSO - MODULO 1 - Anzio -
                                          aggiornamento
                                        </option>
                                      </select>
                                    </div>

                                    <div className="col-md-1">
                                      <a
                                        href="javascript:;"
                                        data-repeater-delete
                                        className="btn btn-sm btn-light-danger mt-5 mt-md-9 btn-icon"
                                      >
                                        <span className="svg-icon svg-icon-1">
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
                                      </a>
                                    </div>
                                  </div>
                                  <div className="form-group row"></div>
                                </div>
                              </div>
                            </div>

                            <div className="form-group mt-5">
                              <a
                                href="javascript:;"
                                data-repeater-create
                                className="btn btn-light-primary"
                              >
                                Add
                              </a>
                            </div>
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

export default Standard;
