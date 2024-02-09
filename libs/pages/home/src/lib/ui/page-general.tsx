import {Button} from "@leadcode/ui";

export default function PageGeneral () {
  return (
    <div className="flex flex-col bg-white m-2 p-6 rounded-md">

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <span>Manage your deployments</span>
        </div>

        <div>
          <Button>
            Lorem
          </Button>
        </div>
      </div>
      <div>
        Body
      </div>


    </div>
  )
}
