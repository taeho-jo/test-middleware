import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Page({ children }: { children: React.ReactNode }) {
  const location = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div style={{ width: '100%' }}>{children}</div>;
}

export default Page;
