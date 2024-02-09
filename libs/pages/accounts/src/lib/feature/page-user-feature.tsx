import { useGetUserByIdQuery } from "@leadcode/domains/users"
import { useParams } from "react-router"
import { PageUser } from "../ui/page-user"
import { useEffect, useState } from "react"
import {FormProvider, useForm} from "react-hook-form";
import toast from "react-hot-toast";

export function PageUserFeature () {
  const { userId = '' } = useParams()
  const [loading, setLoading] = useState(false)

  const { data: user } = useGetUserByIdQuery(userId)

  const methods = useForm(({
    mode: 'onChange',
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      username: user?.username
    }
  }))

  const onSubmit = methods.handleSubmit(async (data) => {
    setLoading(true)
    toast.success('Here is your toast.', {
      duration: 4000,
      position: 'top-right',
      style: {
        padding: 10
      }
    })
    console.log("dada")
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  useEffect(() => {
    if (!user) return

    methods.setValue('firstname', user.firstname)
    methods.setValue('lastname', user.lastname)
    methods.setValue('email', user.email)
    methods.setValue('username', user.username)
  }, [user])

  return (
    <FormProvider {...methods}>
      <PageUser
        user={user}
        loading={loading}
        onSubmit={onSubmit}
      />
    </FormProvider>
  )
}
