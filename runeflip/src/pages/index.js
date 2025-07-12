// src/pages/index.js
import { useState, useEffect } from 'react';

export default function RuneFlip() {
  const [activeTab, setActiveTab] = useState('create');
  const [isScrolling, setIsScrolling] = useState(false);

  // Track scroll for dynamic effects
  useEffect(() => {
    const handleScroll = () => setIsScrolling(true);
    const timer = setTimeout(() => setIsScrolling(false), 300);
    return () => clearTimeout(timer);
  }, [isScrolling]);

  // Design Tokens
  const design = {
    colors: {
      bg: '#0C0D12',
      primary: '#3FE0D0',
      secondary: '#9F6CFF',
      gold: '#FFD66B',
      panel: 'rgba(26, 28, 46, 0.85)',
      panelBorder: 'rgba(63, 224, 208, 0.15)'
    },
    effects: {
      glass: `
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        background: rgba(26, 28, 46, 0.85);
        border: 1px solid rgba(63, 224, 208, 0.15);
      `,
      shadow: '0 12px 40px rgba(0, 0, 0, 0.25)'
    }
  };

  // Perfect Circle Coin Component
  const RuneCoin = () => (
    <div style={{
      width: '280px',
      height: '280px',
      margin: '0 auto 32px',
      perspective: '1000px'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.8s',
        transform: activeTab === 'heads' ? 'rotateY(0deg)' : 'rotateY(180deg)'
      }}>
        {/* Front Side */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #2D2F42, #1A1C2E)',
          border: '3px solid #3FE0D0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backfaceVisibility: 'hidden',
          boxShadow: `
            0 0 25px rgba(63, 224, 208, 0.3),
            inset 0 0 15px rgba(63, 224, 208, 0.2)
          `
        }}>
          <span style={{
            fontSize: '72px',
            color: '#FFD66B',
            textShadow: '0 0 15px rgba(255, 214, 107, 0.7)',
            fontFamily: '"Rajdhani", sans-serif'
          }}>ᚠ</span>
        </div>
        
        {/* Back Side */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 70% 30%, #2D2F42, #1A1C2E)',
          border: '3px solid #9F6CFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          boxShadow: `
            0 0 25px rgba(159, 108, 255, 0.3),
            inset 0 0 15px rgba(159, 108, 255, 0.2)
          `
        }}>
          <span style={{
            fontSize: '72px',
            color: '#FFD66B',
            textShadow: '0 0 15px rgba(255, 214, 107, 0.7)',
            fontFamily: '"Rajdhani", sans-serif'
          }}>ᚢ</span>
        </div>
      </div>
    </div>
  );

  // Modern Scrollable Panel
  const ScrollPanel = ({ children }) => (
    <div style={{
      overflowY: 'auto',
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none', /* IE/Edge */
      '&::-webkit-scrollbar': {
        display: 'none' /* Chrome/Safari */
      },
      paddingRight: '8px',
      marginRight: '-8px'
    }}>
      {children}
    </div>
  );

  return (
    <div style={{
      height: '100vh',
      background: design.colors.bg,
      color: 'white',
      fontFamily: '"Rajdhani", sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Upper Panel */}
      <div style={{
        flex: '0 0 60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '40px',
        position: 'relative',
        zIndex: 2
      }}>
        <RuneCoin />
        
        {/* Tab Selector */}
        <div style={{
          display: 'flex',
          background: 'rgba(20, 22, 37, 0.8)',
          borderRadius: '12px',
          padding: '6px',
          marginBottom: '24px',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
        }}>
          {['create', 'join', 'multi'].map(tab => (
            <button
              key={tab}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                background: activeTab === tab ? 
                  'linear-gradient(90deg, #3FE0D0, #2ECFB9)' : 'transparent',
                color: activeTab === tab ? '#000' : '#9F6CFF',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'multi' ? 'Multi' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Stake Input */}
        <div style={{ display: 'flex', marginBottom: '32px' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="number"
              placeholder="0.001"
              style={{
                background: 'rgba(30, 31, 43, 0.8)',
                color: 'white',
                padding: '14px 16px',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                width: '160px',
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
              min="0.001"
              step="0.001"
            />
            <span style={{
              position: 'absolute',
              right: '16px',
              top: '14px',
              color: '#9F6CFF',
              pointerEvents: 'none'
            }}>SOL</span>
          </div>
          <button style={{
            background: 'linear-gradient(90deg, #FFD66B, #F5C85E)',
            color: '#000',
            padding: '14px 24px',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            ':hover': {
              transform: 'translateY(-1px)'
            }
          }}>
            {activeTab === 'join' ? 'Join' : 'Flip'}
          </button>
        </div>
      </div>

      {/* Lower Panel */}
      <div style={{
        flex: '1',
        display: 'flex',
        background: design.colors.bg,
        borderTop: '1px solid rgba(63, 224, 208, 0.1)',
        position: 'relative'
      }}>
        {/* History Panel */}
        <div style={{
          width: '50%',
          padding: '24px',
          borderRight: '1px solid rgba(63, 224, 208, 0.1)'
        }}>
          <h3 style={{
            color: '#FFD66B',
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px',
            paddingLeft: '12px',
            borderLeft: '3px solid #3FE0D0'
          }}>Match History</h3>
          <ScrollPanel>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{
                background: 'rgba(30, 31, 43, 0.6)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                borderLeft: `3px solid ${i % 2 ? '#3FE0D0' : '#FF5555'}`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ color: '#9F6CFF', fontSize: '14px' }}>Game #{i+1}</p>
                    <p style={{ color: 'white' }}>vs. 7y14...W9j3</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ 
                      fontWeight: 'bold', 
                      color: i % 2 ? '#3FE0D0' : '#FF5555'
                    }}>
                      {i % 2 ? '+0.25 SOL' : '-0.25 SOL'}
                    </p>
                    <p style={{ color: '#9F6CFF', fontSize: '12px' }}>2 mins ago</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollPanel>
        </div>

        {/* Open Games Panel */}
        <div style={{ width: '50%', padding: '24px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            marginBottom: '16px',
            alignItems: 'center'
          }}>
            <h3 style={{
              color: '#FFD66B',
              fontSize: '18px',
              fontWeight: 600,
              paddingLeft: '12px',
              borderLeft: '3px solid #9F6CFF'
            }}>Open Games</h3>
            <button style={{
              background: 'none',
              border: 'none',
              color: '#3FE0D0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>Auto-Join</span>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '4px',
                background: '#3FE0D0',
                opacity: 0.7
              }} />
            </button>
          </div>
          <ScrollPanel>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{
                background: 'rgba(30, 31, 43, 0.6)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#9F6CFF' }}>Game #{i+1}</span>
                  <span style={{ color: '#FFD66B', fontWeight: 600 }}>{0.25 + (i*0.25)} SOL</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#3FE0D0',
                      marginRight: '8px',
                      boxShadow: '0 0 8px #3FE0D0'
                    }} />
                    <span>Waiting...</span>
                  </div>
                  <button style={{
                    background: 'linear-gradient(90deg, #3FE0D0, #2ECFB9)',
                    color: '#000',
                    padding: '6px 16px',
                    borderRadius: '6px',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    Join
                  </button>
                </div>
              </div>
            ))}
          </ScrollPanel>
        </div>
      </div>
    </div>
  );
}
