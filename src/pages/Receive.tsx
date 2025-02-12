
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Copy, Wallet, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReceiveMoney = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const walletId = "NEOW1234567"; // Mock wallet ID

  const handleCopyWalletId = () => {
    navigator.clipboard.writeText(walletId);
    toast({
      title: "Copied!",
      description: "Wallet ID copied to clipboard",
    });
  };

  const handleRequestMoney = () => {
    if (!amount) {
      toast({
        title: "Error",
        description: "Please enter an amount",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Payment request has been sent",
    });
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">Receive Money</h1>
        <p className="text-secondary-foreground">Request payments or share your wallet details</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Share Your Wallet ID</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <Wallet className="h-5 w-5 text-purple-500" />
                <span className="font-mono text-white">{walletId}</span>
              </div>
              <button
                onClick={handleCopyWalletId}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Copy className="h-4 w-4 text-purple-500" />
              </button>
            </div>

            <div className="aspect-square max-w-[200px] mx-auto bg-white p-4 rounded-lg">
              <QrCode className="w-full h-full text-black" />
            </div>
            <p className="text-sm text-center text-gray-400">
              Scan this QR code to instantly send money to this wallet
            </p>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Request Money</h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="amount" className="text-white">Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-2xl font-bold bg-white/5 border-white/10 text-white"
                placeholder="0.00"
              />
            </div>

            <div>
              <Label htmlFor="note" className="text-white">Add a note</Label>
              <Input
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
                placeholder="What's this for?"
              />
            </div>

            <button
              onClick={handleRequestMoney}
              className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Request Payment
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ReceiveMoney;
