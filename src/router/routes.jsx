import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import App from "@/App";
import SignUp from "@/components/SignUp";
import Ticket from "@/components/Ticket";
import NoMatch from "@/components/NoMatch/NoMatch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<SignUp />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/ticket/:ticketId" element={<Ticket />} />
      <Route path="*" element={<NoMatch />} />
    </Route>,
  ),
);

function RouterComponent() {
  return <RouterProvider router={router} />;
}
export default RouterComponent;
