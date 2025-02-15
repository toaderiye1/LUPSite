import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

function ErrorFallback({ error }: { error?: Error }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-darkGrey text-white flex items-center justify-center p-4"
    >
      <div className="max-w-md w-full text-center">
        <motion.img
          src="/lovable-uploads/LUP-logo-base.png"
          alt="LUP Property"
          className="h-24 mx-auto mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-400 mb-8">
          We're sorry for the inconvenience. Our team has been notified and is working on fixing this issue.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-warm-bg text-warm-text rounded-full hover:bg-warm-hover transition-all duration-300"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 border border-warm-bg text-warm-bg rounded-full hover:bg-warm-bg/10 transition-all duration-300"
          >
            Go Home
          </button>
        </div>
      </div>
    </motion.div>
  );
}
