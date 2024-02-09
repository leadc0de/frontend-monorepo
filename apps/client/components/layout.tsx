import { type OidcConfiguration, OidcProvider } from '@axa-fr/react-oidc'
import { type PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import React from 'react'

const configuration: OidcConfiguration = {
  client_id: 'api',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  scope: 'openid profile',
  authority: 'http://localhost:8080/realms/leadcode',
}

export function Layout({ children }: PropsWithChildren) {
  const router = useRouter()

  const withCustomHistory = () => {
    return {
      replaceState: (url: string) => {
        router.replace({
          pathname: url
        }).then(() => {
          window.dispatchEvent(new Event('popstate'))
        })
      }
    }
  }

  return (
    <>
      <OidcProvider configuration={configuration} withCustomHistory={withCustomHistory} >
        <main>{children}</main>
      </OidcProvider>
    </>
  )
}
