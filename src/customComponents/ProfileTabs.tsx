import React from 'react';
import { Tabs } from "../components/ui/tabs";
import ProfileInfo from './ProfileInfo';
import OrderInfo from './OrderInfo';

const Shell: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="max-w-3xl w-full mx-auto rounded-2xl border border-zinc-200/60 bg-white shadow-sm">
    <div className="rounded-t-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 px-6 py-5">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
    </div>
    <div className="p-6 md:p-8">{children}</div>
  </div>
);

export default function ProfileTabs() {
  const tabs = [
    { title: "Profile", value: "profile", content: <Shell title="Profile"><ProfileInfo /></Shell> },
    { title: "Orders",  value: "orders",  content: <Shell title="Orders"><OrderInfo /></Shell> },
  ];

  return (
    <section className="flex flex-col items-center py-10 w-full">
      
        <div className="w-3xl justify-center">
          <Tabs
            tabs={tabs}
            containerClassName="inline-flex gap-3 mx-auto"
            tabClassName="px-5 py-2.5 text-sm md:text-base font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full"
            activeTabClassName="bg-orange-100 text-orange-900 dark:bg-orange-300/20"
            contentClassName="mt-8 w-full justify-center text-white"
          />
        </div>

    </section>
  );
}
