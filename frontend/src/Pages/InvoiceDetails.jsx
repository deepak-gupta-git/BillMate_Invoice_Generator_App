import React, { useEffect, useState, useRef } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { IoMdDownload } from "react-icons/io";
import { toast } from 'react-toastify';
import html2pdf from "html2pdf.js";

const InvoiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const invoiceRef = useRef();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/invoice/${id}`);
        const data = await response.json();
        setInvoice(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInvoice();
  }, [id]);

  if (!invoice) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  const total = parseFloat(invoice.price) * parseInt(invoice.quantity);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/invoice/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Deleted Successfully");
        navigate("/");
      } else {
        toast.error("Failed to Delete");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    const element = invoiceRef.current;
    const opt = {
      margin: 0.5,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="px-4 py-6 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto p-6 shadow-xl rounded-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6 gap-4">
          <h1 className="text-2xl font-bold text-purple-700">Invoice Details</h1>
          <div className="flex flex-wrap gap-3">
            <button onClick={handleDownload} className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <IoMdDownload className="text-xl bg-gray-500" /> Download
            </button>
            <NavLink to={`/invoice/edit/${invoice._id}`}>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                Edit
              </button>
            </NavLink>
            <button
              onClick={() => {
                const confirmDelete = window.confirm("Are your sure want to delete this invoice!");
                if(confirmDelete){
                  handleDelete(invoice._id)
                }
              }}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Invoice Body */}
        <div className="p-4 md:p-6" ref={invoiceRef}>
          <h1 className="text-3xl font-bold mb-6">INVOICE</h1>

          {/* Bill Info */}
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h2 className="text-lg font-semibold text-purple-600 mb-2">Bill From</h2>
              <p><strong>Name:</strong> {invoice.venderName}</p>
              <p><strong>Address:</strong> {invoice.venderAddress}, {invoice.venderCity} - {invoice.venderCode}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-purple-600 mb-2">Bill To</h2>
              <p><strong>Name:</strong> {invoice.CustomerName}</p>
              <p><strong>Email:</strong> {invoice.CustomerEmail}</p>
              <p><strong>Address:</strong> {invoice.CustomerAddress}, {invoice.CustomerCity} - {invoice.CustomerCode}</p>
            </div>
          </div>

          {/* Item Details */}
          <div className="mt-6 text-gray-700">
            <h2 className="text-lg font-semibold text-purple-600 mb-2">Item Details</h2>
            <p><strong>Item Description:</strong> {invoice.projectDes}</p>
            <p><strong>Item:</strong> {invoice.itemName}</p>
            <p><strong>Quantity:</strong> {invoice.quantity}</p>
            <p><strong>Price per unit:</strong> ₹{invoice.price}</p>
            <p className="text-xl font-bold mt-3">Total: ₹{total.toLocaleString()}</p>
          </div>

          {/* Date */}
          <p className="text-sm mt-6 text-gray-500">
            Created At: {new Date(invoice.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
