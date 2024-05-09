import { KTIcon, toAbsoluteUrl } from "../../../../_metronic/helpers";
import { Dropdown1 } from "../../../../_metronic/partials";

export interface IOrderListProps {}

export default function OrderDetails() {
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
                            <h3>Order Number : #4895hfghj</h3>
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
                                className="btn btn-light-primary btn-sm me-1"
                              >
                                Order Modify
                              </button>
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm me-1"
                              >
                                Add Rider
                              </button>
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm me-1"
                              >
                                Status Update
                              </button>
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm me-1"
                              >
                                Order Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm me-1"
                              >
                                Order Confirm
                              </button>
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm me-1"
                              >
                                <i className="ki-duotone ki-exit-up fs-2">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                Export
                              </button>
                              <button
                                type="button"
                                className="btn btn-light-primary btn-sm"
                              >
                                <i className="ki-duotone ki-filter fs-2">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                Print
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="row gy-5 gx-xl-8">
                          <div className="col-xl-7  ">
                            <div
                              className={`card card-xxl-stretch mb-5 mb-xl-12`}
                            >
                              <div className="card-body py-3">
                                {/* begin::Table container */}
                                <div className="table-responsive">
                                  {/* begin::Table */}
                                  <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    {/* begin::Table head */}
                                    <thead>
                                      <tr className="fw-bold text-muted">
                                        <th className="min-w-150px">
                                          Items Summery
                                        </th>
                                        <th className="min-w-140px">QTY</th>
                                        <th className="min-w-120px">Price</th>
                                        <th className="min-w-120px">
                                          Total Price
                                        </th>
                                      </tr>
                                    </thead>
                                    {/* end::Table head */}
                                    {/* begin::Table body */}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            <div className="symbol symbol-45px me-5">
                                              <img
                                                src={toAbsoluteUrl(
                                                  "media/avatars/300-14.jpg"
                                                )}
                                                alt=""
                                              />
                                            </div>
                                            <div className="d-flex justify-content-start flex-column">
                                              <a
                                                href="#"
                                                className="text-gray-900 fw-bold text-hover-primary fs-6"
                                              >
                                                Ana card
                                              </a>
                                              <span className="text-muted fw-semibold text-muted d-block fs-7">
                                                Card details
                                              </span>
                                            </div>
                                          </div>
                                        </td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td>25</td>
                                      </tr>
                                    </tbody>
                                    {/* end::Table body */}
                                  </table>
                                  {/* end::Table */}
                                </div>
                                {/* end::Table container */}
                              </div>
                              {/* begin::Body */}
                            </div>
                          
                            
                          </div>
                          <div className="col-xl-5 mt-5 row">
                            <div className={`card card-xxl-stretch mb-xl-3 col-xl-12`}>
                              {/* begin::Header */}
                              <div className="card-header border-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  Rider Details
                                </h3>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-2">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Rider Name
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 2 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <button className="btn btn-light-success fs-8 fw-bold">
                                    Track Rider
                                  </button>
                                </div>
                              </div>
                              {/* end::Body */}
                            </div>
                            <div className={`card card-xxl-stretch mb-xl-3`}>
                              {/* begin::Header */}
                              <div className="card-header border-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  Rider etails
                                </h3>
                                <div className="card-toolbar">
                                  {/* begin::Menu */}
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-flip="top-end"
                                  >
                                    <KTIcon
                                      iconName="category"
                                      className="fs-2"
                                    />
                                  </button>
                                  <Dropdown1 />
                                  {/* end::Menu */}
                                </div>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-2">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Create FireStone Logo
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 2 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-success fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-primary"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Stakeholder Meeting
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 3 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-primary fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-warning"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Scoping &amp; Estimations
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 5 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-warning fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-primary"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      KPI App Showcase
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 2 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-primary fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-danger"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Project Meeting
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 12 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-danger fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Customers Update
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 1 week
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-success fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                              </div>
                              {/* end::Body */}
                            </div>
                            <div className={`card card-xxl-stretch mb-xl-3 col-xl-12`}>
                              {/* begin::Header */}
                              <div className="card-header border-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  In Total
                                </h3>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-2">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Create FireStone Logo
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 2 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                 
                                </div>
                              </div>
                              {/* end::Body */}
                            </div>
                            <div className={`card card-xxl-stretch mb-xl-3`}>
                              {/* begin::Header */}
                              <div className="card-header border-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  Shipping / Delivery Address
                                </h3>
                                <div className="card-toolbar">
                                  {/* begin::Menu */}
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                    data-kt-menu-flip="top-end"
                                  >
                                    <KTIcon
                                      iconName="category"
                                      className="fs-2"
                                    />
                                  </button>
                                  <Dropdown1 />
                                  {/* end::Menu */}
                                </div>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-2">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Create FireStone Logo
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 2 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-success fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-primary"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Stakeholder Meeting
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 3 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-primary fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-warning"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Scoping &amp; Estimations
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 5 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-warning fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-primary"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      KPI App Showcase
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 2 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-primary fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-danger"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Project Meeting
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 12 Days
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-danger fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Customers Update
                                    </a>
                                    <span className="text-muted fw-semibold d-block">
                                      Due in 1 week
                                    </span>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-success fs-8 fw-bold">
                                    New
                                  </span>
                                </div>
                                {/* end:Item */}
                              </div>
                              {/* end::Body */}
                            </div>
                          </div>
                          
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
