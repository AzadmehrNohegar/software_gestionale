import { Fragment } from "react";

function Esigenze() {
  return (
    <Fragment>
      <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
        <div
          id="kt_toolbar_container"
          className="container-xxl d-flex flex-stack flex-wrap"
        >
          <h3 className="text-white fw-bolder fs-2qx me-5">
            Esigenze Formative
          </h3>
          <div className="d-flex align-items-center flex-wrap py-2">
            <form
              data-kt-search-element="form"
              className="w-100 position-relative"
            >
              <input type="hidden" />

              <i className="bi bi-search fs-2 text-white search-icon position-absolute top-50 translate-middle-y ms-4">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>

              <input
                type="text"
                className="form-control bg-transparent ps-12"
                name="search"
                value=""
                placeholder="Search"
                data-kt-search-element="input"
              />

              <span
                className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                data-kt-search-element="spinner"
              >
                <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
              </span>

              <span
                className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                data-kt-search-element="clear"
              >
                <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>{" "}
              </span>
            </form>
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
              <div>
                <div className="table-responsive">
                  <table className="table table-row-bordered table-row-gray-300 gy-7 table-flush border">
                    <thead>
                      <tr className="fw-bold fs-6 bg-light text-light-secondary">
                        <th className="px-5 min-w-300px">Cognome</th>
                        <th className="min-w-300px border-start px-10">Nome</th>
                        <th className="min-w-200px border-start px-10">
                          Macchina
                        </th>
                        <th className="min-w-100px border-start px-10">
                          Codice
                        </th>
                        <th className="min-w-200px border-start px-10">
                          Procedura
                        </th>
                        <th className="min-w-200px border-start px-10">
                          Data emissione
                        </th>
                        <th className="min-w-50px border-start px-10">
                          Vision
                        </th>
                        <th className="min-w-100px border-start px-10">
                          Coordinatore
                        </th>
                        <th className="min-w-100px border-start px-10">
                          Validazione
                        </th>
                        <th className="min-w-200px border-start px-10">
                          Prossima formazione
                        </th>
                        <th className="min-w-50px border-start px-10">Tempo</th>
                        <th className="px-10 min-w-50px"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5">BIANCO</td>
                        <td className="border-start px-10">PAOLO </td>
                        <td className="border-start px-10">924</td>
                        <td className="border-start px-10">1</td>
                        <td className="border-start px-10">MISURA RACLE </td>
                        <td className="border-start px-10">2018/07/20 </td>
                        <td className="border-start px-10">0</td>
                        <td className="border-start px-10">P&PC </td>
                        <td className="border-start px-10">ANNUALE </td>
                        <td className="border-start px-10">2019/07/20 </td>
                        <td className="border-start px-10">0.2 </td>

                        <td className=" border-start px-10">
                          <button
                            className="btn p-0 "
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_done_app"
                          >
                            <i className="bi bi-check2-square text-success fs-1"></i>
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5">BIANCO</td>
                        <td className="border-start px-10">PAOLO </td>
                        <td className="border-start px-10">924</td>
                        <td className="border-start px-10">1</td>
                        <td className="border-start px-10">MISURA RACLE </td>
                        <td className="border-start px-10">2018/07/20 </td>
                        <td className="border-start px-10">0</td>
                        <td className="border-start px-10">P&PC </td>
                        <td className="border-start px-10">ANNUALE </td>
                        <td className="border-start px-10">2019/07/20 </td>
                        <td className="border-start px-10">0.2 </td>

                        <td className=" border-start px-10">
                          <button className="btn p-0 ">
                            <i className="bi bi-check2-square text-success fs-1"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5">BIANCO</td>
                        <td className="border-start px-10">PAOLO </td>
                        <td className="border-start px-10">924</td>
                        <td className="border-start px-10">1</td>
                        <td className="border-start px-10">MISURA RACLE </td>
                        <td className="border-start px-10">2018/07/20 </td>
                        <td className="border-start px-10">0</td>
                        <td className="border-start px-10">P&PC </td>
                        <td className="border-start px-10">ANNUALE </td>
                        <td className="border-start px-10">2019/07/20 </td>
                        <td className="border-start px-10">0.2 </td>

                        <td className=" border-start px-10">
                          <button className="btn p-0 ">
                            <i className="bi bi-check2-square text-success fs-1"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <ul className="pagination pt-10">
                <li className="page-item previous disabled">
                  <a className="page-link">
                    <i className="previous"></i>
                  </a>
                </li>
                <li className="page-item ">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item active">
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
    </Fragment>
  );
}

export default Esigenze;
