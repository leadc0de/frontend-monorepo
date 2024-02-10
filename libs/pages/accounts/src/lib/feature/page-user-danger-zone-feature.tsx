import {PageUserDangerZone} from '../ui/users/page-user-danger-zone'
import {useDeleteUserByIdMutation} from "@leadcode/domains/users";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import toast from "react-hot-toast";

export function PageUserDangerZoneFeature() {
  const { userId = '' } = useParams()
  const [deleteUser, result] = useDeleteUserByIdMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (result.isSuccess) {
      toast.success('The user has been deleted', {
        position: 'top-center',
        duration: 10*1000
      })
      navigate('/accounts/users')
    }
  }, [result])

  return (
    <PageUserDangerZone
      deleteUser={() => deleteUser(userId)}
      user={undefined}
    />
  )
}
