export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200">
      {/* Header */}
      <header className="bg-gray-500 text-white py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">Test-Github-Copilot</div>
        <div className="text-lg">設定</div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            ようこそ、Test Page
          </h1>
          <p className="text-2xl text-white mt-4 drop-shadow-lg">
            一緒の挑戦しましょう
          </p>
        </div>
      </main>
    </div>
  );
}
