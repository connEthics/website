'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CustomerPortalVerifiedPage() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    
    if (!sessionId) {
      setMessage({
        type: 'error',
        text: 'Invalid verification session. Please start the verification process again.'
      });
      setLoading(false);
      return;
    }

    // Complete the verification and get portal access
    const completeVerification = async () => {
      try {
        const response = await fetch(`/api/stripe/identity-verification?session_id=${encodeURIComponent(sessionId)}`, {
          method: 'GET',
        });

        const data = await response.json();

        if (response.ok && data.url) {
          setMessage({
            type: 'success',
            text: 'Identity verified successfully! Redirecting to your customer portal...'
          });
          // Small delay for user to see the success message
          setTimeout(() => {
            window.location.href = data.url;
          }, 2000);
        } else {
          setMessage({
            type: 'error',
            text: data.error || 'Identity verification failed or is incomplete. Please try again.'
          });
        }
      } catch (error) {
        console.error('Error completing identity verification:', error);
        setMessage({
          type: 'error',
          text: 'An error occurred while verifying your identity. Please try again or contact support.'
        });
      } finally {
        setLoading(false);
      }
    };

    completeVerification();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h2 className="text-xl font-medium text-gray-900 mb-2">
                  Processing Verification
                </h2>
                <p className="text-gray-600">
                  Please wait while we complete your identity verification...
                </p>
              </>
            ) : message ? (
              <>
                <div className={`mx-auto mb-4 ${
                  message.type === 'success' ? 'text-green-600' : 
                  message.type === 'error' ? 'text-red-600' : 'text-blue-600'
                }`}>
                  {message.type === 'success' && (
                    <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {message.type === 'error' && (
                    <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  )}
                  {message.type === 'info' && (
                    <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                
                <h2 className={`text-xl font-medium mb-2 ${
                  message.type === 'success' ? 'text-green-900' : 
                  message.type === 'error' ? 'text-red-900' : 'text-blue-900'
                }`}>
                  {message.type === 'success' ? 'Verification Complete' : 
                   message.type === 'error' ? 'Verification Failed' : 'Information'}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {message.text}
                </p>
                
                {message.type === 'error' && (
                  <div className="space-y-3">
                    <a
                      href="/customer-portal"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Try Again
                    </a>
                    <a
                      href="/contact"
                      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Contact Support
                    </a>
                  </div>
                )}
                
                {message.type === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                          Identity Verified
                        </h3>
                        <div className="mt-2 text-sm text-green-700">
                          <p>
                            Your identity has been successfully verified using government-issued ID. 
                            You now have secure access to your customer portal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
