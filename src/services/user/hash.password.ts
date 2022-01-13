import { genSalt, hash } from 'bcrypt'

export async function hashPassword (password: string): Promise<string> {
  const rounds = 10
  const salt = await genSalt(rounds)
  return await hash(password, salt)
}
