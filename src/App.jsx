import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Resume from './Pages/Resume';
import { useDispatch, useSelector } from 'react-redux';
import Hire from './Pages/Hire';
import Join_Seller from './Pages/Join_Seller';
import Secondary_Nav from './Component/Opportunity/Secondary_Nav';
import SellerDetail from './Component/Opportunity/SellerDetail';
import Questions from './Pages/Questions';
import Answer from "./Pages/Answer";
import Dashboard from "./Pages/Dashboard";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { checkUser } from "./Redux/userSlice";

const App = () => {
  const user = useSelector((state) => state.user.user);
  const uid = useSelector((state) => state.user.id);


  const dispatch = useDispatch()
  const RequiredAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />
  }

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const docRef = doc(db, "seller", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
          dispatch(checkUser(docSnap.data()))
        } else {
          dispatch(checkUser())
        }
      }
    }
    fetchData()
  })



  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>} />
          <Route path="/resume" element={<RequiredAuth> <Resume /> </RequiredAuth>} />
          <Route path="/question" element={<RequiredAuth> <Questions /> </RequiredAuth>} />
          <Route path="/answer/:id" element={<RequiredAuth> <Answer /> </RequiredAuth>} />
          <Route path="/hire" element={<RequiredAuth> <Secondary_Nav /> </RequiredAuth>} >
            <Route index element={<RequiredAuth> <Hire /> </RequiredAuth>} />
            <Route path='/hire/:data' element={<RequiredAuth> <SellerDetail /> </RequiredAuth>} />    <Route path="become-a-seller" element={<RequiredAuth> <Join_Seller /> </RequiredAuth>} />
          </Route>
          <Route path="/profile" element={<RequiredAuth> <Join_Seller /> </RequiredAuth>} />

        </Routes>
      </BrowserRouter >
    </>
  )
}




export default App;