const Invoice = require("../Models/invoice.model")

const createInvoice = async (req, res) => {
  try {
    const {
      venderName,
      venderAddress,
      venderCity,
      venderCode,
      CustomerName,
      CustomerEmail,
      CustomerAddress,
      CustomerCity,
      CustomerCode,
      createdAt,
      projectDes,
      itemName,
      quantity,
      price,
    } = req.body;

    const invoiceData = await Invoice.create ({
         venderName,
      venderAddress,
      venderCity,
      venderCode,
      CustomerName,
      CustomerEmail,
      CustomerAddress,
      CustomerCity,
      CustomerCode,
      createdAt,
      projectDes,
      itemName,
      quantity,
      price,
    });
    res.status(200).json({msg : "Added Succesfully"})
    console.log(invoiceData);
    
  } catch (error) {
    console.log(error);
    
  }
};

const getAllInvoice = async (req, res) => {
  try {
    const invoiceData = await Invoice.find({});
    res.status(200).json({msg : "Invoice Deatils is Here",
      data:invoiceData
    })
  } catch (error) {
    console.log(error);
    
  }
}

const updateInvoice = async (req, res) => {
  try {
    const {id} = req.params;
    const {
       venderName,
      venderAddress,
      venderCity,
      venderCode,
      CustomerName,
      CustomerEmail,
      CustomerAddress,
      CustomerCity,
      CustomerCode,
      createdAt,
      projectDes,
      itemName,
      quantity,
      price,
    } = req.body;

    const invoiceUpdatedData = await Invoice.findByIdAndUpdate(id, 
      {
         venderName,
      venderAddress,
      venderCity,
      venderCode,
      CustomerName,
      CustomerEmail,
      CustomerAddress,
      CustomerCity,
      CustomerCode,
      createdAt,
      projectDes,
      itemName,
      quantity,
      price,
      }, {new : true}
    );

     console.log("Invoice Updated:", invoiceUpdatedData);
        res.status(200).json({
            msg: "Updated Successfully",
            data: invoiceUpdatedData
        });
  } catch (error) {
    
  }
}

const getInvoiceById = async (req, res) => {
  try {
    const {id} = req.params;
    const inv = await Invoice.findOne({_id:id});
    res.status (200).json({msg : "Get Invoice Details",
       data:inv
    });
   
  } catch (error) {
    console.log(error);
    
  }
}

const deleteInvoice = async(req,res) =>{
  try {
    const {id} = req.params;
    const inv = await Invoice.findByIdAndDelete({_id : id});
    res.status(200).json({msg : "Deleted SuccesFully", 
      data : inv
    })
  } catch (error) {
    console.log(error);
  }
}


module.exports = {createInvoice,getAllInvoice,updateInvoice,getInvoiceById,deleteInvoice};