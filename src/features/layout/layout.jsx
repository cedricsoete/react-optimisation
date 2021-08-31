import { node } from 'prop-types';
import './layout.scss';

const Layout = ({ children }) => (
  <div className="app">
    <div className="app--header">
      <img src="/img/logo.svg" alt="" className="app--logo" />
    </div>
    <div className="app--content">
      <div className="app--container">
        {children}
      </div>
      <div className="app--footer">
        <p>&copy; Ineat Group - iLab Team.</p>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
