import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    venderName: "",
    venderAddress: "",
    venderCity: "",
    venderCode: "",
    CustomerName: "",
    CustomerEmail: "",
    CustomerAddress: "",
    CustomerCity: "",
    CustomerCode: "",
    createdAt: "",
    projectDes: "",
    itemName:"",
     quantity:"",
      price:""
  });
     
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if(res.ok){
          toast.success("Invoice created successfully!");
      navigate("/");
      }
    
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Error creating invoice");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-7 shadow-2xl rounded-xl mt-8">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-8">Create New Invoice</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Bill From */}
        <div>
          <h3 className="text-lg font-bold text-purple-500 mb-2">Bill From</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="venderName" value={formData.venderName} onChange={handleChange} placeholder="Vendor Name" className="input" required />
            <input name="venderAddress" value={formData.venderAddress} onChange={handleChange} placeholder="Vendor Address" className="input" required/>
            <input name="venderCity" value={formData.venderCity} onChange={handleChange} placeholder="Vendor City" className="input" required />
            <input name="venderCode" value={formData.venderCode} onChange={handleChange} placeholder="Vendor Postal Code" className="input" required/>
          </div>
        </div>

        {/* Bill To */}
        <div>
          <h3 className="text-lg font-bold text-purple-500 mb-2">Bill To</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="CustomerName" value={formData.CustomerName} onChange={handleChange} placeholder="Customer Name" className="input" required/>
            <input name="CustomerEmail" value={formData.CustomerEmail} onChange={handleChange} placeholder="Customer Email" className="input" required/>
            <input name="CustomerAddress" value={formData.CustomerAddress} onChange={handleChange} placeholder="Customer Address" className="input" required/>
            <input name="CustomerCity" value={formData.CustomerCity} onChange={handleChange} placeholder="Customer City" className="input" />
            <input name="CustomerCode" value={formData.CustomerCode} onChange={handleChange} placeholder="Customer Postal Code" className="input" required/>
          </div>
        </div>

        {/* Date & Description */}
        <div className="grid md:grid-cols-2 gap-4">
          <input type="date" name="createdAt" value={formData.createdAt} onChange={handleChange} className="input" required/>
          <input name="projectDes" value={formData.projectDes} onChange={handleChange} placeholder="Project Description" className="input" required/>
        </div>

        {/* Item List */}
        <div >
          <h3 className="text-lg font-semibold text-purple-500 mb-2">Item Details</h3>
            <div className="grid md:grid-cols-4 gap-4 items-center mb-2 ">
              <input name="itemName" value={formData.itemName} onChange={handleChange} placeholder="Item Name" className="input" required/>
              <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" className="input" required/>
              <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="input" required/>            </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <NavLink to="/">
            <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg">Cancel</button>
          </NavLink>
          <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">Create Invoice</button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
