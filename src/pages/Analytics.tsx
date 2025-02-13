
import { Card } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { ArrowUpRight, ArrowDownRight, AlertTriangle } from "lucide-react";

// Mock data for multiple metrics
const monthlyData = [
  { name: "Jan", spending: -1200, income: 5000, budget: 4000, debt: -800, savings: 1000, peerAvg: 3500 },
  { name: "Feb", spending: -2100, income: 5200, budget: 4000, debt: -600, savings: 1500, peerAvg: 3600 },
  { name: "Mar", spending: -800, income: 5100, budget: 4000, debt: -900, savings: 2000, peerAvg: 3400 },
  { name: "Apr", spending: -1600, income: 5300, budget: 4000, debt: -700, savings: 2200, peerAvg: 3800 },
  { name: "May", spending: -900, income: 5400, budget: 4000, debt: -500, savings: 2800, peerAvg: 3700 },
  { name: "Jun", spending: -1700, income: 5500, budget: 4000, debt: -400, savings: 3000, peerAvg: 3900 },
];

const spendingCategories = [
  { name: "Food", value: 3500, color: "#FF8042" },
  { name: "Bills", value: 2500, color: "#00C49F" },
  { name: "Shopping", value: 2000, color: "#FFBB28" },
  { name: "Entertainment", value: 1500, color: "#0088FE" },
];

const walletHealth = {
  balance: 25000,
  avgSpending: 1500,
  upcomingBills: 3000,
};

const Analytics = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">Analytics Overview</h1>
        <p className="text-secondary-foreground">Track your financial performance</p>
      </header>

      {/* Main Financial Trends */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Financial Trends</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(17, 17, 17, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="spending" stroke="#22c55e" name="Spending" strokeWidth={2} />
              <Line type="monotone" dataKey="income" stroke="#3b82f6" name="Income" strokeWidth={2} />
              <Line type="monotone" dataKey="budget" stroke="#f97316" name="Budget" strokeWidth={2} />
              <Line type="monotone" dataKey="debt" stroke="#ef4444" name="Debt" strokeWidth={2} />
              <Line type="monotone" dataKey="savings" stroke="#eab308" name="Savings" strokeWidth={2} />
              <Line type="monotone" dataKey="peerAvg" stroke="#8b5cf6" name="Peer Average" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Wallet Health & Category Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Wallet Health</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <ArrowUpRight className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-400">Current Balance</p>
                  <p className="font-medium text-white">₹{walletHealth.balance.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <ArrowDownRight className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm text-gray-400">Average Monthly Spending</p>
                  <p className="font-medium text-white">₹{walletHealth.avgSpending.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-400">Upcoming Bills</p>
                  <p className="font-medium text-white">₹{walletHealth.upcomingBills.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Spending Categories</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {spendingCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Monthly Income vs Expenses */}
      <Card className="glass-card p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Income vs Expenses</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(17, 17, 17, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="income" name="Income" fill="#3b82f6" />
              <Bar dataKey="spending" name="Expenses" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
