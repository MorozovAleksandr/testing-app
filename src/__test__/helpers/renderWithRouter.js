import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/AppRouter";

export const renderWithRouter = (component, initialRoute = "/") => (
  <MemoryRouter initialEntries={[initialRoute]}>
    <AppRouter />
    {component}
  </MemoryRouter>
);
