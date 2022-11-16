import { useState, useEffect } from "react";
import { supabase } from './Clients';

function GitAuth()
{
  const [user, setUser] = useState(null);
  useEffect(()=> {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    })
  }, [])
  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithGithub(){
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
    }
    async function signOut(){
      await supabase.auth.signOut();
      setUser(null);
  }
  if(user){
    return (
      <div className="gitauth">
        <h1>Welcome back, {user.email}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="gitauth">
      <h1>Please Sign In</h1>
      <button onClick={signInWithGithub}>Sign In</button>
    </div>
  )
}

export default GitAuth;