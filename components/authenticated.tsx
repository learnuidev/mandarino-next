"use client";

import { useCurrentAuthUser } from "@/hooks/auth/use-current-auth-user";

export const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading } = useCurrentAuthUser({});

  if (authUser) {
    return children;
  }

  if (isLoading) {
    return <div></div>;
  }

  return <div> Login </div>;
};
