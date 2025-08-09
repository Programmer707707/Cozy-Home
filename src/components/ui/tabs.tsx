"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type Tab = { title: string; value: string; content?: React.ReactNode };

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    const list = [...propTabs];
    const selected = list.splice(idx, 1);
    list.unshift(selected[0]);
    setTabs(list);
    setActive(list[0]);
  };

  return (
    <>
      <div
        className={cn(
          "inline-flex w-fit ml-auto items-center gap-3",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative", tabClassName)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="tab-pill"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative px-2 text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      <FadeInStack
        tabs={tabs}
        key={active.value}
        hovering={hovering}
        className={cn("mt-6", contentClassName)}
      />
    </>
  );
};

export const FadeInStack = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  hovering?: boolean;
}) => {
  const isActive = (t: Tab) => t.value === tabs[0].value;

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.06,
            top: hovering ? idx * -20 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.12 : 0,
          }}
          animate={{ y: isActive(tab) ? [0, 24, 0] : 0 }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
