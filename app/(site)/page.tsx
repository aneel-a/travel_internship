import Deals from "@/components/Deals";
import Trending from "@/components/Trending";
import Hero from "@/components/Hero";
import ExpNepal from "@/components/ExpNepal";
import Discover from "@/components/Discover";
import ExpTypes from "@/components/ExpTypes";

export default function Home() {
  return (
    <>
      <Hero />
      <Deals />
      <Trending/>
      <ExpTypes />
      <ExpNepal />
      <Discover/>
    </>
  )
}
