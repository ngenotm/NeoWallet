
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, User, DollarSign, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock user data
const mockUsers = [
  { id: 1, name: "Rahul Kumar", email: "rahul@example.com", phone: "+91 98765 43210" },
  { id: 2, name: "Priya Singh", email: "priya@example.com", phone: "+91 98765 43211" },
  { id: 3, name: "Amit Patel", email: "amit@example.com", phone: "+91 98765 43212" },
  { id: 4, name: "Deepa Shah", email: "deepa@example.com", phone: "+91 98765 43213" },
  { id: 5, name: "Vikram Mehta", email: "vikram@example.com", phone: "+91 98765 43214" },
];

const SplitBills = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [customSplit, setCustomSplit] = useState<{ [key: number]: string }>({});

  const totalSelected = selectedUsers.length;
  const splitAmount = amount ? Number(amount) / (totalSelected || 1) : 0;

  const handleUserSelect = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSplitRequest = () => {
    if (!amount || selectedUsers.length === 0) {
      toast({
        title: "Error",
        description: "Please enter an amount and select users to split with",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Split requests have been sent to selected users",
    });
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">Split Bills</h1>
        <p className="text-secondary-foreground">Split expenses with friends and family</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Bill Details</h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="amount" className="text-white">Total Amount (₹)</Label>
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
              <Label htmlFor="note" className="text-white">Description</Label>
              <Input
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
                placeholder="What's this split for?"
              />
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Split Amount (per person)</span>
                <span className="text-white font-bold">₹{splitAmount.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Number of people</span>
                <span className="text-white">{totalSelected || 1}</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Select People</h2>
          <div className="space-y-4">
            {mockUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => handleUserSelect(user.id)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedUsers.includes(user.id)
                    ? "bg-purple-500/20 border border-purple-500/50"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-full">
                      <User className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-sm text-gray-400">{user.phone}</p>
                    </div>
                  </div>
                  {selectedUsers.includes(user.id) && (
                    <Check className="h-5 w-5 text-purple-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSplitRequest}
          className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Send Split Requests
        </button>
      </div>
    </div>
  );
};

export default SplitBills;
