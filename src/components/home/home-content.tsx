"use client";

import { useCallback, useState } from "react";
import { BusinessShowcase } from "./business-showcase";
import { BusinessTools } from "./business-tools";
import { CustomerTestimonial } from "./customer-testimonial";
import { EquipmentOptions } from "./equipment-options";
import { HomeHero } from "./home-hero";

export function HomeContent() {
  const [heroCategoryIndex, setHeroCategoryIndex] = useState(0);
  const [showcaseCategoryIndex, setShowcaseCategoryIndex] = useState(0);
  const [heroTimerKey, setHeroTimerKey] = useState(0);

  const selectHeroCategory = useCallback((index: number) => {
    setHeroCategoryIndex(index);
    setHeroTimerKey((current) => current + 1);
  }, []);

  const selectShowcaseCategory = useCallback((index: number) => {
    setShowcaseCategoryIndex(index);
    setHeroCategoryIndex(index);
    setHeroTimerKey((current) => current + 1);
  }, []);

  const syncShowcaseToHero = useCallback((index: number) => {
    setShowcaseCategoryIndex(index);
  }, []);

  return (
    <>
      <HomeHero
        activeIndex={heroCategoryIndex}
        timerKey={heroTimerKey}
        onSelect={selectHeroCategory}
        onLeaveView={syncShowcaseToHero}
      />
      <BusinessTools />
      <BusinessShowcase
        activeCategoryIndex={showcaseCategoryIndex}
        onCategorySelect={selectShowcaseCategory}
      />
      <EquipmentOptions />
      <CustomerTestimonial />
    </>
  );
}
