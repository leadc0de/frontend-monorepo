import {Controller, FormProvider, useForm} from "react-hook-form";
import {InputSelect, InputText, ModalCrud} from "@leadcode/ui";
import {useGetPermissionsQuery, useStoreRoleMutation} from "@leadcode/domains/users";

export interface CreateRoleModalProps {
  onClose: () => void
}

export function CreateRoleModal({ onClose }: CreateRoleModalProps) {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      label: '',
      power: 0,
      permissionsIds: []
    }
  })
  const [createRole, result] = useStoreRoleMutation()

  const onSubmit = methods.handleSubmit((data) => {
    createRole(data)
    onClose()
  })

  const { data: permissionsResponse } = useGetPermissionsQuery()

  return (
    <FormProvider {...methods}>
      <ModalCrud
        title="Créer un role"
        onClose={onClose}
        description="Créer un nouveau role pour l'application"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4">
          <Controller
            name="label"
            rules={{
              required: 'Veuillez indiquer une valeur'
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                name="label"
                value={field.value}
                onChange={field.onChange}
                label="Label"
                error={error?.message}
              />
            )}
          />

          <Controller
            name="power"
            rules={{
              required: 'Veuillez indiquer une valeur'
            }}
            render={({ field, fieldState: { error } }) => (
              <InputText
                name="power"
                value={field.value}
                onChange={field.onChange}
                label="Power"
                error={error?.message}
              />
            )}
          />
          {permissionsResponse && (
            <Controller
              name="permissionIds"
              render={({ field }) => (
                <InputSelect
                  options={permissionsResponse.data.map((permission) => {
                    return {
                      label: permission.identifier,
                      value: permission.id
                    }
                  })}
                  portal
                  label={"Permissions"}
                  isSearchable
                  isMulti
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          )}
        </div>

      </ModalCrud>
    </FormProvider>
  )
}
