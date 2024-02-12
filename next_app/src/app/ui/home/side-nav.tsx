import NavLinks from '@/app/ui/home/nav-links';

export default function SideNav() {
  return (
    <div className="h-full flex-col border-b px-3 py-2 md:border-r md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
