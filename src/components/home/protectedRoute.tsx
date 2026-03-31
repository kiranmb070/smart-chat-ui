import { observer } from "mobx-react-lite";
import useStores from "../../stores/useStores";
import { Navigate } from "react-router-dom";

const ProtectedRoute = observer(
  ({ children }: { children: React.ReactNode }) => {
    const { userStore } = useStores();
    console.log("ProtectedRoute: userStore.isLoggedIn =", userStore.isLoggedIn);

    if (!userStore.isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
  }
);

export default ProtectedRoute;
