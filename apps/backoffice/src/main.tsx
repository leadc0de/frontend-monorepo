import { StrictMode } from 'react'
import App from './app/app'
import { createRoot } from 'react-dom/client'
import { setupStore } from '@leadcode/state/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ModalProvider } from '@leadcode/ui'

const container = document.getElementById('root') || document.createElement('div')
const root = createRoot(container)

const store = setupStore()

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TooltipProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </TooltipProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
