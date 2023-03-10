import { Ability } from '@casl/ability'
import type { UserAbility } from '@/@fake-db/types.d'

export const initialAbility: UserAbility[] = [
  {
    action: 'read',
    subject: 'Auth',
  },
]

//  Read ability from localStorage
// đ Handles auto fetching previous abilities if already logged in user
// âšī¸ You can update this if you store user abilities to more secure place
// â Anyone can update localStorage so be careful and please update this
const stringifiedUserAbilities = localStorage.getItem('userAbilities')
const existingAbility = stringifiedUserAbilities ? JSON.parse(stringifiedUserAbilities) : null

export default new Ability(existingAbility || initialAbility)
