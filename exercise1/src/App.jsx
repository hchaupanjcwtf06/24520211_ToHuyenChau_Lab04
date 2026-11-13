import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import PeopleLayout from './PeopleLayout';
import Skeleton from './components/Skeleton';
import ForumChannelView from './components/ForumChannelView';
import './App.css';

// Tải lazy component PersonDetail
const PersonDetail = React.lazy(() => import('./PersonDetail'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<h2 style={{padding: 20}}>Trang chủ - Vào /people để xem danh sách</h2>} />
      
      {/* Route Cha */}
      <Route path="/people" element={<PeopleLayout />}>
        {/* Route Con mặc định */}
        <Route index element={<div>Vui lòng chọn một người bên danh sách.</div>} />
        
        {/* Route Con động có chứa Suspense fallback */}
        <Route 
          path=":id" 
          element={
            <Suspense fallback={<Skeleton />}>
              <PersonDetail />
            </Suspense>
          } 
        />
      </Route>

      {/* Route Forum */}
      <Route path="/forum" element={<ForumChannelView />} />
    </Routes>
  );
}

export default App;