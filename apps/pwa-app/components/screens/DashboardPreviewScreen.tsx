"use client";

import { Home, Package, Calendar, Wallet, User, Plus, Bell, ArrowUp, ArrowRightLeft, MoreHorizontal, MapPin, CheckCircle2, Phone, Smartphone, FileText } from "lucide-react";
import TabNavigation from "../ui/TabNavigation";

export default function DashboardPreviewScreen() {
  const tabs = [
    { id: "home", label: "Home", icon: <Home className="w-6 h-6" /> },
    { id: "deliveries", label: "Deliveries", icon: <Package className="w-6 h-6" /> },
    { id: "wallet", label: "Wallet", icon: <Wallet className="w-6 h-6" /> },
    { id: "profile", label: "Profile", icon: <User className="w-6 h-6" /> },
  ];

  const floatingActionButton = (
    <button className="w-14 h-14 bg-[#FF6B00] rounded-full flex items-center justify-center -mt-6 shadow-lg shadow-orange-200">
      <Plus className="w-7 h-7 text-white" />
    </button>
  );

  return (
    <div className="min-h-screen bg-zinc-50 pt-72 pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md rounded-b-3xl px-4 py-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 shadow-md rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex px-2 rounded-full py-0 items-center gap-2 bg-green-100 ">
                <span className="text-[10px] text-gray-700 font-bold">Lvl 2</span>
                <span className="text-xs bg-orange-100 text-orange-600 px-1 py-0.5 rounded-full">🌺</span>
              </div>
              <h3 className="text-[12px] font-semibold text-gray-900">Mutairu Dirisu</h3>
            </div>
          </div>
          <button className="relative bg-zinc-100 rounded-full p-2">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* Wallet Section */}
        <div className="bg-white rounded-b-2xl">
          <div className="flex items-center justify-center gap-2 mb-4 rounded-full">
            <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-full gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">₦</span>
              </div>
              <span className="text-[12px] font-medium text-gray-500">NGN</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">₦25,600<span className="text-orange-300">.00</span></h1>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="text-gray-400">👁️</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 py-2">
            {[ 
              { icon: <Plus className="w-5 h-5 text-white" />, label: "Top Up", bg: "bg-orange-500" },
              { icon: <ArrowUp className="w-5 h-5 text-gray-700" />, label: "Send", bg: "bg-gray-50" },
              { icon: <ArrowRightLeft className="w-5 h-5 text-gray-700" />, label: "Swap", bg: "bg-gray-50" },
              // { icon: <MoreHorizontal className="w-5 h-5 text-gray-700" />, label: "More", bg: "bg-gray-50" },
            ].map((item, i) => (
              <button key={i} className="flex flex-col items-center gap-2">
                <div className={`px-6 py-3 rounded-full ${item.bg} flex items-center justify-center shadow-sm`}>
                  {item.icon}
                </div>
                <span className="text-[14px] font-semibold text-gray-700">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-12 space-y-6">
        {/* Quick Actions */}
        <section>
          <h4 className="text-[16px] font-bold text-gray-900 mb-4">Quick Actions</h4>
          <div className="grid grid-cols-4 gap-2 space-y-2">
            {[ 
              { icon: <Package className="w-5 h-5 text-[#FF6B00]" />, label: "Send" },
              { icon: <MapPin className="w-5 h-5 text-[#0F172A]" />, label: "Track" },
              { icon: <Calendar className="w-5 h-5 text-[#0F172A]" />, label: "Schedule" },
              { icon: <CheckCircle2 className="w-5 h-5 text-[#0F172A]" />, label: "Pricing" },
              { icon: <Phone className="w-5 h-5 text-[#0F172A]" />, label: "Buy Airtime" },
              { icon: <Smartphone className="w-5 h-5 text-[#0F172A]" />, label: "Buy Data" },
              { icon: <FileText className="w-5 h-5 text-[#0F172A]" />, label: "Pay Bills" },
            ].map((item, i) => (
              <button key={i} className="flex flex-col items-center py-2 px-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] font-medium text-gray-800 text-center leading-tight">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white rounded-2xl px-4 py-6  shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-[16px] font-bold text-gray-900">Recent Activity</h4>
            <button className="text-[14px] font-medium text-[#FF6B00]">See All</button>
          </div>
          <div className="space-y-4">
            {[ 
              { 
                icon: "📦", 
                title: "Delivery to John E.", 
                time: "May 3, 2025 | 10:30 AM", 
                amount: "-₦3,500", 
                color: "text-red-500" 
              },
              { 
                icon: "🚴", 
                title: "From Daniel Okoro", 
                time: "May 3, 2025 | 9:15 AM", 
                amount: "+₦5,000", 
                color: "text-green-500" 
              },
              { 
                icon: "👛", 
                title: "Wallet Top Up", 
                time: "May 2, 2025 | 6:45 PM", 
                amount: "+₦20,000", 
                color: "text-green-500" 
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-11 h-11 bg-orange-50 rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-semibold text-gray-900">{item.title}</p>
                  <p className="text-[10px] text-gray-400">{item.time}</p>
                </div>
                <p className={`text-[14px] font-semibold ${item.color}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="text-[14px] font-medium text-[#FF6B00] bg-orange-100 shadow-sm rounded-full px-4 py-2 flex items-center gap-1">
              See All <ArrowRightLeft className="w-4 h-4 rotate-90" />
            </button>
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <TabNavigation
          tabs={tabs}
          activeTabId="home"
          floatingActionButton={floatingActionButton}
          onTabChange={(tabId) => console.log("Tab changed to:", tabId)}
        />
      </div>
    </div>
  );
}
