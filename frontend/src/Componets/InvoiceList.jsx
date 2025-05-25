import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await fetch("https://billmate-invoice-generator-app.onrender.com/api/invoice");
        const data = await response.json();
        setInvoices(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoice();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 space-y-4 cursor-pointer ">
      {
         invoices.length === 0 ? (
    <p className="text-center text-gray-500 mt-10 font-bold">No invoices found. Please add some invoices.</p>
  ) : (
      invoices.map((inv, index) => <Link  key={inv._id} to={`/invoice/${inv._id}`}> 
        <div
         
          className=" p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-center border mt-3"
        >
   
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <h2 className="font-semibold">#{inv._id?.slice(-6).toUpperCase()}</h2>
            <h2 className="text-sm ">
              {new Date(inv.createdAt).toLocaleDateString()}
            </h2>
            <h2 className="text-sm">{inv.CustomerName}</h2>
          </div>


          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
              Paid
            </span>
            <h2 className="font-semibold">₹{inv.price}</h2>
            <FaArrowRight />
          </div>
        </div>
      
      
      </Link>
      )
    )
      
      }
    </div>
    
  );
};

export default InvoiceList;
