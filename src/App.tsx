
import { Toaster } from 'react-hot-toast'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/food" element={<FoodCopy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Route>
        <Route path="/contactus" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error404 />} />
      </Routes> */}

      {/* <Footer /> */}
    </>
  )
}

export default App
