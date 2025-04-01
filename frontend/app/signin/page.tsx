'use client'
import { createClient } from '@/utils/supabase/client'
import GoogleSignInButton from './GoogleSignInButton'

export default function Login() {

    const signInWithGoogle = async () => {
        const supabase = createClient()
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: process.env.NEXT_PUBLIC_BASE_URL + '/auth/callback'
            }
        })
    }

  return (
    <div className='flex flex-col items-center w-full pt-56'>
        <GoogleSignInButton onClick={signInWithGoogle}/>
    </div>
  );
}
