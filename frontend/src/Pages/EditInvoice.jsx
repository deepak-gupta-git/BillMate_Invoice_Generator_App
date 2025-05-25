import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditInvoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);

   useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const res = await fetch(`https://billmate-invoice-generator-app.onrender.com/api/invoice/${id}`);
        const data = await res.json();
        setInvoice(data.data);
      } catch (err) {
        console.error("Failed to fetch invoice:", err);
      }
    };

    fetchInvoice();
  }, [id]);

    const handleChange = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8080/api/invoice/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice),
      });
      toast.success("Updated Successfully")
      navigate(`/invoice/${id}`);
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  if (!invoice) return <p className="text-center">Loading...</p>;

  return (
    <div>
          <div className="max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">Edit Invoice</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className='font-bold' htmlFor="">From</label>
        <input
          name="venderName"
          value={invoice.venderName}
          onChange={handleChange}
          placeholder="Vendor Name"
          className="w-full p-2 border rounded"
        />

        <label className='font-bold' htmlFor="">To </label>
        <input
          name="CustomerName"
          value={invoice.CustomerName}
          onChange={handleChange}
          placeholder="Customer Name"
          className="w-full p-2 border rounded"
        />
        <input
          name="projectDes"
          value={invoice.projectDes}
          onChange={handleChange}
          placeholder="Project Description"
          className="w-full p-2 border rounded"
        />
        <input
          name="quantity"
          type="number"
          value={invoice.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full p-2 border rounded"
        />
        <input
          name="price"
          type="number"
          value={invoice.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Save Changes
        </button>
      </form>
    </div>
    </div>
  )
}

export default EditInvoice
