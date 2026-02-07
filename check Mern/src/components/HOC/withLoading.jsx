export function withLoading(WrappedComponent) {
  return function EnhancedComponent(props) {
    if (props.loading) {
      return <h2>Loading...</h2>;
    }

    return <WrappedComponent {...props} />
  };
}
