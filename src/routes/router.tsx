import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from 'layouts';
import { publicRoutes } from './config';
import { PATH_ERROR } from './paths';

function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<Navigate to={PATH_ERROR.notFound} replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AppRouter;
