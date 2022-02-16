import type { Expression } from "nerdamer";

export function nerdamer_to_string(expr: Expression): string {
    return expr.text().toString().replace('[','').replace(']','')
}