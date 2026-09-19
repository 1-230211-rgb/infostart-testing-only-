import React from 'react';
import { Facility } from '../types';
import { 
  X, 
  MapPin, 
  Clock, 
  UserCheck, 
  CheckCircle2, 
  BookOpen, 
  Landmark, 
  Monitor, 
  Cross, 
  Compass, 
  Coffee, 
  Dumbbell, 
  DollarSign, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface FacilityModalProps {
  facility: Facility | null;
  isOpen: boolean;
  onClose: () => void;
  isExplored: boolean;
  onMarkExplored: (id: string) => void;
  onOpenMapLocation?: (location: string) => void;
}

export const FacilityModal: React.FC<FacilityModalProps> = ({
  facility,
  isOpen,
  onClose,
  isExplored,
  onMarkExplored,
  onOpenMapLocation,
}) => {
  if (!isOpen || !facility) return null;

  const renderIcon = (iconName: string) => {
    const classNames = "w-8 h-8 text-emerald-700";
    switch (iconName) {
      case 'books': return <BookOpen className={classNames} />;
      case 'building': return <Landmark className={classNames} />;
      case 'monitor': return <Monitor className={classNames} />;
      case 'clinic': return <Cross className={classNames} />;
      case 'guidance': return <Compass className={classNames} />;
      case 'cafeteria': return <Coffee className={classNames} />;
      case 'gym': return <Dumbbell className={classNames} />;
      case 'cashier': return <DollarSign className={classNames} />;
      default: return <HelpCircle className={classNames} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header */}
        <div className="relative p-6 pb-4 bg-gradient-to-r from-emerald-50 to-teal-50/50 border-b border-emerald-100 rounded-t-3xl flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-emerald-200/80 flex items-center justify-center">
              {renderIcon(facility.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black text-slate-900">{facility.name}</h3>
                {isExplored && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Explored
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{facility.shortDesc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5">
          {/* Quick Details Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-700">Location</div>
                <div className="text-slate-600 mt-0.5">{facility.location}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-slate-700">Operating Hours</div>
                <div className="text-slate-600 mt-0.5">{facility.operatingHours}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1.5">Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {facility.description}
            </p>
          </div>

          {/* Services Provided */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2">Services & Functions</h4>
            <ul className="space-y-2">
              {facility.servicesProvided.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements or Important Notes */}
          {facility.requirementsOrNotes && (
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Important Reminders: </span>
                <span>{facility.requirementsOrNotes}</span>
              </div>
            </div>
          )}

          {/* Contact Person */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <UserCheck className="w-4 h-4 text-slate-400" />
            <span>Officer-in-charge: <strong className="text-slate-700">{facility.contactPerson}</strong></span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-3 bg-slate-50 rounded-b-3xl border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          {onOpenMapLocation && (
            <button
              onClick={() => {
                onClose();
                onOpenMapLocation(facility.location);
              }}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 underline cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Locate on Campus Map</span>
            </button>
          )}

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/70 transition-colors"
            >
              Close
            </button>

            {!isExplored ? (
              <button
                onClick={() => onMarkExplored(facility.id)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#14532d] text-white hover:bg-[#0f3d20] shadow-xs flex items-center gap-1.5 transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mark as Explored (+10%)</span>
              </button>
            ) : (
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Explored
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
