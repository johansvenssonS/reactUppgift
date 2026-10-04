import FloatingSidebar from "./components/FloatingSidebar";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserPage from "./pages/UserPage";
import MapPage from "./pages/MapPage";
import SingleUserPage from "./pages/SingleUserPage";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return (
      <div role="alert">
        <h2>Något gick fel</h2>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Försök igen</button>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="flex w-full h-screen  bg-gray-300 ">
          {/* Sidebar */}
          <FloatingSidebar></FloatingSidebar>

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/users" element={<UserPage />}></Route>
            <Route path="/users/:userId" element={<SingleUserPage />}></Route>
            <Route path="/map" element={<MapPage />}></Route>
          </Routes>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
