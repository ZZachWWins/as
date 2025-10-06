// src/components/ErrorBoundary.jsx (Unchanged)
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })} className="btn">Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;