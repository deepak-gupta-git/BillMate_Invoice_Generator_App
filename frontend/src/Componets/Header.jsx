import React from "react";
import { NavLink } from "react-router-dom";
import InvoiceList from "./InvoiceList";

const Header = () => {
  return (
    <div className="py-6 px-4 rounded-xl shadow-md w-full max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold text-purple-600 text-center">Welcome To <span className="text-2xl bg-purple-600 rounded-md py-2 px-4">BillMate</span> </h1>
      <p className="text-center px-2 mt-4 text-gray-400 "> "Easily generate professional invoices with our intuitive tool. Add client and vendor details, manage itemized billing, calculate totals automatically, and download invoices as PDFs. Perfect for freelancers, small businesses, and agencies needing a fast, hassle-free billing solution."</p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">Invoices</h1>
          <p className="">Total Invoices</p>
        </div>
        <div className="flex items-center gap-4">
         <NavLink to="/createInvoice">
           <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow">
            + New Invoice
          </button>
         </NavLink>
        </div>
      </div>
      <InvoiceList/>
    </div>
  );
};

export default Header;
