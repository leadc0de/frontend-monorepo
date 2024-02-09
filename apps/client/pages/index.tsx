import styles from './index.module.scss';
import {Layout} from "../components/layout";
import {OidcSecure, OidcUserStatus, useOidcUser} from "@axa-fr/react-oidc";

const DisplayUserInfo = () => {
  const { oidcUser, oidcUserLoadingState } = useOidcUser()

  switch (oidcUserLoadingState){
    case OidcUserStatus.Loading:
      return <p>User Information are loading</p>;
    case OidcUserStatus.Unauthenticated:
      return <p>you are not authenticated</p>;
    case OidcUserStatus.LoadingError:
      return <p>Fail to load user information</p>;
    default:
      return (
        <div className="card text-white bg-success mb-3">
          <div className="card-body">
            <h5 className="card-title">User information</h5>
            <p className="card-text">{JSON.stringify(oidcUser)}</p>
          </div>
        </div>
      )
  }
}
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Layout>
      <div className={styles.page}>
        <div className="wrapper">
          <div className="container">
            <div id="welcome">
              <h1>
                <span> Hello there, </span>
                Welcome client 👋
              </h1>
            </div>

            <OidcSecure>
              <DisplayUserInfo />
            </OidcSecure>


            <p id="love">
              Carefully crafted with
              <svg
                fill="currentColor"
                stroke="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
