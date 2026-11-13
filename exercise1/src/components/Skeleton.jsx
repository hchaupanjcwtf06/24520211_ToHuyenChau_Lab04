export default function Skeleton() {
  return (
    <div 
      className="skeleton-wrapper" 
      aria-busy="true" 
      aria-live="polite"
      style={{ padding: '20px', background: '#f0f0f0', borderRadius: '4px' }}
    >
      Đang tải dữ liệu... (Skeleton Fallback)
    </div>
  );
}