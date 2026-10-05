import React, { useState, useEffect } from 'react';

export const MadridClock: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [locationName, setLocationName] = useState<string>('LOCAL');

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) {
        const city = tz.split('/').pop()?.replace(/_/g, ' ').toUpperCase() || 'LOCAL';
        setLocationName(city);
      }
    } catch (e) {
      // fallback
    }

    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        month: 'short',
        day: 'numeric'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-neutral-600 font-medium tracking-wider">
      <span className="font-semibold text-neutral-800">{locationName}</span>
      <span className="text-neutral-400">•</span>
      <span className="tabular-nums font-mono text-neutral-700">{timeStr || '12:00:00 PM'}</span>
    </div>
  );
};
