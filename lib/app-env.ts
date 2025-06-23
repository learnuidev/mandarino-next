import { z } from "zod";

// Define the schema with camelCase keys
const appEnvSchema = z.object({
  tiptapToken: z.string().nonempty(),
  fontAwesomeToken: z.string().nonempty(),
});

// Infer the type for appEnv
export type AppEnv = z.infer<typeof appEnvSchema>;

// Parse and map process.env to camelCase keys
export const appEnv: AppEnv = appEnvSchema.parse({
  tiptapToken: process.env.TIP_TAP_TOKEN,
  fontAwesomeToken: process.env.FONT_AWESOME_TOKEN,
});
