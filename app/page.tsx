import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">🚀 App1 - Microservice</h1>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          
          <SignedOut>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-red-600 mb-4">
                ❌ Hello Logged Out User!
              </h2>
              <p className="text-gray-700 mb-4">
                You are NOT authenticated. This is the public page of App1.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold">What&apos;s happening:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• You don&apos;t have a valid session cookie</li>
                  <li>• Clerk middleware detected you&apos;re not logged in</li>
                  <li>• You can only see public content</li>
                </ul>
              </div>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                ✅ Hello Logged In User!
              </h2>
              <p className="text-gray-700 mb-4">
                You are AUTHENTICATED! Welcome to the protected area of App1.
              </p>
              <div className="bg-white p-4 rounded mb-4">
                <p className="font-semibold">Your User ID:</p>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">{userId}</code>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold">SSO Status:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>✅ Authenticated via Clerk SSO</li>
                  <li>✅ Same session works across all apps</li>
                  <li>✅ Sign out from any app = sign out everywhere</li>
                </ul>
              </div>
            </div>
          </SignedIn>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">App Information:</h3>
            <ul className="space-y-1 text-sm">
              <li>📍 App Name: <strong>App1</strong></li>
              <li>🌐 Type: <strong>Microservice</strong></li>
              <li>🔐 Auth: <strong>Clerk SSO</strong></li>
              <li>🍪 Session: <strong>Shared with main app</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}