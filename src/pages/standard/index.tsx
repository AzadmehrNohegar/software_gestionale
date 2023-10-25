import { Fragment } from "react";

function Standard() {
  return (
    <Fragment>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap"
        >
          <h3 className="text-white fw-bolder fs-2qx me-5">Standard</h3>
          <div className="d-flex align-items-center flex-wrap py-2">
            <a
              className="btn btn-light  my-2"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
            >
              <i className="bi bi-plus-square fs-2"></i>
              Nuova Risorsa
            </a>
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
    </Fragment>
  );
}

export default Standard;
