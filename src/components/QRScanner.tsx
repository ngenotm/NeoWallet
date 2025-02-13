
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface QRScannerProps {
  onScan: (result: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const QRScanner = ({ onScan, isOpen, onClose }: QRScannerProps) => {
  const { toast } = useToast();
  
  const handleScan = (result: any) => {
    if (result?.text) {
      onScan(result.text);
      onClose();
      toast({
        title: "QR Code Scanned",
        description: "Payment details loaded successfully",
      });
    }
  };

  const handleError = (error: any) => {
    toast({
      title: "Scanner Error",
      description: "Please ensure camera permissions are enabled",
      variant: "destructive",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Scan QR Code</DialogTitle>
        </DialogHeader>
        <div className="w-full aspect-square">
          {isOpen && (
            <QrReader
              constraints={{ facingMode: 'environment' }}
              onResult={handleScan}
              containerStyle={{ width: '100%', height: '100%' }}
              videoStyle={{ width: '100%', height: '100%' }}
              scanDelay={500}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRScanner;
