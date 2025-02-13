
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Wallet, Calendar, CreditCard, Clock } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-primary">Profile</h1>
        <p className="text-secondary-foreground">Manage your account information</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-full">
              <User className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Personal Information</h3>
              <p className="text-sm text-gray-400">Your basic profile details</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Full Name</p>
                <p className="font-medium text-white">Yashwanth</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-white">abcd@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-white">910 234 9687</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium text-white">India</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-6 text-white">Account Details</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p className="font-medium text-white">January 2024</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Wallet className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Default Wallet</p>
                  <p className="font-medium text-white">Personal Wallet (₹50,000 limit)</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <CreditCard className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Linked Banks</p>
                  <p className="font-medium text-white">2 accounts linked</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="h-5 w-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Last Activity</p>
                  <p className="font-medium text-white">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
