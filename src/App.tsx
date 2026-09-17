import React, { FC } from 'react';

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppContent from './AppContent';

// Debug React availability
console.log('React in App.tsx:', React);
console.log('React.useEffect:', React.useEffect);

const queryClient = new QueryClient();

const App: FC = () => {
  console.log('App component rendering...');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
