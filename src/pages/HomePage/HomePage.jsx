import { useSelector } from 'react-redux';
import { selectors } from '../../redux/auth';

export default function HomePage() {
  const name = useSelector(selectors.getUserName);
  return (
    <div className="pos-f-t">
      <nav className="navbar navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {name ? <h1>{name}</h1> : <h1>Guest</h1>}
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-4">
          <h4 className="text-dark">Collapsed content</h4>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
    </div>
  );
}
