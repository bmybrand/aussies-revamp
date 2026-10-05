"use client";

import { useCallback, useState } from "react";
import { BusinessShowcase } from "./business-showcase";
import { BusinessEcosystem } from "./business-ecosystem";
import { BusinessTools } from "./business-tools";
import { CustomerTestimonial } from "./customer-testimonial";
import { EquipmentOptions } from "./equipment-options";
import { Footer } from "./footer";
import { FooterCta } from "./footer-cta";
import { HomeHero } from "./home-hero";
import { SupplierBenefits } from "./supplier-benefits";

export function HomeContent() {
  const [heroCategoryIndex, setHeroCategoryIndex] = useState(0);
  const [showcaseCategoryIndex, setShowcaseCategoryIndex] = useState(0);
  const [heroTimerKey, setHeroTimerKey] = useState(0);
  const [isShowcaseFocused, setIsShowcaseFocused] = useState(false);
  const visibleShowcaseCategoryIndex = isShowcaseFocused
    ? showcaseCategoryIndex
    : heroCategoryIndex;

  const selectHeroCategory = useCallback((index: number) => {
    setHeroCategoryIndex(index);
    setHeroTimerKey((current) => current + 1);
  }, []);

  const selectShowcaseCategory = useCallback((index: number) => {
    setShowcaseCategoryIndex(index);
    setHeroCategoryIndex(index);
    setHeroTimerKey((current) => current + 1);
  }, []);

  const handleShowcaseFocus = useCallback(
    (focused: boolean) => {
      setIsShowcaseFocused(focused);

      if (focused) {
        setShowcaseCategoryIndex(heroCategoryIndex);
      }
    },
    [heroCategoryIndex],
  );

  return (
    <>
      <HomeHero
        activeIndex={heroCategoryIndex}
        timerKey={heroTimerKey}
        onSelect={selectHeroCategory}
        timerPaused={isShowcaseFocused}
      />
      <BusinessTools />
      <BusinessShowcase
        activeCategoryIndex={visibleShowcaseCategoryIndex}
        onCategorySelect={selectShowcaseCategory}
        onFocusChange={handleShowcaseFocus}
      />

      <EquipmentOptions />
      <SupplierBenefits />
      <CustomerTestimonial />
      <BusinessEcosystem />
      <FooterCta />
      <Footer />
    </>
  );
}
