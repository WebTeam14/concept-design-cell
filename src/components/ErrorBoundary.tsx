import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6 gap-4">
          <h1 className="font-display text-3xl font-bold text-foreground tracking-widest uppercase">
            Something went wrong
          </h1>
          <div className="w-16 h-[2px] bg-primary" />
          <p className="text-muted-foreground text-sm max-w-md">
            {this.state.error?.message ?? "An unexpected error occurred. Please try refreshing the page."}
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 text-xs font-bold tracking-[0.2em] uppercase border border-primary text-primary px-6 py-2 hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
