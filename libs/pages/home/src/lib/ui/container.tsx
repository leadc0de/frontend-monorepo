import { PropsWithChildren } from "react"

export function Container ({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex-col flex h-full bg-red-500">
        { children }
      </div>
    </>
  )
}
