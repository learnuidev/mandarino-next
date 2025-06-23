import { Auth } from "aws-amplify";

import { useQuery } from "@tanstack/react-query";

export interface ICognitoUser {
  emailVerified: boolean;
  email: string;
  refreshToken: string;
  jwtToken: string;
}

// TODO: Fix any here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatUser(user: any): ICognitoUser {
  const { refreshToken, idToken } = user.getSignInUserSession();

  const formattedUser = {
    // ...user.attributes,
    emailVerified: user.attributes.email_verified,
    email: user.attributes.email,
    refreshToken: refreshToken.getToken(),
    jwtToken: idToken.jwtToken,
  };

  return formattedUser;
}

export async function currentAuthUser() {
  try {
    const user = await Auth.currentAuthenticatedUser();

    return formatUser(user);
  } catch (err) {
    throw err;
  }
}

export const currentAuthUserQueryKey = `current-auth-user`;
export function useCurrentAuthUser(options = {}) {
  return useQuery({
    queryKey: [currentAuthUserQueryKey],

    queryFn: currentAuthUser,
    ...options,
    retry: false,
  });
}
