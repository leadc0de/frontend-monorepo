import {UserEntity} from "@leadcode/contracts";
import {IconAwesomeEnum} from "@leadcode/enums";
import {BlockContent, Button, ButtonSize, ButtonStyle, InputText, NavigationLeft} from "@leadcode/ui";
import {useParams} from "react-router";
import {Controller, useFormContext} from "react-hook-form";
import {FormEventHandler} from "react";

export interface PageUserProps {
  user?: UserEntity
  onSubmit: () => void
  loading: boolean
}

export function PageUser({ user, onSubmit, loading }: PageUserProps) {
  const { userId = '' } = useParams()
  const { control, formState, watch } = useFormContext()

  const userLinks = [
    {
      title: 'General',
      icon: IconAwesomeEnum.WHEEL,
      url: `/accounts/users/${userId}/general`,
    },
    {
      title: 'Danger zone',
      icon: 'game-icons:death-skull',
      url: `/accounts/users/${userId}/danger-zone`,
    }
  ]

  return (
    <div className="bg-white h-full rounded-t-sm">
      <div className="grid grid-cols-12 divide-x h-full">
        <div className="col-span-2 p-4 py-10">
          <NavigationLeft
            title={"Utilisateur"}
            links={userLinks}

          />
        </div>

        <div className="col-span-10 h-full p-4 py-10 max-w-content-with-navigation-left">
          <h1 className="text-lg font-semibold text-slate-900">General user settings</h1>

          <BlockContent title="User profile" className="mt-4">
            <div className="flex items-center">
              <div>
                <img className="rounded-full w-16 h-16 border border-neutral-50" src={'https://i.pinimg.com/236x/2d/61/31/2d61311fab48fb4feff08f6334afc629.jpg'} alt="User profile" />
              </div>
              <div className="ml-5">
                <p className="text-neutral-400 font-medium ml-5">
                  {watch('firstname')} {watch('lastname')}
                </p>
              </div>
            </div>
            <hr className="my-5 border-0 border-b border-neutral-250 relative -left-5 w-[calc(100%+41px)]" />
            <div className="flex flex-col gap-4">
              <div className="flex">
                <Controller
                  name="firstname"
                  control={control}
                  rules={{ required: 'Please enter a first name' }}
                  render={({ field, fieldState: { error } }) => (
                    <InputText
                      className='w-full mr-1.5'
                      name={field.name}
                      label="First name"
                      onChange={field.onChange}
                      value={field.value}
                      error={error?.message}
                    />
                  )}
                />
                <Controller
                  name="lastname"
                  control={control}
                  rules={{ required: 'Please enter a last name.' }}
                  render={({ field, fieldState: { error } }) => (
                    <InputText
                      className="w-full ml-1.5"
                      name={field.name}
                      onChange={field.onChange}
                      value={field.value}
                      label="Last name"
                      error={error?.message}
                    />
                  )}
                />
              </div>

              <Controller
                name="username"
                control={control}
                rules={{ required: 'Please enter a username.' }}
                render={({ field, fieldState: { error } }) => (
                  <InputText
                    className="w-full"
                    name={field.name}
                    onChange={field.onChange}
                    value={field.value}
                    label="Username"
                    error={error?.message}
                    disabled
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={{ required: 'Please enter a email.' }}
                render={({ field, fieldState: { error } }) => (
                  <InputText
                    className="w-full"
                    name={field.name}
                    onChange={field.onChange}
                    value={field.value}
                    label="Email"
                    error={error?.message}
                  />
                )}
              />
            </div>
          </BlockContent>

          <div className="flex justify-end">
            <Button
              dataTestId="submit-button"
              className="btn--no-min-w"
              size={ButtonSize.LARGE}
              style={ButtonStyle.BASIC}
              type='submit'
              onClick={onSubmit}
              //disabled={!formState.isValid}
              loading={loading}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
