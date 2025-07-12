// src/pages/index.js
import { useState } from 'react';

export default function RuneFlip() {
  const [activeTab, setActiveTab] = useState('create');

  // Design system
  const design = {
    colors: {
      background: '#0C0D12',
      primary: '#3FE0D0',
      secondary: '#9F6CFF',
      gold: '#FFD66B',
      panelDark: '#1A1C2E',
      panelDarker: '#141625'
    },
    radii: {
      panel: '24px', // Larger radius for modern look
      element: '12px'
    },
    shadows: {
      panel: '0 8px 32px rgba(0, 0, 0, 0.3)',
      inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
    }
  };

  const UpperPanel = () => (
    <div style={{
      height: '60vh',
      backgroundColor: design.colors.background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '40px',
      position: 'relative',
      zIndex: 2,
      borderBottomLeftRadius: design.radii.panel,
      borderBottomRightRadius: design.radii.panel,
      boxShadow: design.shadows.panel
    }}>
      {/* Floating coin container */}
      <div style={{
        width: '280px',
        height: '280px',
        marginBottom: '32px',
        position: 'relative',
        filter: 'drop-shadow(0 10px 20px rgba(63, 224, 208, 0.2))'
      }}>
        {/* Sleek 3D coin */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `4px solid ${design.colors.primary}`,
          background: `linear-gradient(145deg, ${design.colors.panelDark} 0%, ${design.colors.panelDarker} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          boxShadow: `
            0 0 15px ${design.colors.primary}80,
            ${design.shadows.inset}
          `
        }}>
          <span style={{
            fontSize: '72px',
            color: design.colors.gold,
            fontFamily: '"Rajdhani", sans-serif',
            textShadow: '0 0 10px rgba(255, 214, 107, 0.5)'
          }}>
            {activeTab === 'heads' ? 'ᚠ' : 'ᚢ'}
          </span>
        </div>
      </div>

      {/* Modern tab selector */}
      <div style={{
        display: 'flex',
        marginBottom: '24px',
        background: design.colors.panelDarker,
        borderRadius: design.radii.element,
        padding: '4px',
        boxShadow: design.shadows.inset
      }}>
        {['create', 'join', 'multi'].map((tab) => (
          <button
            key={tab}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: activeTab === tab ? 
                `linear-gradient(90deg, ${design.colors.primary}, #2ECFB9)` : 
                'transparent',
              color: activeTab === tab ? '#000' : design.colors.secondary,
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              textTransform: 'capitalize',
              transition: 'all 0.2s ease',
              boxShadow: activeTab === tab ? 
                '0 2px 8px rgba(63, 224, 208, 0.3)' : 'none'
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'multi' ? 'Multi-Game' : tab + ' Game'}
          </button>
        ))}
      </div>

      {/* Premium stake input */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '32px',
        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))'
      }}>
        <div style={{ position: 'relative' }}>
          <input
            type="number"
            placeholder="0.001"
            style={{
              background: design.colors.panelDarker,
              color: '#FFF',
              padding: '14px 16px',
              borderTopLeftRadius: design.radii.element,
              borderBottomLeftRadius: design.radii.element,
              width: '160px',
              paddingRight: '40px',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              boxShadow: design.shadows.inset
            }}
            min="0.001"
            step="0.001"
          />
          <span style={{
            position: 'absolute',
            right: '16px',
            top: '14px',
            color: design.colors.secondary,
            fontWeight: 500
          }}>
            SOL
          </span>
        </div>
        <button style={{
          background: `linear-gradient(90deg, ${design.colors.gold}, #F5C85E)`,
          color: '#000',
          padding: '14px 24px',
          borderTopRightRadius: design.radii.element,
          borderBottomRightRadius: design.radii.element,
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(255, 214, 107, 0.3)',
          ':hover': {
            transform: 'translateY(-1px)'
          }
        }}>
          {activeTab === 'join' ? 'Join' : 'Flip'}
        </button>
      </div>
    </div>
  );

  const LowerPanel = () => (
    <div style={{
      height: '40vh',
      display: 'flex',
      position: 'relative',
      zIndex: 1,
      marginTop: '-20px', // Overlap with upper panel
      paddingTop: '20px' // Compensate for overlap
    }}>
      {/* Left Panel - Sleek history */}
      <div style={{
        width: '50%',
        background: design.colors.panelDarker,
        padding: '24px',
        overflowY: 'auto',
        borderTopLeftRadius: design.radii.panel,
        boxShadow: design.shadows.panel,
        marginRight: '1px' // Prevents gap between panels
      }}>
        {/* Panel header with accent line */}
        <div style={{
          borderLeft: `3px solid ${design.colors.primary}`,
          paddingLeft: '12px',
          marginBottom: '24px'
        }}>
          <h3 style={{
            color: design.colors.gold,
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}>
            Your Matches
          </h3>
        </div>
        
        {/* Modern card list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Array(5).fill().map((_, i) => (
            <div key={i} style={{
              background: `linear-gradient(90deg, ${design.colors.panelDark}, ${design.colors.panelDarker})`,
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              borderLeft: `3px solid ${i % 2 ? design.colors.primary : '#FF5555'}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ 
                    color: design.colors.secondary, 
                    fontSize: '14px',
                    marginBottom: '4px'
                  }}>
                    #{i+1} • 2 min ago
                  </p>
                  <p style={{ 
                    color: '#FFF', 
                    fontWeight: 500,
                    letterSpacing: '0.3px'
                  }}>
                    vs. 7y14...W9j3
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ 
                    fontWeight: 'bold',
                    color: i % 2 ? design.colors.primary : '#FF5555',
                    fontSize: '16px'
                  }}>
                    {i % 2 ? '+0.25 SOL' : '-0.25 SOL'}
                  </p>
                  <p style={{ 
                    color: design.colors.secondary, 
                    fontSize: '12px',
                    opacity: 0.8
                  }}>
                    Fee: 0.0025 SOL
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Premium open games */}
      <div style={{
        width: '50%',
        background: design.colors.panelDarker,
        padding: '24px',
        overflowY: 'auto',
        borderTopRightRadius: design.radii.panel,
        boxShadow: design.shadows.panel,
        position: 'relative'
      }}>
        {/* Panel header with flex layout */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          borderLeft: `3px solid ${design.colors.secondary}`,
          paddingLeft: '12px'
        }}>
          <h3 style={{
            color: design.colors.gold,
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}>
            Open Games
          </h3>
          <button style={{
            color: design.colors.primary,
            fontSize: '14px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>Auto-Join</span>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '4px',
              background: design.colors.primary,
              opacity: 0.7
            }} />
          </button>
        </div>

        {/* Glowing game cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Array(3).fill().map((_, i) => (
            <div key={i} style={{
              background: `linear-gradient(90deg, ${design.colors.panelDark}, ${design.colors.panelDarker})`,
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              border: `1px solid ${design.colors.primary}20`
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <span style={{ 
                  color: design.colors.secondary,
                  fontSize: '14px'
                }}>
                  #{i+1}
                </span>
                <span style={{ 
                  color: design.colors.gold,
                  fontWeight: 600,
                  fontSize: '16px'
                }}>
                  {0.25 + (i*0.25)} SOL
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: design.colors.primary,
                    marginRight: '8px',
                    boxShadow: `0 0 8px ${design.colors.primary}`
                  }} />
                  <span>Waiting for opponent...</span>
                </div>
                <button style={{
                  background: `linear-gradient(90deg, ${design.colors.primary}, #2ECFB9)`,
                  color: '#000',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: `0 2px 8px ${design.colors.primary}80`
                  }
                }}>
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: design.colors.background,
      color: 'white',
      fontFamily: '"Rajdhani", sans-serif',
      overflow: 'hidden'
    }}>
      <UpperPanel />
      <LowerPanel />
    </div>
  );
}
