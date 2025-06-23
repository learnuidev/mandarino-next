import { z } from "zod";

// Define the Zod schema matching your config interface
const amplifyConfigSchema = z.object({
  region: z.string().nonempty(),
  userPoolId: z.string().nonempty(),
  userPoolWebClientId: z.string().nonempty(),
  mandatorySignIn: z.literal(true),
  graphqlEndpoint: z.string().nonempty(),
  authenticationType: z.literal("AMAZON_COGNITO_USER_POOLS"),
});

// Infer the type from the schema
export type IAmplifyConfig = z.infer<typeof amplifyConfigSchema>;

// Map environment variables to camelCase keys and parse
export const amplifyConfig: IAmplifyConfig = amplifyConfigSchema.parse({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USERPOOL_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_WEBCLIENT_ID,
  mandatorySignIn: true,
  graphqlEndpoint: process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT,
  authenticationType: "AMAZON_COGNITO_USER_POOLS",
});
