import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { publicRoutes } from './config';
import { PATH_ERROR } from './paths';

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<Navigate to={PATH_ERROR.notFound} replace />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
