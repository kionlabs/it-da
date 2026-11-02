import type { Metadata } from 'next';
import AdminDashboard from '@/components/AdminDashboard';

export const metadata: Metadata = {
  title: '신청 관리',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
