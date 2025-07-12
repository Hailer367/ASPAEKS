// src/pages/index.js
import { useState } from 'react';

export default function RuneFlip() {
  const [activeTab, setActiveTab] = useState('create');

  // Inlined styles to match PDF exactly
  const styles = {
    background: '#0C0D12', // Deep space black from PDF
    primary: '#3FE0D0', // Teal accent
    secondary: '#9F6CFF', // Purple accent
    gold: '#FFD66B', // Gold highlight
    panelDark: '#1A1C2E', // Dark panel
    panelDarker: '#141625', // Darker panel
  };

  const UpperPanel = () => (
    <div style={{
      height: '60vh',
      backgroundColor: styles.background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '40px'
    }}>
      {/* Rune Coin */}
      <div style={{
        width: '280px',
        height: '280px',
        marginBottom: '32px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '4px solid ' + styles.primary,
          backgroundColor: styles.panelDark,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 20px ${styles.primary}80`
        }}>
          <span style={{
            fontSize: '72px',
            color: styles.gold,
            fontFamily: '"Rajdhani", sans-serif'
          }}>
            {activeTab === 'heads' ? 'ᚠ' : 'ᚢ'}
          </span>
        </div>
      </div>

      {/* Game Mode Selector */}
      <div style={{
        display: 'flex',
        marginBottom: '24px',
        backgroundColor: styles.panelDarker,
        borderRadius: '8px',
        padding: '4px'
      }}>
        {['create', 'join', 'multi'].map((tab) => (
          <button
            key={tab}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: activeTab === tab ? styles.primary : 'transparent',
              color: activeTab === tab ? '#000' : styles.secondary,
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              textTransform: 'capitalize'
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'multi' ? 'Multi-Game' : tab + ' Game'}
          </button>
        ))}
      </div>

      {/* Stake Input */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
        <div style={{ position: 'relative' }}>
          <input
            type="number"
            placeholder="0.001"
            style={{
              backgroundColor: styles.panelDarker,
              color: '#FFF',
              padding: '12px',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
              width: '160px',
              paddingRight: '40px',
              border: 'none',
              outline: 'none'
            }}
            min="0.001"
            step="0.001"
          />
          <span style={{
            position: 'absolute',
            right: '12px',
            top: '12px',
            color: styles.secondary
          }}>
            SOL
          </span>
        </div>
        <button style={{
          backgroundColor: styles.gold,
          color: '#000',
          padding: '12px 24px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginLeft: '1px'
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
      backgroundColor: styles.background
    }}>
      {/* Left Panel - History */}
      <div style={{
        width: '50%',
        backgroundColor: styles.panelDarker,
        padding: '16px',
        overflowY: 'auto',
        borderTop: `1px solid ${styles.primary}20`
      }}>
        <h3 style={{
          color: styles.gold,
          fontSize: '18px',
          marginBottom: '16px',
          fontWeight: 600
        }}>
          Your Matches
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Array(5).fill().map((_, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px',
              backgroundColor: styles.panelDark,
              borderRadius: '8px',
              borderLeft: `4px solid ${styles.primary}`
            }}>
              <div>
                <p style={{ color: styles.secondary, fontSize: '14px' }}>
                  #{i+1} • 2 min ago
                </p>
                <p style={{ color: '#FFF' }}>vs. 7y14...W9j3</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ 
                  fontWeight: 'bold',
                  color: i % 2 ? styles.primary : '#FF5555'
                }}>
                  {i % 2 ? '+0.25 SOL' : '-0.25 SOL'}
                </p>
                <p style={{ color: styles.secondary, fontSize: '12px' }}>
                  Fee: 0.0025 SOL
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Open Games */}
      <div style={{
        width: '50%',
        backgroundColor: styles.panelDarker,
        padding: '16px',
        overflowY: 'auto',
        borderTop: `1px solid ${styles.primary}20`,
        borderLeft: `1px solid ${styles.primary}20`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h3 style={{
            color: styles.gold,
            fontSize: '18px',
            fontWeight: 600
          }}>
            Open Games
          </h3>
          <button style={{
            color: styles.primary,
            fontSize: '14px',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>
            Auto-Join
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Array(3).fill().map((_, i) => (
            <div key={i} style={{
              padding: '12px',
              backgroundColor: styles.panelDark,
              borderRadius: '8px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <span style={{ color: styles.secondary }}>#{i+1}</span>
                <span style={{ color: styles.gold }}>{0.25 + (i*0.25)} SOL</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: styles.primary,
                    marginRight: '8px'
                  }}></div>
                  <span>Waiting...</span>
                </div>
                <button style={{
                  backgroundColor: styles.primary,
                  color: '#000',
                  padding: '4px 16px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer'
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
      backgroundColor: styles.background,
      color: 'white',
      fontFamily: '"Rajdhani", sans-serif'
    }}>
      <UpperPanel />
      <LowerPanel />
    </div>
  );
}
