import { sign } from "@mwm/sign"

export const signatures = [
  "slice->begin :: x => y => as => as",
  "slice->end   ::      y => as => as",
  "slice->list  ::           as => as",
]

export const implementation = x => y => as =>
  as && typeof as.slice === "function" ? as.slice(x, y) : [...as].slice(x, y)

export const slice = sign(signatures, implementation)
