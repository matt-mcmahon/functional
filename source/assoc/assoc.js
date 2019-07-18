import { sign } from "@mwm/sign"
import { clone } from "../clone"

export const signatures = [
  { "assoc :: k => a => {k:*} => {k:a}": 1 },
  { "assoc ::      a => {k:*} => {k:a}": 1 },
  { "assoc ::           {k:*} => {k:a}": 1 },
]

export const implementation = key => value => object =>
  Object.assign(clone(object), { [key]: value })

export const assoc = sign(signatures, implementation)
