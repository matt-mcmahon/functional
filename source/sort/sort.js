import { sign } from "@mwm/sign"

export const signatures = [
  "sort->sortingFunction :: ((a, a) => n) => as => as",
  "sort->list            ::                  as => as",
]

export const implementation = mapAAN => as => [...as].sort(mapAAN)

export const sort = sign(signatures, implementation)
