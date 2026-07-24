import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

export default function Root({children}) {
  const location = useLocation();

  useEffect(() => {
    const isWrangleMode = location.pathname === '/wrangle' || location.pathname.startsWith('/wrangle/');
    document.body.classList.toggle('ww-wrangle-mode', isWrangleMode);
    return () => document.body.classList.remove('ww-wrangle-mode');
  }, [location.pathname]);

  return <>{children}</>;
}
