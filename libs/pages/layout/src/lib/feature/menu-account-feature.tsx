import { MenuAccount } from '../ui/menu-account'
import {useSelector} from "react-redux";
import {getUserState} from "@leadcode/domains/users";
import {LoaderSpinner} from "@leadcode/ui";
import {useState} from "react";
import {useOidc} from "@axa-fr/react-oidc";

export function MenuAccountFeature () {
  const user = useSelector(getUserState).user
  const { logout } = useOidc()

  async function handleLogout () {
    await logout('/home')
  }

  return (
    <>
      { user ? (
        <MenuAccount
          handleLogout={handleLogout}
          user={{
            username: user.name,
            email: user.email,
            picture: user.avatar_url,
          }}
        />
      ) : (
        <LoaderSpinner />
      )}
    </>

  )
}
