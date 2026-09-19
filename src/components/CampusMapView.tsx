import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Search, 
  Info, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  FileText, 
  HelpCircle,
  X,
  Compass
} from 'lucide-react';
import { floorPlans, FloorRoom, administrativeOfficesInfo, OfficeInfo } from '../data/floorPlansData';

export const CampusMapView: React.FC = () => {
  const [activeFloorId, setActiveFloorId] = useState<string>('first-floor');
  const [selectedRoom, setSelectedRoom] = useState<FloorRoom | null>(() => {
    // Default select OSA on first floor
    return floorPlans[0].rooms.find(r => r.code === 'OSA') || floorPlans[0].rooms[0];
  });
  const [hoveredRoom, setHoveredRoom] = useState<FloorRoom | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'blueprint' | 'offices'>('blueprint');
  const [selectedOffice, setSelectedOffice] = useState<OfficeInfo | null>(administrativeOfficesInfo[0]);

  const activeFloor = useMemo(() => {
    return floorPlans.find(f => f.id === activeFloorId) || floorPlans[0];
  }, [activeFloorId]);

  // Handle floor switch
  const handleFloorChange = (floorId: string) => {
    setActiveFloorId(floorId);
    const newFloor = floorPlans.find(f => f.id === floorId);
    if (newFloor && newFloor.rooms.length > 0) {
      setSelectedRoom(newFloor.rooms[0]);
    } else {
      setSelectedRoom(null);
    }
  };

  // Search across all floors
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    const results: { room: FloorRoom; floorId: string; floorName: string }[] = [];

    floorPlans.forEach(floor => {
      floor.rooms.forEach(room => {
        if (
          room.code.toLowerCase().includes(query) ||
          room.name.toLowerCase().includes(query) ||
          room.description.toLowerCase().includes(query) ||
          room.category.toLowerCase().includes(query)
        ) {
          results.push({ room, floorId: floor.id, floorName: floor.name });
        }
      });
    });
    return results;
  }, [searchQuery]);

  const handleSelectSearchResult = (result: { room: FloorRoom; floorId: string }) => {
    setActiveFloorId(result.floorId);
    setSelectedRoom(result.room);
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#064e3b] via-[#14532d] to-[#064e3b] text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-600/40">
            <Building2 className="w-3.5 h-3.5" />
            <span>Asiatech Campus Blueprint & Directory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Main Academic Building Floor Plans
          </h2>
          <p className="text-emerald-100/90 text-xs sm:text-sm mt-2 leading-relaxed">
            Explore interactive floor blueprints for First Floor, Mezzanine, Second, Third, and Fourth Floors. Click any room to view official classroom codes, laboratories, faculty workspaces, and campus facilities.
          </p>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="mt-6 flex flex-wrap gap-2.5 relative z-10">
          <button
            onClick={() => setViewMode('blueprint')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer shadow-xs ${
              viewMode === 'blueprint'
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-300'
                : 'bg-emerald-950/70 text-emerald-100 hover:bg-emerald-900 border border-emerald-700/50'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Interactive Floor Blueprints</span>
          </button>

          <button
            onClick={() => setViewMode('offices')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer shadow-xs ${
              viewMode === 'offices'
                ? 'bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-300'
                : 'bg-emerald-950/70 text-emerald-100 hover:bg-emerald-900 border border-emerald-700/50'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>Administrative Offices Directory (Info Only)</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'blueprint' ? (
        <div className="space-y-6">
          {/* Controls Bar: Floor Selector & Room Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            {/* Floor Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase text-slate-400 tracking-wider mr-1 hidden sm:inline">
                Floor:
              </span>
              {floorPlans.map((floor) => {
                const isActive = activeFloorId === floor.id;
                return (
                  <button
                    key={floor.id}
                    onClick={() => handleFloorChange(floor.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#14532d] text-white shadow-sm ring-2 ring-emerald-600/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {floor.name}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search room (e.g. Chem, CL2, OSA, SBO)..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Search Dropdown Results */}
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl z-50 max-h-64 overflow-y-auto p-2 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-2 py-1 block">
                    Found {searchResults.length} Match{searchResults.length > 1 ? 'es' : ''}
                  </span>
                  {searchResults.map(({ room, floorId, floorName }) => (
                    <button
                      key={`${floorId}-${room.id}`}
                      onClick={() => handleSelectSearchResult({ room, floorId })}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-emerald-50 flex items-center justify-between text-xs transition-colors cursor-pointer group"
                    >
                      <div>
                        <span className="font-bold text-slate-900 group-hover:text-emerald-900 block">
                          {room.code}
                        </span>
                        <span className="text-[11px] text-slate-500">{room.name}</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800">
                        {floorName}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Current Floor Title & Description Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {activeFloor.name}
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {activeFloor.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeFloor.description}
              </p>
            </div>
            <div className="text-xs text-slate-400 font-semibold flex items-center gap-1 self-start sm:self-auto">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>North Facing • Open Field side</span>
            </div>
          </div>

          {/* Blueprint Canvas + Detail Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* SVG Interactive Blueprint Viewport */}
            <div className="lg:col-span-8 bg-slate-900 rounded-3xl p-3 sm:p-5 border-2 border-slate-800 shadow-xl overflow-hidden flex flex-col">
              
              {/* Floor Blueprint Frame Title bar */}
              <div className="bg-slate-950/80 rounded-2xl px-4 py-3 border border-slate-800/80 flex items-center justify-between mb-3 text-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-black tracking-wider text-slate-200 uppercase">
                    ASIATECH - MAIN BUILDING
                  </span>
                </div>
                <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                  {activeFloor.id === 'mezzanine' ? 'SECOND FLOOR 2.1 (mezzanine)' : activeFloor.name.toUpperCase()}
                </span>
              </div>

              {/* Responsive SVG Canvas Container */}
              <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-inner border border-slate-300">
                <svg
                  viewBox="0 0 1000 560"
                  className="w-full h-auto block select-none"
                  style={{ minHeight: '380px', maxHeight: '600px' }}
                >
                  <defs>
                    {/* Architectural hatch pattern for stairwells */}
                    <pattern id="stairPattern" width="10" height="6" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="10" y2="0" stroke="#cbd5e1" strokeWidth="1.5" />
                      <line x1="0" y1="3" x2="10" y2="3" stroke="#e2e8f0" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* Canvas Background / Hallway Base */}
                  <rect x="0" y="0" width="1000" height="560" fill="#f8fafc" />

                  {/* ------------------------------------------------------------- */}
                  {/* FLOOR SPECIFIC RENDERINGS                                     */}
                  {/* ------------------------------------------------------------- */}

                  {/* 1. FIRST FLOOR ---------------------------------------------- */}
                  {activeFloorId === 'first-floor' && (
                    <g id="first-floor-group">
                      {/* Open Field (Top Left/Center) */}
                      <rect x="25" y="25" width="670" height="230" fill="#2d6a2e" rx="4" />
                      <text x="360" y="145" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="2">
                        OPEN FIELD
                      </text>

                      {/* Staircase from Open Field to Hallway */}
                      <g transform="translate(365, 220)">
                        <rect x="-35" y="0" width="70" height="60" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <line x1="-35" y1="12" x2="35" y2="12" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="-35" y1="24" x2="35" y2="24" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="-35" y1="36" x2="35" y2="36" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="-35" y1="48" x2="35" y2="48" stroke="#94a3b8" strokeWidth="1.5" />
                        <text x="0" y="38" fill="#1e293b" fontSize="18" fontWeight="bold" textAnchor="middle">↓</text>
                      </g>

                      {/* Main Hallway divider line */}
                      <line x1="25" y1="270" x2="980" y2="270" stroke="#000000" strokeWidth="2.5" />

                      {/* Hallway Label */}
                      <text x="600" y="300" fill="#1e293b" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        HALLWAY
                      </text>

                      {/* Stairs near canteen (going up) */}
                      <g transform="translate(680, 75)">
                        <rect x="0" y="0" width="50" height="60" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <line x1="10" y1="0" x2="10" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="20" y1="0" x2="20" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="30" y1="0" x2="30" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
                        <line x1="40" y1="0" x2="40" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
                        <text x="25" y="36" fill="#1e293b" fontSize="18" fontWeight="bold" textAnchor="middle">→</text>
                      </g>

                      {/* Stairs between JHS Faculty and OSA (downstairs) */}
                      <g transform="translate(725, 335)">
                        <rect x="0" y="0" width="65" height="95" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <line x1="0" y1="18" x2="65" y2="18" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="0" y1="36" x2="65" y2="36" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="0" y1="54" x2="65" y2="54" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="0" y1="72" x2="65" y2="72" stroke="#cbd5e1" strokeWidth="1.5" />
                        <text x="32" y="55" fill="#1e293b" fontSize="20" fontWeight="bold" textAnchor="middle">↓</text>
                      </g>

                      {/* Bottom Black Foundation / Void */}
                      <rect x="25" y="440" width="910" height="100" fill="#1a1a1a" />
                      <rect x="945" y="480" width="35" height="60" fill="#facc15" stroke="#000000" strokeWidth="2" />
                    </g>
                  )}

                  {/* 2. MEZZANINE ------------------------------------------------ */}
                  {activeFloorId === 'mezzanine' && (
                    <g id="mezzanine-group">
                      {/* Open Field Bar at Top */}
                      <rect x="20" y="20" width="960" height="50" fill="#4d7c0f" stroke="#000000" strokeWidth="2" />
                      <text x="500" y="52" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        OPEN FIELD
                      </text>

                      {/* Pink Balcony / Corridor along top and left */}
                      <path
                        d="M 20 70 L 980 70 L 980 160 L 330 160 L 330 90 L 35 90 L 35 280 L 20 280 Z"
                        fill="#f472b6"
                        stroke="#000000"
                        strokeWidth="1.5"
                      />

                      {/* Huge Black Void (Overlooking Ground Floor) */}
                      <rect x="35" y="160" width="770" height="370" fill="#0f172a" />
                      <text x="420" y="350" fill="#334155" fontSize="24" fontWeight="900" textAnchor="middle" letterSpacing="4">
                        OPEN AIRSPACE VOID
                      </text>

                      {/* Staircase (Top Right) */}
                      <g transform="translate(830, 160)">
                        <rect x="0" y="0" width="55" height="80" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <line x1="0" y1="16" x2="55" y2="16" stroke="#94a3b8" strokeWidth="1" />
                        <line x1="0" y1="32" x2="55" y2="32" stroke="#94a3b8" strokeWidth="1" />
                        <line x1="0" y1="48" x2="55" y2="48" stroke="#94a3b8" strokeWidth="1" />
                        <line x1="0" y1="64" x2="55" y2="64" stroke="#94a3b8" strokeWidth="1" />
                        <text x="28" y="48" fill="#1e293b" fontSize="20" fontWeight="bold" textAnchor="middle">↑</text>
                      </g>

                      {/* Vertical Hallway */}
                      <g transform="translate(830, 245)">
                        <rect x="0" y="0" width="50" height="120" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                        <text x="25" y="24" fill="#0f172a" fontSize="13" fontWeight="900" textAnchor="middle">H</text>
                        <text x="25" y="42" fill="#0f172a" fontSize="13" fontWeight="900" textAnchor="middle">A</text>
                        <text x="25" y="60" fill="#0f172a" fontSize="13" fontWeight="900" textAnchor="middle">L</text>
                        <text x="25" y="78" fill="#0f172a" fontSize="13" fontWeight="900" textAnchor="middle">L</text>
                        <text x="25" y="96" fill="#0f172a" fontSize="13" fontWeight="900" textAnchor="middle">W</text>
                        <text x="25" y="114" fill="#0f172a" fontSize="13" fontWeight="900" textAnchor="middle">A</text>
                      </g>

                      {/* Staircase (Bottom Right) */}
                      <g transform="translate(830, 430)">
                        <rect x="0" y="0" width="60" height="60" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <path d="M 0 0 Q 30 25 60 0" fill="none" stroke="#64748b" strokeWidth="2" />
                        <line x1="0" y1="18" x2="60" y2="18" stroke="#94a3b8" strokeWidth="1" />
                        <line x1="0" y1="36" x2="60" y2="36" stroke="#94a3b8" strokeWidth="1" />
                      </g>
                    </g>
                  )}

                  {/* 3. SECOND FLOOR --------------------------------------------- */}
                  {activeFloorId === 'second-floor' && (
                    <g id="second-floor-group">
                      {/* Open Field Bar at Top */}
                      <rect x="10" y="15" width="980" height="45" fill="#4d7c0f" stroke="#000000" strokeWidth="2" />
                      <text x="500" y="44" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        OPEN FIELD
                      </text>

                      {/* Terracotta/Brown Roof Deck */}
                      <rect x="10" y="60" width="980" height="160" fill="#9a3412" stroke="#000000" strokeWidth="2" />

                      {/* Hallway */}
                      <text x="460" y="470" fill="#0f172a" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        HALLWAY
                      </text>

                      {/* Fire Exit (Bottom Left) */}
                      <g transform="translate(10, 440)">
                        <rect x="0" y="0" width="55" height="50" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
                        <text x="27" y="30" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">FIRE EXIT</text>
                      </g>

                      {/* Stairs at bottom right with curved arch */}
                      <g transform="translate(790, 360)">
                        <rect x="0" y="0" width="120" height="60" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <path d="M 0 60 Q 60 10 120 60" fill="none" stroke="#64748b" strokeWidth="2.5" />
                        <line x1="0" y1="20" x2="120" y2="20" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="0" y1="40" x2="120" y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                      </g>
                    </g>
                  )}

                  {/* 4. THIRD FLOOR ---------------------------------------------- */}
                  {activeFloorId === 'third-floor' && (
                    <g id="third-floor-group">
                      {/* Open Field Bar at Top */}
                      <rect x="15" y="15" width="970" height="50" fill="#4d7c0f" stroke="#000000" strokeWidth="2" />
                      <text x="500" y="47" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        OPEN FIELD
                      </text>

                      {/* Terracotta/Brown Upper Area */}
                      <rect x="15" y="65" width="970" height="175" fill="#883b27" stroke="#000000" strokeWidth="2" />

                      {/* Hallway */}
                      <text x="470" y="470" fill="#0f172a" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        HALLWAY
                      </text>

                      {/* Fire Exit (Bottom Left) */}
                      <g transform="translate(15, 435)">
                        <rect x="0" y="0" width="55" height="50" fill="#ffffff" stroke="#64748b" strokeWidth="2" />
                        <text x="27" y="30" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">FIRE EXIT</text>
                      </g>

                      {/* Stairs (Bottom Right with Arch) */}
                      <g transform="translate(760, 335)">
                        <rect x="0" y="0" width="115" height="95" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <path d="M 0 95 Q 57 15 115 95" fill="none" stroke="#64748b" strokeWidth="2.5" />
                        <line x1="0" y1="35" x2="115" y2="35" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="0" y1="65" x2="115" y2="65" stroke="#cbd5e1" strokeWidth="1.5" />
                      </g>
                    </g>
                  )}

                  {/* 5. FOURTH FLOOR --------------------------------------------- */}
                  {activeFloorId === 'fourth-floor' && (
                    <g id="fourth-floor-group">
                      {/* Open Field Bar at Top */}
                      <rect x="15" y="15" width="970" height="40" fill="#4d7c0f" stroke="#000000" strokeWidth="2" />
                      <text x="500" y="42" fill="#ffffff" fontSize="19" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        OPEN FIELD
                      </text>

                      {/* Terracotta/Red Upper Area */}
                      <rect x="15" y="55" width="970" height="165" fill="#b91c1c" stroke="#000000" strokeWidth="2" />

                      {/* Hallway */}
                      <text x="480" y="455" fill="#0f172a" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="3">
                        HALLWAY
                      </text>

                      {/* Fire Exit (Bottom Left) */}
                      <g transform="translate(25, 420)">
                        <rect x="0" y="0" width="45" height="45" fill="#ffffff" stroke="#64748b" strokeWidth="1.5" />
                        <text x="22" y="27" fill="#0f172a" fontSize="7" fontWeight="bold" textAnchor="middle">FIRE EXIT</text>
                      </g>

                      {/* Stairs (Bottom Right with Arch) */}
                      <g transform="translate(760, 315)">
                        <rect x="0" y="0" width="130" height="95" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                        <path d="M 0 95 Q 65 15 130 95" fill="none" stroke="#64748b" strokeWidth="2.5" />
                        <line x1="0" y1="35" x2="130" y2="35" stroke="#cbd5e1" strokeWidth="1.5" />
                        <line x1="0" y1="65" x2="130" y2="65" stroke="#cbd5e1" strokeWidth="1.5" />
                      </g>
                    </g>
                  )}

                  {/* ------------------------------------------------------------- */}
                  {/* INTERACTIVE ROOMS RENDERING                                   */}
                  {/* ------------------------------------------------------------- */}
                  {activeFloor.rooms.map((room) => {
                    const isSelected = selectedRoom?.id === room.id;
                    const isHovered = hoveredRoom?.id === room.id;

                    // Color palette according to user images
                    let fill = '#ea580c'; // default orange
                    let textFill = '#ffffff';

                    if (room.colorType === 'yellow') {
                      fill = '#facc15';
                      textFill = '#0f172a';
                    } else if (room.colorType === 'neutral') {
                      fill = '#ffffff';
                      textFill = '#0f172a';
                    }

                    // Stroke styles
                    const stroke = isSelected ? '#10b981' : '#000000';
                    const strokeWidth = isSelected ? 4 : 2;

                    return (
                      <g
                        key={room.id}
                        onClick={() => setSelectedRoom(room)}
                        onMouseEnter={() => setHoveredRoom(room)}
                        onMouseLeave={() => setHoveredRoom(null)}
                        className="cursor-pointer transition-all duration-150"
                        style={{ outline: 'none' }}
                      >
                        {/* Room Rectangle */}
                        <rect
                          x={room.x}
                          y={room.y}
                          width={room.width}
                          height={room.height}
                          fill={fill}
                          stroke={stroke}
                          strokeWidth={strokeWidth}
                          className={`transition-all duration-150 ${
                            isHovered ? 'filter brightness-110 drop-shadow-md' : ''
                          }`}
                        />

                        {/* If selected, an inner glow or highlight ring */}
                        {isSelected && (
                          <rect
                            x={room.x + 3}
                            y={room.y + 3}
                            width={Math.max(0, room.width - 6)}
                            height={Math.max(0, room.height - 6)}
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeDasharray="4 2"
                          />
                        )}

                        {/* Room Label Text */}
                        <text
                          x={room.x + room.width / 2}
                          y={room.y + (room.subLabel ? room.height / 2 - 6 : room.height / 2 + 5)}
                          fill={textFill}
                          fontSize={
                            room.code.length > 20
                              ? '9'
                              : room.code.length > 12
                              ? '11'
                              : room.code.length > 8
                              ? '13'
                              : '15'
                          }
                          fontWeight="900"
                          textAnchor="middle"
                          pointerEvents="none"
                        >
                          {room.code}
                        </text>

                        {/* Optional Sub-label (e.g. COURT ROOM / 4A4) */}
                        {room.subLabel && (
                          <text
                            x={room.x + room.width / 2}
                            y={room.y + room.height / 2 + 15}
                            fill={textFill}
                            fontSize="13"
                            fontWeight="900"
                            textAnchor="middle"
                            pointerEvents="none"
                          >
                            {room.subLabel}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Blueprint Footer Bar (Removed legend as requested) */}
              <div className="flex items-center justify-end text-xs text-slate-400 mt-3 pt-2 border-t border-slate-800">
                <span>Click any room on the blueprint to view info</span>
              </div>

            </div>

            {/* Room Details Side Panel */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              {selectedRoom ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                      selectedRoom.category === 'Laboratory'
                        ? 'bg-purple-100 text-purple-800'
                        : selectedRoom.category === 'Student Services'
                        ? 'bg-emerald-100 text-emerald-800'
                        : selectedRoom.category === 'Faculty & Office'
                        ? 'bg-blue-100 text-blue-800'
                        : selectedRoom.category === 'Amenities'
                        ? 'bg-amber-100 text-amber-900'
                        : selectedRoom.category === 'Stock Room'
                        ? 'bg-orange-100 text-orange-800'
                        : selectedRoom.category === 'Restroom'
                        ? 'bg-slate-100 text-slate-700'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {selectedRoom.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {activeFloor.name}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                      {selectedRoom.name}
                    </h4>
                    <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md mt-1 border border-emerald-200">
                      Code: {selectedRoom.code} {selectedRoom.subLabel ? `(${selectedRoom.subLabel})` : ''}
                    </span>
                  </div>

                  {/* Helpful Context Tips */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-950 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Student Campus Reminder</span>
                    </div>
                    <p className="text-[11px] text-emerald-900/90 leading-relaxed">
                      Always wear your official Asiatech Student ID card before entering classrooms and administrative areas. Observe proper grooming and campus decency.
                    </p>
                  </div>

                </div>
              ) : (
                <div className="text-center py-16 text-slate-400 space-y-2">
                  <HelpCircle className="w-10 h-10 mx-auto text-slate-300" />
                  <h5 className="font-bold text-slate-700 text-sm">Select Any Room on the Map</h5>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Click any classroom, laboratory, or office on the blueprint to view its purpose and details.
                  </p>
                </div>
              )}

              {/* Quick Room Shortcuts for Current Floor */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  Quick Room Switch:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeFloor.rooms.slice(0, 8).map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedRoom?.id === room.id
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {room.code}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      ) : (
        /* ------------------------------------------------------------- */
        /* ADMINISTRATIVE OFFICES DIRECTORY (INFO ONLY)                   */
        /* ("yung mga ganyan wag mo na lagyan ng location info nalang")   */
        /* ------------------------------------------------------------- */
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-800">
                <FileText className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Administrative Offices & Student Services Directory
                </h3>
                <p className="text-xs text-slate-500">
                  Direct information for student records, enrollment, accounting, health, and welfare services.
                </p>
              </div>
            </div>

            {/* Office Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {administrativeOfficesInfo.map((office) => {
                const isSelected = selectedOffice?.id === office.id;
                return (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#14532d] text-white shadow-sm ring-2 ring-emerald-600/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {office.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Office Detail View ("Info nalang - No fake location directions") */}
          {selectedOffice && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    {selectedOffice.category}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                    {selectedOffice.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {selectedOffice.description}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 self-start sm:self-auto flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <div className="text-xs text-slate-700">
                    <span className="font-bold block text-slate-900">Office Hours</span>
                    <span className="text-[11px] text-slate-500">{selectedOffice.operatingHours}</span>
                  </div>
                </div>
              </div>

              {/* 2-Column Grid: Services & Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Available Services */}
                <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <h5 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                      Services & Transactions
                    </h5>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedOffice.services.map((svc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common Requirements */}
                {selectedOffice.requirements && (
                  <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-700" />
                      <h5 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                        What to Prepare
                      </h5>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {selectedOffice.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
