import { ReactNode } from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = auth.currentUser;

  //user가 널이면 다시 로그인페이지로 보냄
  if (user === null) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
