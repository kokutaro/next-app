import SideNav from '@/app/ui/home/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b p-2">TEST</div>
      <div className="flex h-full flex-col md:flex-row">
        <div className="w-full flex-none md:w-48">
          <SideNav />
        </div>
        <div className="flex-glow w-full px-4 py-2 md:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
