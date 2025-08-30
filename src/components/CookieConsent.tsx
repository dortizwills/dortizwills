import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie, Shield, Eye } from 'lucide-react';

interface CookieConsentProps {
  onConsent: (consent: boolean) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('analytics-consent');
    if (consent === null) {
      // Show banner after 2 seconds if no consent has been given
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    onConsent(consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <Card className="p-4 shadow-lg border border-border bg-background">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-sm">Cookie Notice</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          We use cookies and analytics to improve your experience and understand how you interact with our portfolio.
        </p>

        {showDetails && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              What we track:
            </h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Pages you visit and time spent</li>
              <li>• Browser and device information</li>
              <li>• How you found our site (referrer)</li>
              <li>• Button clicks and interactions</li>
              <li>• Contact form submissions</li>
            </ul>
            
            <h4 className="font-medium text-sm mb-2 mt-3 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy protection:
            </h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• No personal data without consent</li>
              <li>• Data stored securely</li>
              <li>• Used only for portfolio analytics</li>
              <li>• You can withdraw consent anytime</li>
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              onClick={() => handleConsent(true)}
              size="sm"
              className="flex-1"
            >
              Accept
            </Button>
            <Button
              onClick={() => handleConsent(false)}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              Decline
            </Button>
          </div>
          
          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground h-auto p-1"
          >
            {showDetails ? 'Hide details' : 'Show details'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;