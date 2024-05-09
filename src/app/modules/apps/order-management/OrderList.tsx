import { useState } from "react";
import { KTIcon } from "../../../../_metronic/helpers";

export interface IOrderListProps {

}

export default function OrderList() {
  const [activeTab, setActiveTab] = useState("all");

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
        <div className="d-flex flex-column flex-column-fluid">
          <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6 ">
            <div
              id="kt_app_toolbar_container"
              className="app-container d-flex flex-stack container-fluid  "
            >
              <div
                id="kt_page_title"
                data-kt-swapper="true"
                data-kt-swapper-mode="prepend"
                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                className="page-title d-flex flex-wrap me-3 flex-column justify-content-center"
              >
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 my-0 flex-column justify-content-center">
                  Orders
                </h1>
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                  <li className="breadcrumb-item text-muted">
                    <a
                      className="text-muted text-hover-primary"
                      href="/apps/user-management/users"
                    >
                      Order Management
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <span className="bullet bg-gray-500 w-5px h-2px" />
                  </li>
                  <li className="breadcrumb-item text-gray-900">Orders list</li>
                </ul>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-3 ">
                <div className="">
                  <div className="d-flex align-items-center position-relative my-1">
                    <i className="ki-duotone ki-magnifier fs-1 position-absolute ms-6">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    <input
                      type="text"
                      data-kt-user-table-filter="search"
                      className="form-control form-control-solid w-250px ps-14 bg-white"
                      placeholder="Search Order Number"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            <div id="kt_app_content" className=" flex-column-fluid">
              <div
                id="kt_app_content_container"
                className="app-container container-fluid"
              >
                <div className="">
                  <ul className="nav nav-tabs ">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "all" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("all")}
                      >
                        All Orders
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "placed" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("placed")}
                      >
                       Order Placed 
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "confirmed" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("confirmed")}
                      >
                        Order Confirmed
                      </button>
                    </li><li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "processing" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("processing")}
                      >
                        Order Processing
                      </button>
                    </li><li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "sipped" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("sipped")}
                      >
                        Shipped
                      </button>
                    </li><li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "delivered" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("delivered")}
                      >
                        Delivered
                      </button>
                    </li><li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "canceled" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("canceled")}
                      >
                        Canceled
                      </button>
                    </li><li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "returned" ? "active text-primary" : "text-dark"
                        }  rounded-1`}
                        onClick={() => handleTabClick("returned")}
                      >
                        Returned
                      </button>
                    </li>
                  </ul>
                 
                </div>
              
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="kt_tab_pane_1"
                    role="tabpanel"
                  >
                    <div className="card" style={{ border: "aliceblue" }}>
                      <div className="card-header border-0 ">
                        <div className="card-toolbar">
                          <div
                            className="d-flex justify-content-end"
                            data-kt-user-table-toolbar="base"
                          >
                            <button
                              type="button"
                              className="btn btn-light-primary btn-sm me-3"
                            >
                              <i className="ki-duotone ki-exit-up fs-2">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                              Add New
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              <i className="ki-duotone ki-plus fs-2" />
                              Delete All
                            </button>
                          </div>
                        </div>
                        <div className="card-title">
                          <div className="card-toolbar">
                            <div
                              className="d-flex justify-content-end"
                              data-kt-user-table-toolbar="base"
                            >
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm me-3"
                              >
                                <i className="ki-duotone ki-exit-up fs-2">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                Print
                              </button>
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm me-3"
                              >
                                <i className="ki-duotone ki-exit-up fs-2">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                Export
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                <i className="ki-duotone ki-filter fs-2">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                Filter
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body py-4">
                        <div className="table-responsive">
                          {/* begin::Table */}
                          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                            {/* begin::Table head */}
                            <thead>
                              <tr className="fw-bold text-muted">
                                <th className="w-25px">
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value="1"
                                      data-kt-check="true"
                                      data-kt-check-target=".widget-13-check"
                                    />
                                  </div>
                                </th>
                                <th className="min-w-150px">Date</th>
                                <th className="min-w-140px">Order Number</th>
                                <th className="min-w-120px">Customer</th>
                                
                                <th className="min-w-120px">Order Status</th>
                                <th className="min-w-100px text-end">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input widget-13-check"
                                      type="checkbox"
                                      value="1"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    className="text-gray-900 fw-bold text-hover-primary fs-6"
                                  >
                                    16-jun-2024
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                                  >
                                    BB-001-56
                                  </a>
                                  
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                                  >
                                    MD. Abdullah
                                  </a>
                                  <span className="text-muted fw-semibold text-muted d-block fs-7">
                                    Phone: 0192345678
                                  </span>
                                </td>
                               
                               
                                <td>
                                  <span className="badge badge-light-success">
                                    Approved
                                  </span>
                                </td>
                                <td className="text-end">
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                  >
                                    <KTIcon
                                      iconName="switch"
                                      className="fs-3"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                  >
                                    <KTIcon
                                      iconName="pencil"
                                      className="fs-3"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                  >
                                    <KTIcon iconName="trash" className="fs-3" />
                                  </a>
                                </td>
                              </tr>
                              
                            </tbody>
                            {/* end::Table body */}
                          </table>
                          {/* end::Table */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
