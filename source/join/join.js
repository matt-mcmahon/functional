import { sign } from "@mwm/sign"

export const signatures = [
  { "join->withCharacter :: c => as => s": 1 },
  { "join->list          ::      as => s": 1 },
]

export const implementation = withCharacter => list => list.join(withCharacter)

export const join = sign(signatures, implementation)
