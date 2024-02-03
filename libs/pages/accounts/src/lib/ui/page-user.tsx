import { UserEntity } from "@leadcode/contracts";
import { IconEnum } from "@leadcode/enums";
import { Header } from "@leadcode/ui";

export interface PageUserProps {
  user?: UserEntity
}

export function PageUser({ user }: PageUserProps) {
  return (
    <div className="h-full">
      <Header 
        title={user?.email}
        icon={IconEnum.DATABASE}
        iconClassName="w-16"
      />

      <div className="bg-white h-full rounded-t-sm mt-2">
        <div className="grid grid-cols-12 divide-x h-full">
          <div className="col-span-2">
            <div className="flex flex-col px-5 sticky top-14 pt-6">
              
            </div>
          </div>

          <div className="col-span-10 h-full">
            dazdada
          </div>
        </div>
      </div>
    </div>
  )
}