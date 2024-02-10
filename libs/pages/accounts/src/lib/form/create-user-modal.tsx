import {Controller, FormProvider, useForm} from 'react-hook-form'
import {InputSelect, InputText, ModalCrud} from '@leadcode/ui'
import { useGetRolesQuery, useStoreUserMutation } from '@leadcode/domains/users'
import {useEffect} from "react"
import { toast } from 'react-hot-toast'

export interface CreateUserModalProps {
  onClose: () => void
}

export function CreateUserModal({ onClose }: CreateUserModalProps) {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      roleIds: []
    }
  })

  const { data: rolesResponse } = useGetRolesQuery({ searchParams: 'limit=100' })
  const [createUser, result] = useStoreUserMutation()

  const onSubmit = methods.handleSubmit((data) => {
    createUser(data)
  })

  useEffect(() => {
    if (['rejected', 'fulfilled'].includes(result.status)) {
      onClose()

      if (result.status === 'rejected') {
        toast.error('Error creating user', { position: 'top-center' })
      } else {
        toast.success('The user has been created', { position: 'top-center' })
      }
    }
  }, [result]);

  return (
    <FormProvider {...methods}>
      <ModalCrud
        title="Créer un utilisateur"
        description="Créer un nouveau utilisateur pour l'application"
        onClose={onClose}
        howItWorks={<div>Test</div>}
        onDelete={() => console.log('test')}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4">
          <Controller
            name="username"
            rules={{
              required: 'Veuillez indiquer une valeur'
            }}
            render={({ field, fieldState }) => (
              <InputText
                name="username"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
                label="Username"
              />
            )}
          />
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="firstname"
              rules={{
                required: 'Veuillez indiquer une valeur'
              }}
              render={({ field, fieldState }) => (
                <InputText
                  name="firstname"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                  label="Prénom"
                />
              )}
            />
            <Controller
              name="lastname"
              rules={{
                required: 'Veuillez indiquer une valeur'
              }}
              render={({ field, fieldState }) => (
                <InputText
                  name="lastname"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error?.message}
                  label="Nom"
                />
              )}
            />
          </div>
          <Controller
            name="email"
            rules={{
              required: 'Veuillez indiquer une valeur'
            }}
            render={({ field, fieldState }) => (
              <InputText
                name="email"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
                label="Email"
              />
            )}
          />


          <Controller
            name="password"
            rules={{
              required: 'Veuillez indiquer une valeur'
            }}
            render={({ field, fieldState }) => (
              <InputText
                name="password"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
                label="Mot de passe"
                type="password"
              />
            )}
          />

          {rolesResponse && (
            <Controller
              name="roleIds"
              render={({ field }) => (
                <InputSelect
                  isSearchable={true}
                  options={rolesResponse.data.map((role) => {
                    return {
                      label: role.label,
                      value: role.id
                    }
                  })}
                  portal
                  value={field.value}
                  onChange={field.onChange}
                  isMulti
                  label="Roles"
                />
              )}
            />
          )}

        </div>

      </ModalCrud>
    </FormProvider>
  )
}
