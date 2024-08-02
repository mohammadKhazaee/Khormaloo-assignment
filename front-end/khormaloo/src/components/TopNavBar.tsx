import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dash } from "../pages/Dash";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Form } from "../pages/Form";

export const TopNavBar = () => {
  return (
    <BrowserRouter>
      <div>Header</div>
      <nav>
        <Link to="/">خانه</Link> |<Link to="/dash">دشبورد</Link> |
        <Link to="/login">ورود</Link> |<Link to="/signup">عضویت</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form/:formId" element={<Form />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <div>Footer</div>
    </BrowserRouter>
  );
};
