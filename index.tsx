import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'monospace', backgroundColor: '#FAFAFA', height: '100vh' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF0000', marginBottom: '20px' }}>
            CRASH REPORT // SOMETHING BROKE
          </h1>
          <div style={{ border: '2px solid black', padding: '20px', background: 'white' }}>
            <p style={{ fontWeight: 'bold' }}>Error:</p>
            <pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{this.state.error?.toString()}</pre>
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
              Try refreshing. If this persists, the developer screwed up the dependencies.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);