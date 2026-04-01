import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, icon, color }) => {
  return (
    <div className={`stat-card border-${color}`}>
      <div className="stat-info">
        <span className="stat-title">{title}</span>
        <span className="stat-value">{value}</span>
        <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          <span>{change}</span>
        </div>
      </div>
      <div className={`stat-icon-wrapper ${color === 'blue' ? 'accent' : color}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
