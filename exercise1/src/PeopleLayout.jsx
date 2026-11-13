import { NavLink, Outlet } from 'react-router';
import { people } from './data';

export default function PeopleLayout() {
  return (
    <div className="people-frame">
      <nav className="sidebar">
        <h3>Danh sách (Master)</h3>
        {people.map((p) => (
          <NavLink 
            key={p.id} 
            to={`/people/${p.id}`} 
            className={({ isActive }) => isActive ? 'active-link' : 'link'}
          >
            {p.name}
          </NavLink>
        ))}
      </nav>
      {/* Khung hiển thị chi tiết component con */}
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}