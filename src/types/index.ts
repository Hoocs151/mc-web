// =====================================================
// Application Type Definitions
// =====================================================

import React from 'react';

// Server & Configuration Types
export interface ServerInfo {
  ip: string;
  version: string;
  name: string;
}

// API Response Types
export interface McSrvStatResponse {
  online: boolean;
  ip: string;
  port: number;
  debug: {
    ping: boolean;
    query: boolean;
    srv: boolean;
    querymismatch: boolean;
    ipinsrv: boolean;
    cnameinsrv: boolean;
    animatedmotd: boolean;
    cachehit: boolean;
    cachetime: number;
    cacheexpire: number;
    apiversion: number;
  };
  motd?: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  players?: {
    online: number;
    max: number;
    list?: string[];
  };
  version?: string;
  protocol?: number;
  hostname?: string;
  icon?: string;
  software?: string;
  map?: string;
  gamemode?: string;
  serverid?: string;
  eula_blocked?: boolean;
}

// Voting System Types
export interface VotingSite {
  name: string;
  url: string;
}

export interface VotingReward {
  title: string;
  icon: string;
}

// Rules System Types
export interface Rule {
  id: number;
  title: string;
  icon: React.ComponentType;
  content: string[];
}

// Player & Server State Types
export interface PlayerCountState {
  count: number;
  loading: boolean;
  error: string | null;
}

export interface ServerStatusState {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  version?: string;
  motd?: string;
  loading: boolean;
  error: string | null;
  lastUpdated?: Date;
}

// Component Props Types
export interface LoadingSpinnerProps {
  size?: string;
  className?: string;
}

export interface ToastProps {
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
  onClose: () => void;
}

// Animation Types
export interface AnimationVariant {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}