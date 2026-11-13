import { useState } from 'react';
import { useForumMessages } from '../hooks/useForumMessages';

export default function ForumChannelView() {
  const [channel, setChannel] = useState('nasa');
  const { data, loading } = useForumMessages(channel);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Diễn đàn (Forum)</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setChannel('nasa')} disabled={channel === 'nasa'}>NASA</button>
        <button onClick={() => setChannel('esports-tribunal')} disabled={channel === 'esports-tribunal'}>Esports Tribunal</button>
        <button onClick={() => setChannel('notNasa')} disabled={channel === 'notNasa'}>Not NASA</button>
      </div>

      <div aria-live="polite" aria-busy={loading}>
        {loading ? (
          <p style={{ color: 'blue' }}>Đang tải tin nhắn kênh {channel}...</p>
        ) : (
          <dl>
            {data.length === 0 ? <p>Chưa có tin nhắn nào.</p> : data.map((msg) => (
              <div key={msg.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                <dt style={{ fontWeight: 'bold' }}>{msg.author}</dt>
                <dd style={{ margin: 0 }}>{msg.text}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}