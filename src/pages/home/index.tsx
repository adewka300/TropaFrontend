import HomeAbout from "@/pages/home/sections/about/HomeAbout"
import HomeAdvantages from "@/pages/home/sections/advantages/HomeAdvantages"
import HomeBanner from "@/pages/home/sections/banner/HomeBanner"
import HomeGuide from "@/pages/home/sections/guide/HomeGuide"
import HomeHero from "@/pages/home/sections/hero/HomeHero"
import HomePopularPlaces from "@/pages/home/sections/popularPlaces/HomePopularPlaces"
import HomePopularRoutes from "@/pages/home/sections/popularRoutes/HomePopularRoutes"
import HomeReviews from "@/pages/home/sections/reviews/HomeReviews"
import PageWrapper from "@/shared/components/wrappers/PageWrapper"

const HomePage = () => {
    return (
        <PageWrapper className="desktop:-mt-10">
            <HomeHero />
            <HomeAbout className="sm:-mt-24 desktop:-mt-10!" />
            <HomeAdvantages />
            <HomePopularRoutes />
            <div className="flex w-full overflow-hidden -mt-20 pt-20">
                <HomeGuide className=" mb-8 desktop:mb-0" />
            </div>
            <HomeReviews />
            <HomeBanner />
            <HomePopularPlaces />
        </PageWrapper>
    )
}

export default HomePage