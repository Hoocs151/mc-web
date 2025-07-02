import { useState, useEffect } from 'react';
import { McSrvStatResponse, ServerStatusState } from '../types';
import { SERVER, API } from '../constants';

export const usePlayerCount = () => {
  const [state, setState] = useState<ServerStatusState>({
    online: false,
    players: { online: 0, max: 0 },
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        setState(prev => ({ ...prev, loading: true }));

        const response = await fetch(`${API.MCSRVSTAT}/${SERVER.IP}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: McSrvStatResponse = await response.json();

        setState({
          online: data.online,
          players: {
            online: data.players?.online || 0,
            max: data.players?.max || 0,
          },
          version: data.version,
          motd: data.motd?.clean?.[0] || data.motd?.raw?.[0],
          loading: false,
          error: null,
          lastUpdated: new Date(),
        });

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch server status';
        setState(prev => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
        console.error('Error fetching server status:', err);
      }
    };

    // Initial fetch
    fetchServerStatus();

    // Set up interval for periodic updates
    const interval = setInterval(fetchServerStatus, API.UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Return data in the expected format for backward compatibility
  return {
    playerCount: state.players.online,
    loading: state.loading,
    error: state.error,
    // Additional server status data
    serverStatus: state,
  };
};