"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Mock data for borrower requests - replace with API call later
const mockRequests = [
  {
    id: '1',
    requestedAmount: 5000,
    projectType: 'Small Business Expansion',
    description: 'Funds to purchase new equipment and hire two additional staff members for a growing bakery.',
    collateralType: 'Business Assets (Equipment)',
    borrowerName: 'John Doe Bakery Inc.', // Revealed after agreement
    borrowerContact: 'john.doe.bakery@example.com' // Revealed after agreement
  },
  {
    id: '2',
    requestedAmount: 25000,
    projectType: 'Home Renovation',
    description: 'Complete kitchen remodel and bathroom update for a single-family home.',
    collateralType: 'Real Estate (Primary Residence)',
    borrowerName: 'Jane Smith Renovations', // Revealed after agreement
    borrowerContact: 'jane.smith.reno@example.com' // Revealed after agreement
  },
  {
    id: '3',
    requestedAmount: 10000,
    projectType: 'Debt Consolidation',
    description: 'Consolidate high-interest credit card debt into a single, lower-interest loan.',
    collateralType: 'Personal Guarantee & Savings Account Lien',
    borrowerName: 'Robert Jones Solutions', // Revealed after agreement
    borrowerContact: 'robert.jones.sol@example.com' // Revealed after agreement
  }
];

// Placeholder for the Non-Compete / Non-Circumvention Agreement text
const NON_COMPETE_AGREEMENT_TEXT = `
  IMPORTANT: By clicking "I Agree" below, you are entering into a legally binding Non-Compete and Non-Circumvention Agreement.
  
  This agreement is made between you (the "Lender") and P2P LendCo (the "Platform") regarding your access to detailed borrower information.
  
  1. Non-Circumvention: You agree not to circumvent the Platform by directly contacting, soliciting, or entering into any lending or financial arrangements with borrowers introduced through the Platform, outside of the Platform, for a period of [Specify Period, e.g., 2 years] from the date of this agreement or your last interaction with the borrower through the Platform, whichever is later.
  
  2. Non-Competition: You agree not to use the information obtained through the Platform to compete with the Platform or to develop a similar lending service for a period of [Specify Period, e.g., 2 years].
  
  3. Confidentiality: You agree to keep all non-public borrower information confidential and use it solely for the purpose of evaluating loan requests through the Platform.
  
  [More detailed legal clauses to be provided by the user/legal counsel will go here...]
  
  By clicking "I Agree", you acknowledge that you have read, understood, and agree to be bound by the terms of this Non-Compete and Non-Circumvention Agreement.
`;

export default function BorrowerRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showAgreementModal, setShowAgreementModal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState({}); // Tracks agreement per request ID
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    const storedUsername = localStorage.getItem('username');
    if (storedToken) {
      setToken(storedToken);
      setUsername(storedUsername);
      // TODO: Fetch actual requests from API using token
      setRequests(mockRequests);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleViewDetailsClick = (request) => {
    setSelectedRequest(request);
    if (agreedToTerms[request.id]) {
      // Already agreed, show details (though details are already shown if agreed)
    } else {
      setShowAgreementModal(true);
    }
  };

  const handleAgreeToTerms = () => {
    if (selectedRequest) {
      setAgreedToTerms(prev => ({ ...prev, [selectedRequest.id]: true }));
    }
    setShowAgreementModal(false);
  };

  if (!token) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <header className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-10 bg-gray-900 shadow-md">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-blue-400 hover:text-blue-300">
            P2P LendCo
          </Link>
          <nav className="space-x-4">
            <span className="text-gray-300">Welcome, {username || 'Lender'}!</span>
            <Link href="/lender/preferences" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              My Preferences
            </Link>
            <button 
              onClick={() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('username');
                router.push('/login');
              }}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center w-full max-w-7xl mt-24 pt-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Available Borrower Loan Requests</h2>
        
        {requests.length === 0 && (
          <p className="text-gray-400 text-lg">No loan requests currently available. Please check back later.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {requests.map((req) => (
            <div key={req.id} className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">{req.projectType}</h3>
                <p className="text-gray-300 mb-1"><span className="font-medium">Amount Requested:</span> ${req.requestedAmount.toLocaleString()}</p>
                <p className="text-gray-300 mb-1"><span className="font-medium">Collateral:</span> {req.collateralType}</p>
                <p className="text-gray-400 text-sm mt-2 mb-4">{req.description}</p>
                
                {agreedToTerms[req.id] && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Borrower Details:</h4>
                    <p className="text-gray-300"><span className="font-medium">Name:</span> {req.borrowerName}</p>
                    <p className="text-gray-300"><span className="font-medium">Contact:</span> {req.borrowerContact}</p>
                    {/* TODO: Add link/button to view Borrower's Data Room documents */}
                    <button className="mt-3 w-full text-sm text-white bg-green-600 hover:bg-green-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500">
                      View Borrower's Data Room (Placeholder)
                    </button>
                  </div>
                )}
              </div>

              {!agreedToTerms[req.id] && (
                <button 
                  onClick={() => handleViewDetailsClick(req)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                >
                  View Full Details & Sign Agreement
                </button>
              )}
            </div>
          ))}
        </div>
      </main>

      {showAgreementModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Non-Compete & Non-Circumvention Agreement</h3>
            <div className="text-gray-300 whitespace-pre-line text-sm mb-6">
              {NON_COMPETE_AGREEMENT_TEXT}
            </div>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowAgreementModal(false)}
                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500"
              >
                Decline
              </button>
              <button 
                onClick={handleAgreeToTerms}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center mt-16">
        <p className="text-base text-gray-400">
          &copy; 2025 P2P LendCo. All rights reserved. (This is a demo platform)
        </p>
      </footer>
    </div>
  );
}

