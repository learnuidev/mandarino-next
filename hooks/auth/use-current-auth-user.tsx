import { Auth } from "aws-amplify";

import { useQuery } from "@tanstack/react-query";

interface AmplifyCognitoUser {
  attributes: {
    email_verified: boolean;
    email: string;
  };
  getSignInUserSession: () => {
    refreshToken: { getToken: () => string };
    idToken: { jwtToken: string };
  };
}
export interface ICognitoUser {
  emailVerified: boolean;
  email: string;
  refreshToken: string;
  jwtToken: string;
}

function formatUser(user: AmplifyCognitoUser): ICognitoUser {
  const { refreshToken, idToken } = user.getSignInUserSession();

  const formattedUser = {
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
