"use client";

import { Home, Package, Calendar, Wallet, User, Plus } from "lucide-react";

export default function DashboardPreviewScreen() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white p-6 pb-10 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Hello, where are we dropping today?</p>
              <p className="font-bold text-gray-900">Hello, Mutairu</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-primary rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-orange-100 text-sm mb-1">Wallet Balance</p>
              <h3 className="text-3xl font-bold">₦25,400.00</h3>
            </div>
            <button className="bg-white text-orange-primary px-4 py-2 rounded-full font-semibold text-sm">
              Top Up
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-gray-900">Quick Actions</p>
          <button className="text-sm text-orange-primary font-medium">See all</button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: <Package className="w-6 h-6 text-orange-primary" />, label: "Send" },
            { icon: <Package className="w-6 h-6 text-gray-400" />, label: "Track" },
            { icon: <Calendar className="w-6 h-6 text-gray-400" />, label: "Schedule" },
            { icon: <Wallet className="w-6 h-6 text-gray-400" />, label: "Top Up" },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xs font-medium text-gray-700">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-gray-900">Nearby Drivers</p>
            <button className="text-sm text-orange-primary font-medium">See all</button>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">John Daniel</p>
              <p className="text-xs text-gray-500">⭐ 4.9 • 1.2km away</p>
            </div>
            <span className="text-xs font-semibold text-green-primary bg-green-primary/10 px-2 py-1 rounded-full">
              Available
            </span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-around items-center">
        <Home className="w-6 h-6 text-orange-primary" />
        <div className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center -mt-6 shadow-lg">
          <Plus className="w-6 h-6 text-white" />
        </div>
        <Wallet className="w-6 h-6 text-gray-400" />
        <User className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
}
