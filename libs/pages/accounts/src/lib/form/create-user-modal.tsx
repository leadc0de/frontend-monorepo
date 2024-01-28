import {Controller, FormProvider, useForm} from "react-hook-form";
import {InputText, ModalCrud} from "@leadcode/ui";

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

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

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
        </div>

      </ModalCrud>
    </FormProvider>
  )
}
