import {PropsWithChildren} from "react";
import { TopBar } from "./top-bar";
import { Navigation } from "./navigation";

export interface LayoutPageProps {
  topBar?: boolean
}

export function LayoutPage({ topBar, children }: PropsWithChildren<LayoutPageProps>) {
  return (
    <div>
      <main className="dark:bg-neutral-900 dark:h-full h-full bg-neutral-200">
        <div className="flex h-full">
          <div className="h-full sticky top-0">
            <Navigation />
          </div>

          <div className="w-full flex flex-col max-h-full">
            {topBar && <TopBar />}
            <div className="h-full">
              { children }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
