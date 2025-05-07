import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage, ListsPage, MessagesPage } from './pages';

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/lists" element={<ListsPage />} />
        </Routes>
      </BrowserRouter>
  );
}
