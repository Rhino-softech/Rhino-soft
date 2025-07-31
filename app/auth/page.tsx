import AuthForm from '@/components/AuthForm';

export default function AuthPage() {
  return <AuthForm title={''} onSubmit={function (e: React.FormEvent): void {
    throw new Error('Function not implemented.');
  } } children={undefined} footerText={''} footerLinkText={''} footerLinkPath={''} />;
}
