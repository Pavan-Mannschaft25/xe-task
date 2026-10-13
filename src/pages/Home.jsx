import HeroBanner from "../components/home/HeroBanner";
import ValueSection from "../components/home/ValueSection";
import RebateCalculator from "../components/home/RebateCalculator";
import SecondBanner from "../components/home/SecondBanner";
import NewFundsRewards from "../components/home/Newfundsrewards";
import InvestmentOffers from "../components/home/Investmentoffers";
import ReferralRewards from "../components/home/Referralrewards ";
import FaqSection from "../components/home/Faqsection";
import SupportSection from "../components/home/Supportsection ";
import GlobalAdvantages from "../components/home/Globaladvantages";

export default function Home() {
  return (
    <>
      {/* 1. Banner image (top) */}
      <HeroBanner />

      {/* 2. "How can Citigold Private Client keep adding value?" */}
      <ValueSection />

      {/* 3. Cash rebate calculator */}
      <RebateCalculator />

      {/* 4. Second image section (below) */}
      {/* <SecondBanner /> */}

      <NewFundsRewards />
      <InvestmentOffers />
      <ReferralRewards />
      <GlobalAdvantages />
      <SupportSection />
      <FaqSection />
    </>
  );
}
