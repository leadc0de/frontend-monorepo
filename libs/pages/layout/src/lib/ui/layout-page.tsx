import {PropsWithChildren} from "react";
import { TopBar } from "./top-bar";
import { Navigation } from "./navigation";

export interface LayoutPageProps {
  topBar?: boolean
}

export function LayoutPage({ topBar, children }: PropsWithChildren<LayoutPageProps>) {
  return (
    <div>
      <main className="dark:bg-neutral-900 dark:h-full bg-neutral-200">
        <div className="flex">
          <div className="h-full sticky top-0">
            <Navigation />
          </div>

          <div className="w-full flex flex-col-reverse">
            <div>
              { children }
            </div>
            {topBar && <TopBar />}
          </div>
        </div>
      </main>
    </div>
  )
}
