import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage, ListsPage, MessagesPage, LoginPage } from './pages';
import { PrivateRoute, LoginRoute } from './utils';

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>
            } />
            <Route path="/messages" element={
                <PrivateRoute>
                    <MessagesPage />
                </PrivateRoute>
            } />
            <Route path="/lists" element={
                <PrivateRoute>
                    <ListsPage />
                </PrivateRoute>
            } />
            <Route path="/login" element={
                <LoginRoute>
                    <LoginPage />
                </LoginRoute>
            } />
        </Routes>
      </BrowserRouter>
  );
}
