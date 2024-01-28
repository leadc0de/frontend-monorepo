import {ReactElement} from 'react'
import { PageHome } from '@leadcode/pages/home'
import { PageAccounts } from '@leadcode/pages/accounts'
interface RouterProps {
  path: string
  component: ReactElement
  protected: boolean
  layout: boolean
  darkMode?: boolean
}

export const ROUTER: RouterProps[] = [
  {
    path: '/home/*',
    component: <PageHome />,
    layout: true,
    protected: true,
  },
  {
    path: '/accounts/*',
    component: <PageAccounts />,
    layout: true,
    protected: true
  }
]
