import * as moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "./_ordereDetailsRequests";

export interface IOrderListProps {}

export default function OrderDetails() {
  const { id } = useParams();
  const [orderInfo, setOrderInfo] = useState<any>();
  useEffect(() => {
    fetchOrderList();
  }, [id]);

  const fetchOrderList = async () => {
    const res = await getOrderDetails({
      pOrderId: id,
    });
    setOrderInfo(res.resRecord);
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
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="kt_tab_pane_1"
                    role="tabpanel"
                  >
                    <div
                      className="card bg-light"
                      style={{ border: "aliceblue" }}
                    >
                      <div className="card-header border-0 ">
                        <div className="card-toolbar">
                          <div
                            className="d-flex justify-content-end"
                            data-kt-user-table-toolbar="base"
                          >
                            <h3>Order Number : {orderInfo?.orderNumber}</h3>
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
                          <div className="col-xl-7 mt-5 me-1 row ">
                            <div className={`card card-xxl-stretch mb-xl-3`}>
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
                                      {orderInfo?.orderItems &&
                                        orderInfo?.orderItems?.map(
                                          (item, i) => (
                                            <>
                                              <tr>
                                                <td>
                                                  <div className="d-flex align-items-center">
                                                    <div className="symbol symbol-45px me-5">
                                                      {/* <img
                                                src={toAbsoluteUrl(
                                                  "media/avatars/300-14.jpg"
                                                )}
                                                alt=""
                                              /> */}
                                                    </div>
                                                    <div className="d-flex justify-content-start flex-column">
                                                      <a
                                                        href="#"
                                                        className="text-gray-900 fw-bold text-hover-primary fs-6"
                                                      >
                                                        item name
                                                      </a>
                                                      <span className="text-muted fw-semibold text-muted d-block fs-7">
                                                        item details
                                                      </span>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td>25</td>
                                              </tr>
                                            </>
                                          )
                                        )}
                                    </tbody>
                                    {/* end::Table body */}
                                  </table>
                                  {/* end::Table */}
                                </div>
                                {/* end::Table container */}
                              </div>
                              {/* begin::Body */}
                            </div>
                            <div className={`card card-xxl-stretch`}>
                              {/* begin::Header */}
                              <div className="card-header border-0 pb-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  Customer Details{" "}
                                </h3>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-0">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Name
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.customerName}</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Phone
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.mobile}</span>
                                </div>
                                {/* end:Item */}

                                {/* begin::Item */}
                                <div className="d-flex align-items-center">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Email
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.email}</span>
                                </div>
                                {/* end:Item */}
                              </div>
                              {/* end::Body */}
                            </div>
                          </div>
                          <div className="col-xl-5 mt-5 row">
                            <div
                              className={`card card-xxl-stretch mb-xl-3 col-xl-12`}
                            >
                              {/* begin::Header */}
                              <div className="card-header border-0 pb-0 ">
                                <h3 className="card-title fw-bold text-gray-900 p-0">
                                  Rider Details
                                </h3>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-0">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center">
                                  {/* begin::Bullet */}
                                  <span className="bullet bullet-vertical h-40px bg-success"></span>
                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
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
                              <div className="card-header border-0 pb-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  Order Summary{" "}
                                </h3>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-0">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Order Created
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{moment(orderInfo?.orderCreateDate).format('dddd, MMMM D, YYYY')}</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Order Time
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{moment(orderInfo?.orderCreateTime).format('dddd, MMMM D, YYYY')}</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Order Status
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-success fs-8 fw-bold">
                                    {orderInfo?.orderStatus}
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Payment Type
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.paymentType}</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Payment Status
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className="badge badge-light-warning fs-8 fw-bold">
                                    {orderInfo?.paymentStatus}
                                  </span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Sub Total
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">New</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Delivery Fee
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">New</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Discount
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">New</span>
                                </div>
                                {/* end:Item */}

                                {/* begin::Item */}
                                <div className="d-flex align-items-center">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Vat (+5%)
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">New</span>
                                </div>
                                {/* end:Item */}
                              </div>
                              {/* end::Body */}
                            </div>
                            <div
                              className={`card card-xxl-stretch mb-xl-3 col-xl-12`}
                            >
                              {/* begin::Header */}
                              <div className="card-header border-0 pb-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  In Total
                                </h3>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-0">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-8">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}

                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1 ps-5">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-4 ps-2"
                                    >
                                      {orderInfo?.grandTotal}
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                </div>
                              </div>
                              {/* end::Body */}
                            </div>
                            <div className={`card card-xxl-stretch`}>
                              {/* begin::Header */}
                              <div className="card-header border-0 pb-0">
                                <h3 className="card-title fw-bold text-gray-900">
                                  Shipping / Delivery Address
                                </h3>
                              </div>
                              {/* end::Header */}
                              {/* begin::Body */}
                              <div className="card-body pt-0">
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Address{" "}
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.shippingAddress}</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      PS / Thana
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.shippingPostOffice}</span>
                                </div>
                                {/* end:Item */}

                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      City / District
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.shippingCity}</span>
                                </div>
                                {/* end:Item */}

                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      State / Division
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.shippingState}</span>
                                </div>
                                {/* end:Item */}
                                {/* begin::Item */}
                                <div className="d-flex align-items-center mb-4">
                                  {/* begin::Bullet */}

                                  {/* end::Bullet */}
                                  {/* begin::Checkbox */}
                                  <div className="form-check form-check-custom form-check-solid mx-5"></div>
                                  {/* end::Checkbox */}
                                  {/* begin::Description */}
                                  <div className="flex-grow-1">
                                    <a
                                      href="#"
                                      className="text-gray-800 text-hover-primary fw-bold fs-6"
                                    >
                                      Country
                                    </a>
                                  </div>
                                  {/* end::Description */}
                                  <span className=" fs-8 fw-bold">{orderInfo?.customerInfo?.shippingCountry}</span>
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
