import { sign } from "@mwm/sign"

export const signatures = [
  "slice->begin :: n => m => as => as",
  "slice->end   ::      m => as => as",
  "slice->list  ::           as => as",
]

export const implementation = n => m => as =>
  as && typeof as.slice === "function" ? as.slice(n, m) : [...as].slice(n, m)

export const slice = sign(signatures, implementation)
