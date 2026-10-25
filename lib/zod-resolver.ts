import { toNestErrors } from "@hookform/resolvers";
import type { Resolver, FieldErrors } from "react-hook-form";
import type { z } from "zod";

/**
 * Custom Zod resolver that works seamlessly with Zod 3 and Zod 4.
 * In Zod 4, errors are exposed via `error.issues`, whereas @hookform/resolvers 3.x
 * specifically checks for `error.errors`, which causes runtime ZodErrors to be re-thrown.
 */
export function zodResolver<T extends z.ZodType<any, any, any>>(
  schema: T
): Resolver<z.infer<T>> {
  return async (values, _context, options) => {
    try {
      const data = await schema.parseAsync(values);
      return {
        values: data,
        errors: {} as FieldErrors<z.infer<T>>,
      };
    } catch (error: any) {
      const issues = error?.issues || error?.errors;

      if (Array.isArray(issues)) {
        const fieldErrors: Record<string, { type: string; message: string }> = {};

        for (const issue of issues) {
          const path = Array.isArray(issue.path) ? issue.path.join(".") : "";
          if (path && !fieldErrors[path]) {
            fieldErrors[path] = {
              type: issue.code || "validation",
              message: issue.message || "Invalid value",
            };
          }
        }

        return {
          values: {},
          errors: toNestErrors(fieldErrors, options) as FieldErrors<z.infer<T>>,
        };
      }

      throw error;
    }
  };
}
