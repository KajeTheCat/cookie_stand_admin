
import Head from "next/head";
import { useAuth } from '../contexts/auth';

import LoginForm from "../components/loginform.js";
import CookieStandAdmin from "../components/cookiestandadmin";

export default function Home() {

  const { user, login, logout } = useAuth();

  function loginHandler(newUser) {
    login(newUser.username, newUser.password);
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <main>
        <div>
          {
            !user ? <LoginForm onLogin={loginHandler} /> : <CookieStandAdmin user={user} logout={logout} />
          }
        </div>
      </main >
    </div >
  );
};