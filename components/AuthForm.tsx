import React from 'react';
import Link from 'next/link';

type AuthFormProps = {
  title: string;
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkPath: string;
};

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  children,
  footerText,
  footerLinkText,
  footerLinkPath,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-4">
            {children}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange hover:bg-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
            >
              {title}
            </button>
          </div>
        </form>

        <div className="text-center">
          <span className="text-gray-600">{footerText}</span>{' '}
          <Link
            href={footerLinkPath}
            className="font-medium text-orange-600 hover:text-orange-500 transition duration-150"
          >
            {footerLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;