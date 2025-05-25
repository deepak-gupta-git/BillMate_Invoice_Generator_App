import './App.css'
import Header from "./Componets/Header"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateInvoice from './Pages/CreateInvoice'
import InvoiceDetails from './Pages/InvoiceDetails'
import EditInvoice from './Pages/EditInvoice'
// import InvoiceList from './Componets/InvoiceList'
  
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>   
    <Route path="/" element={<Header/>}/>
      <Route path="/createInvoice" element={<CreateInvoice/>}/>
      <Route path="/invoice/:id" element={<InvoiceDetails/>}/>
      <Route path="/invoice/edit/:id" element={<EditInvoice/>}/>
       </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
