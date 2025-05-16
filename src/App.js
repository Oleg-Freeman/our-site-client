import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage, ListsPage, MessagesPage, LoginPage } from './pages';

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/lists" element={<ListsPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
  );
}
