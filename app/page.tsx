import Dashboard from '@/components/Dashboard/Dashboard';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <main className='grid grid-cols-4 col-span-  p-4'>
      <Sidebar />
      <Dashboard />
    </main>
  );
}
