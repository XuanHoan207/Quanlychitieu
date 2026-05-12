import { useEffect, useState } from 'react'
import { supabase } from './Supabase/supabase'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    getUser()

  }, [])

  async function getUser() {

    const { data, error } = await supabase.auth.getUser()

    console.log(data.user)

    setUser(data.user)

  }

  async function signInGoogle() {

    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })

  }

  return (
    <div>

      <button onClick={signInGoogle}>
        Đăng nhập Google
      </button>

      {user && (
        <div>

          <h1>
            Xin chào {user.user_metadata.full_name}
          </h1>

        </div>
      )}

    </div>
  )
}

export default App