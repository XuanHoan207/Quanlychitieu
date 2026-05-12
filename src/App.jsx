import { useEffect, useState } from 'react'
import { supabase } from './Supabase/supabase'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    // lấy user hiện tại
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    // lắng nghe đăng nhập
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }

  }, [])

  async function signInGoogle() {

    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })

  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <div>

      {!user ? (
        <button onClick={signInGoogle}>
          Đăng nhập Google
        </button>
      ) : (
        <div>

          <h1>
            Xin chào {user.user_metadata.full_name}
          </h1>

          <img
            src={user.user_metadata.avatar_url}
            width="100"
          />

          <br />

          <button onClick={signOut}>
            Đăng xuất
          </button>

        </div>
      )}

    </div>
  )
}

export default App