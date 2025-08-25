#!/bin/bash

echo "🚀 Starting That's Amore Catering Website..."
echo ""

echo "📱 Starting Express.js server (EJS version) on port 3001..."
npm start &
EXPRESS_PID=$!

echo "⚡ Starting Next.js server (React version) on port 3000..."
npm run next:dev &
NEXT_PID=$!

echo ""
echo "✅ Both servers are starting up!"
echo ""
echo "🌐 Express.js (EJS): http://localhost:3001"
echo "⚡ Next.js (React): http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $EXPRESS_PID 2>/dev/null
    kill $NEXT_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait
