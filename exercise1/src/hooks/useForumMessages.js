import { useState, useEffect } from 'react';

export const useForumMessages = (forumId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchMessages = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/messages/${forumId}`, { 
          signal: controller.signal 
        });
        const result = await res.json();
        if (!controller.signal.aborted) { 
          setData(result); 
        }
      } catch (err) {
        if (!controller.signal.aborted) { 
          console.error('Fetch error:', err.message); 
        }
      } finally {
        if (!controller.signal.aborted) { 
          setLoading(false); 
        }
      }
    };

    fetchMessages();
    
    // Cleanup function để hủy request cũ
    return () => controller.abort(); 
  }, [forumId]);

  return { data, loading };
};