import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/index"
import Signup1 from "./pages/Signup1/index"
import Signup2 from "./pages/Signup2/index"
import Signup3 from "./pages/Signup3/index"
import Signup4 from "./pages/Signup4/index"
import Signup5 from "./pages/Signup5/index"
import ForgotPassword1 from "./pages/Forgot_Password_1/index"
import ForgotPassword2 from "./pages/Forgot_Password_2/index"
import ForgotPassword3 from "./pages/Forgot_Password_3/index"
import Tria from "./pages/Tria/index"
import Dashboard from "./pages/Dashboard/index"
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/signup1",
      element:<Signup1/>
    },  
    {
      path:"/signup2",
      element:<Signup2/>
    },
    {
      path:"/signup3",
      element:<Signup3/>
    },
    {
      path:"/signup4",
      element:<Signup4/>
    },
    {
      path:"/signup5",
      element:<Signup5/>
    },
    {
      path:"/forgotpassword1",
      element:<ForgotPassword1/>
    },
    {
      path:"/forgotpassword2",
      element:<ForgotPassword2/>
    },
    {
      path:"/forgotpassword3",
      element:<ForgotPassword3/>
    },
    {
      path:"/tria",
      element:<Tria/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
