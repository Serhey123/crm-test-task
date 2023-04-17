export default function Card({ children }) {
  return (
    <div className="card" style={{ maxWidth: 300, margin: '0 auto' }}>
      <div className="card-body">{children}</div>
    </div>
  );
}
