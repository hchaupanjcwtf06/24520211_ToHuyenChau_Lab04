export const ShowData = ({ data }) => {
  // Semantic JSON state inspector using <dl>
  return (
    <div style={{ marginTop: '20px', padding: '15px', background: '#eef', borderRadius: '4px' }}>
      <h4>Dữ liệu Form hợp lệ:</h4>
      <dl className="json-inspector">
        {Object.entries(data).map(([key, val]) => (
          <div key={key} className="data-row" style={{ display: 'flex', gap: '10px' }}>
            <dt style={{ fontWeight: 'bold' }}>{key}:</dt>
            <dd style={{ margin: 0 }}>{String(val)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};