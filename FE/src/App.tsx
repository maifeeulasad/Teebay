import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { CustomLayout } from './layout/CustomLayout';
import { Auth } from './component/auth/Auth';
import { Products } from './component/product/Products';

const App = () => (
  <BrowserRouter basename="/teebay">
    <CustomLayout>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/my-products" element={<Products />} />
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </CustomLayout>
  </BrowserRouter>

);

// eslint-disable-next-line import/no-default-export
export default App;
