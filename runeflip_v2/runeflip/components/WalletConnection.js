import { useWallet, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react';
import { WalletModalContextProvider } from '@solana/wallet-adapter-react-ui';

export default function WalletConnection() {
  const wallet = useWallet();

  return (
    <div className="absolute top-4 right-4">
      <WalletModalProvider>
        <WalletModalContextProvider>
          <WalletMultiButton />
        </WalletModalContextProvider>
      </WalletModalProvider>
      {wallet.connected && (
        <p className="text-xs mt-1 truncate w-48 text-right">
          {wallet.publicKey?.toString()}
        </p>
      )}
    </div>
  );
}// Wallet Connection Logic
