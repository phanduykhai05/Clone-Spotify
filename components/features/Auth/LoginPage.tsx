'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

function SpotifyLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="relative w-full h-12 rounded-full border border-[#727272] text-white text-sm font-bold hover:border-white transition-colors cursor-pointer flex items-center">
      <span className="absolute left-4">{icon}</span>
      <span className="flex-1 text-center">{label}</span>
    </button>
  );
}

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useLanguage();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-[450px] bg-[#121212] rounded-lg px-10 py-10 flex flex-col items-center gap-6">
        <SpotifyLogo />

        <h1 className="text-3xl font-black text-white text-center">{t.auth.loginTitle}</h1>

        <div className="w-full flex flex-col gap-3">
          <SocialButton icon={<GoogleIcon />} label={t.auth.continueWithGoogle} />
          <SocialButton icon={<FacebookIcon />} label={t.auth.continueWithFacebook} />
          <SocialButton icon={<AppleIcon />} label={t.auth.continueWithApple} />
        </div>

        <div className="w-full flex items-center gap-4">
          <div className="flex-1 h-px bg-[#292929]" />
          <span className="text-xs text-[#a7a7a7]">{t.auth.or}</span>
          <div className="flex-1 h-px bg-[#292929]" />
        </div>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-white">{t.auth.emailOrUsername}</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.auth.emailOrUsername}
              required
              className="w-full h-12 px-4 rounded-sm bg-transparent border border-[#727272] text-white placeholder:text-[#6a6a6a] text-sm focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-bold text-white">{t.auth.password}</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={t.auth.password}
                required
                className="w-full h-12 px-4 pr-12 rounded-sm bg-transparent border border-[#727272] text-white placeholder:text-[#6a6a6a] text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(p => !p)}
                aria-label={showPassword ? t.auth.hidePassword : t.auth.showPassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a7a7a7] hover:text-white transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-full bg-[#1db954] text-black text-sm font-bold hover:scale-[1.02] hover:bg-[#1ed760] transition-all cursor-pointer mt-2"
          >
            {t.auth.logIn}
          </button>
        </form>

        <Link href="/forgot-password" className="text-sm font-bold text-white underline hover:text-[#1db954] transition-colors">
          {t.auth.forgotPassword}
        </Link>

        <div className="pt-4 border-t border-[#292929] w-full text-center">
          <span className="text-sm text-[#a7a7a7]">{t.auth.dontHaveAccount}</span>{' '}
          <Link href="/signup" className="text-sm font-bold text-white underline hover:text-[#1db954] transition-colors">
            {t.auth.signUpForSpotify}
          </Link>
        </div>
      </div>

      <p className="mt-8 text-xs text-center text-[#6a6a6a] max-w-sm">
        {t.auth.reCaptchaText}{' '}
        <Link href="/privacy" className="underline hover:text-white transition-colors">{t.auth.privacyPolicy}</Link>
        {' '}{t.auth.apply.replace('.', '')} {' '}
        <Link href="/terms" className="underline hover:text-white transition-colors">{t.auth.termsOfService}</Link>
        {' '}{t.auth.apply}
      </p>
    </div>
  );
}
