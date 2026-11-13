import { useParams } from 'react-router';
import { people } from './data';

export default function PersonDetail() {
  const { id } = useParams();
  const person = people.find((p) => p.id === id);

  // Xử lý 404 Guard
  if (!person) {
    return <div role="alert" style={{ color: 'red', fontWeight: 'bold' }}>404: Person Not Found</div>;
  }

  // Accessible semantic HTML
  return (
    <div>
      <h3>Chi tiết (Detail)</h3>
      <dl className="person-details">
        <dt>Name</dt>
        <dd>{person.name}</dd>
        
        <dt>Role</dt>
        <dd>{person.role}</dd>
      </dl>
    </div>
  );
}