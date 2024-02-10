import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useForm, FormProvider } from 'react-hook-form'
import { useRedirectIfLogged } from "../hooks/use-redirect-if-logged"
import Login from "../ui/page-login"
import LayoutLogin from "../ui/layout"
import { useLoginMutation, userActions } from "@leadcode/domains/users"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@leadcode/state/store"


export default function PageLoginFeature() {
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate()
  const [login, result] = useLoginMutation()
  const dispatch = useDispatch<AppDispatch>()

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  useEffect(() => {
    if (result.status === 'fulfilled') {


      sessionStorage.setItem('oidc.auth', JSON.stringify(result.data))

      navigate('/home')
    }
  }, [result])


  useRedirectIfLogged()

  methods.watch((data) => {
    setDisabled(!(data.email && data.password))
  })

  const onSubmit = methods.handleSubmit((data) => {
    login({ username: data.email, password: data.password })
  })

  return (
    <FormProvider {...methods}>
      <LayoutLogin>
        <Login
          disabled={disabled}
          onSubmit={onSubmit}
        />
      </LayoutLogin>
    </FormProvider>
  )
}
