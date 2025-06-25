import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // You could also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.props.errorMessage || "Something went wrong with this component.";
      const errorDetails = this.state.error ? this.state.error.toString() : "No error details.";
      return (
        <div style={{
          padding: '20px',
          border: '1px solid red',
          backgroundColor: '#ffe0e0',
          color: 'red',
          height: this.props.fallbackHeight || '80px', // Ensure it has some height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '12px'
        }}>
          <p>{errorMessage}</p>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px', maxHeight: '100px', overflowY: 'auto' }}>
            <summary>Error Details</summary>
            {errorDetails}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
