import { Card } from "@/components/ui/card";
import { DollarSign, PieChart, ArrowUpRight, ArrowDownRight, Send, Download, Users, Wallet, Scan } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { useState } from "react";
import QRScanner from "@/components/QRScanner";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const data = [
  { name: "Jan", value: 24000 },
  { name: "Feb", value: 13980 },
  { name: "Mar", value: 98000 },
  { name: "Apr", value: 39080 },
  { name: "May", value: 48000 },
  { name: "Jun", value: 38000 },
];

const Index = () => {
  const [isQRScannerOpen, setIsQRScannerOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleScan = (result: string) => {
    try {
      const scannedData = JSON.parse(result);
      navigate('/send', { state: { scannedData } });
    } catch (error) {
      toast({
        title: "Invalid QR Code",
        description: "Could not process QR code data",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">Welcome back, Yashwanth!</h1>
          <p className="text-gray-400">Manage your digital wallet and payments</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsQRScannerOpen(true)}
            className="glass-card px-4 py-2 rounded-lg hover-scale text-white"
          >
            <Scan className="h-5 w-5" />
          </button>
          <button className="glass-card px-4 py-2 rounded-lg hover-scale text-white">
            <Send className="h-5 w-5" />
          </button>
          <button className="glass-card px-4 py-2 rounded-lg hover-scale text-white">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </header>

      <QRScanner
        isOpen={isQRScannerOpen}
        onClose={() => setIsQRScannerOpen(false)}
        onScan={handleScan}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Balance</p>
              <h2 className="text-2xl font-bold text-white">₹24,563.00</h2>
            </div>
            <div className="p-2 bg-green-500/20 rounded-full">
              <Wallet className="h-4 w-4 text-green-500" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">Monthly Income</p>
              <h2 className="text-2xl font-bold text-white">₹83,500.00</h2>
            </div>
            <div className="p-2 bg-blue-500/20 rounded-full">
              <ArrowUpRight className="h-4 w-4 text-blue-500" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">Monthly Expenses</p>
              <h2 className="text-2xl font-bold text-white">₹36,280.00</h2>
            </div>
            <div className="p-2 bg-red-500/20 rounded-full">
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">Auto-Savings</p>
              <h2 className="text-2xl font-bold text-white">₹5,430.00</h2>
            </div>
            <div className="p-2 bg-purple-500/20 rounded-full">
              <DollarSign className="h-4 w-4 text-purple-500" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-white">Spending Overview</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.1)' 
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { type: "Shopping", amount: -1500, time: "2 hours ago", category: "Groceries" },
              { type: "Received", amount: 2500, time: "5 hours ago", category: "Transfer" },
              { type: "Bills", amount: -3600, time: "1 day ago", category: "Utilities" },
            ].map((transaction, i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    transaction.amount > 0 ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    <PieChart className={`h-4 w-4 ${
                      transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{transaction.type}</p>
                    <p className="text-sm text-gray-400">{transaction.category}</p>
                    <p className="text-xs text-gray-500">{transaction.time}</p>
                  </div>
                </div>
                <p className={`font-medium ${
                  transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
