import { sign } from "@mwm/sign"

export const signatures = [
  "sort->sortingFunction :: ((a, a) => n) => as => as",
  "sort->list            ::                  as => as",
]

export const implementation = f => as => [...as].sort(f)

export const sort = sign(signatures, implementation)
