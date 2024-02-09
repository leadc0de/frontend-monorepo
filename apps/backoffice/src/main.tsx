import { StrictMode } from 'react'
import App from './app/app'
import { createRoot } from 'react-dom/client'
import { setupStore } from '@leadcode/state/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ModalProvider } from '@leadcode/ui'
import { OidcConfiguration, OidcProvider } from '@axa-fr/react-oidc';

const container = document.getElementById('root') || document.createElement('div')
const root = createRoot(container)

const store = setupStore()

const oidcConfig: OidcConfiguration = {
  client_id: 'frontend',
  redirect_uri: window.location.origin + '/authentication/callback',
  silent_redirect_uri: window.location.origin + '/authentication/silent_callback',
  scope: 'openid profile',
  authority: 'http://localhost:8080/realms/leadcode',
  service_worker_only: false,
  demonstrating_proof_of_possession: false
}

root.render(
  <StrictMode>
    <OidcProvider configuration={oidcConfig}>
      <Provider store={store}>
        <BrowserRouter>
          <TooltipProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </TooltipProvider>
        </BrowserRouter>
      </Provider>
    </OidcProvider>
  </StrictMode>
)
