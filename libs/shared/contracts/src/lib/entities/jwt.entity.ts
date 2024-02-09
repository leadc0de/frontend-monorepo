export type ResourceAccess = {
  [key: string]: {
    roles: string[]
  }
}

export interface JwtEntity {
  exp: number
  iat: number
  auth_time: number
  jti: string
  iss: string
  aud: string
  sub: string
  typ: string
  azp: string
  nonce: string
  session_state: string
  acr: string
  allowed_origins: string[]
  realm_access: {
    roles: string[]
  }
  resource_access: ResourceAccess
  scope: string
  sid: string
  upn: string
  email_verified: boolean
  name: string
  groups: string[]
  preferred_username: string
  avatar_url: string
  given_name: string
  family_name: string
  email: string
}
