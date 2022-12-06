import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import searchIcon from './images/icon-search.svg';
import Icon from './components/Icon/Icon';
import menuIcon from './images/icon-menu.svg';
import NavItem from './components/NavItem/NavItem';
import usersArray from './data/users';
import User from './components/User/User';

function App() {
  // eslint-disable-next-line
  const [users, setUsers] = useState(usersArray);
  return (
    <BrowserRouter>
      <header className="page__header">
        <h1 className="page__heading">Users</h1>

        <div className="page__nav__and__search">
          <div className="page__search__form">
            <Icon
              src={searchIcon}
              alt="search"
              className="page__search__icon"
            />

            <input
              type="search"
              placeholder="Search users"
              className="page__search__input"
            />
          </div>

          <nav className="page__nav">
            <NavItem to="/users/reputation">Reputation</NavItem>
            <NavItem to="/users/new">New users</NavItem>
            <NavItem to="/users/voters">Voters</NavItem>
            <NavItem to="/users/editors">Editors</NavItem>
            <NavItem to="/users/moderators">Moderators</NavItem>
          </nav>

          <Icon src={menuIcon} alt="menu" className="page__menu__icon" />
        </div>
      </header>

      <main className="site__main users">
        {users.map((user, i) => (
          <User user={user} key={i} />
        ))}
      </main>
    </BrowserRouter>
  );
}

export default App;
