# 🧾 BillMate - Invoice Generator App

**BillMate** is a sleek and intuitive invoice generator designed to simplify billing for freelancers, agencies, and small businesses. Built with the MERN stack, it allows you to dynamically create, customize, and manage professional invoices in minutes.

---

## 🚀 Features

- 🔧 **Dynamic Invoice Builder** – Add, edit, and remove line items with real-time calculation of totals.
- 🧑‍💼 **Client Details Input** – Add your client’s name, contact, and billing information.
- 🎨 **Custom Branding** – Add your own logo and business details to personalize your invoice.
- 📅 **Due Dates & Issue Dates** – Set invoice dates and payment terms.
- 📄 **Preview & Export** – Live invoice preview and download as PDF (coming soon).
- 🌐 **Client Portal** – (Planned) Let your clients view and download their invoices.
- 📬 **Email Invoices** – (Planned) Send invoices directly via email.
- 🖥️ **Responsive Design** – Fully responsive UI using Tailwind CSS.
- ✅ **Toast Notifications** – Instant feedback on actions like saving, updating, or deleting.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Other Tools:** UUID, Date-fns, dotenv

---


## 📦 Installation

### 1. Clone the repository


git clone https://github.com/your-username/billmate.git
cd billmate


### 2.Install dependencies for both frontend and backend:

    cd frontend
    npm install

    cd ../backend
    npm install
    
3. Create environment variable files .env in both folders:

Backend .env:

    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret

4. Run the app:
   
Backend:
node index.js

Frontend:
cd frontend
npm run dev
