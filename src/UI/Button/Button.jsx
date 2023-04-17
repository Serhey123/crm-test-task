export default function Button({ children, type = 'button' }) {
  return (
    <button
      type={type}
      className="btn btn-primary"
      style={{ display: 'block', margin: '0 auto' }}
    >
      {children}
    </button>
  );
}
