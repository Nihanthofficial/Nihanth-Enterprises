NIHANTH COMPANY
          HCM Enterprise
        



    <nav className="flex-1 px-4 space-y-1">
      <NavItem 
        icon={<LayoutDashboard size={18} />} 
        label="Dashboard" 
        active={activeRoute === routes.dashboard}
        onClick={() => setActiveRoute(routes.dashboard)}
      />
      <NavItem 
        icon={<Users size={18} />} 
        label="Employee Directory" 
        active={activeRoute === routes.employees}
        onClick={() => setActiveRoute(routes.employees)}
      />
      <NavItem 
        icon={<CreditCard size={18} />} 
        label="Payroll & Benefits" 
        active={activeRoute === routes.payroll}
        onClick={() => setActiveRoute(routes.payroll)}
      />
      <NavItem 
        icon={<UserPlus size={18} />} 
        label="Recruiting" 
        active={activeRoute === routes.recruiting}
        onClick={() => setActiveRoute(routes.recruiting)}
      />
    </nav>

    <div className="p-4 border-t border-slate-800">
      <NavItem icon={<Settings size={18} />} label="Settings" />
      <NavItem icon={<HelpCircle size={18} />} label="Support" />
    </div>
  </aside>

  {/* Main Content Area */}
  <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
    {/* Top Header */}
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
      <div className="flex-1 max-w-2xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input 
          type="search" 
          placeholder="Search employees, files, or reports..." 
          className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-sky-500 transition-all"
        />
      </div>
      <div className="flex items-center gap-2 ml-4">
        <HeaderAction icon={<Bell size={20} />} hasBadge />
        <HeaderAction icon={<Clock size={20} />} />
        <HeaderAction icon={<MessageSquare size={20} />} />
        
        <div className="flex items-center gap-3 border-l border-slate-200 pl-4 ml-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold leading-none">Nihanth Alexander</p>
            <p className="text-[11px] text-slate-500 mt-1">System Administrator</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80" 
            alt="Profile" 
            className="w-9 h-9 rounded-full ring-2 ring-slate-100 object-cover"
          />
        </div>
      </div>
    </header>

    {/* Scrollable Content */}
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Welcome back, Nihanth</h2>
          <p className="text-slate-500">Here's a summary of your organization's status today.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Headcount" value="1,248" change="+12 this month" trend="up" />
          <StatCard title="Retention Rate" value="94.2%" change="Benchmark: 88%" trend="up" />
          <StatCard title="Open Positions" value="42" change="8 urgent priority" trend="down" />
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 p-12 shadow-sm text-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="text-slate-300" size={32} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Module View Placeholder</h3>
          <p className="text-slate-500 mt-2 max-w-md mx-auto">
            Currently viewing: <span className="font-medium text-sky-600 uppercase tracking-wider">{activeRoute.replace('/', '') || 'Dashboard'}</span>. 
            In a full application, the corresponding module component would render here.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>

  );
}

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${         active            ? 'bg-sky-600 text-white shadow-md shadow-sky-900/40'            : 'text-slate-400 hover:text-white hover:bg-slate-800'       }}
    >
      {icon}
      {label}
    


  );
}

function HeaderAction({ icon, hasBadge = false }) {
  return (
    {icon} {hasBadge && ( )}
}

function StatCard({ title, value, change, trend }) {
  return (
    

{title}

{value}
      <p className={text-[11px] font-semibold mt-2 ${trend === 'up' ? 'text-emerald-600' : 'text-amber-600'}}>
        {change}
      
