import React from "react";
import Commit from "../images/cttg.jpeg"
import Ringo from "../images/krp6.webp"
import MediaGuide from "../images/mg.jpeg"
import Merch from "../images/ncm.png"

const Content = () => {
    return (


        <div className="container mx-auto m-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className=" bg-stone-300 rounded-md px-4 py-4 items-stretch h-full">
                    <img className="h-60 w-90 mx-auto rounded-t-md" src={Ringo} alt="Kelee Ringo Pick 6" />
                    <h2 className="tracking-widest text-xs mb1">New</h2>
                    <h1 className="title-font text-lg text-black mb3">Run It Back</h1>
                    <p className="leading-relaxed text-sm mb3">Georgia is coming off its best season ever. Dawgs went 14-1 and won the National Championchip Game. Though the likes of Alabama and Ohio State will be among the teams in it next year, here is why Georgia is capable of repeating.</p>
                    <button className="bg-red-600 text-sm text-white rounded-md px-4 py-2 custombtn">Learn More</button>
                </div>
                <div className="bg-stone-300 rounded-md px-4 py-4 items-stretch h-full">
                    <img className="h-60 w-90 mx-auto rounded-t-md" src={Merch} alt="National CHampionchip Merchandise" />
                    <h2 className="tracking-widest text-xs mb1">New</h2>
                    <h1 className="title-font text-lg text-black mb3">Championchip Merchandise</h1>
                    <p className="leading-relaxed text-sm mb3">The Georgia Bulldogs football team are National Champs.  Show your Bulldogs pride with new merchandise from the G-Shop. Pick up your commemorative gear today, before it's gone. Avaliable whle supplies last.</p>
                    <button className="bg-red-600 text-sm text-white rounded-md px-4 py-2 custombtn">Learn More</button>
                </div>
                <div className="bg-stone-300 rounded-md px-4 py-4 items-stretch h-full">
                    <img className="h-60 w-90 mx-auto rounded-t-md" src={MediaGuide} alt="2022 Media Guide" />
                    <h2 className="tracking-widest text-xs mb1">New</h2>
                    <h1 className="title-font text-lg text-black mb3">2022 Football Media Guide</h1>
                    <p className="leading-relaxed text-sm mb3">Check out the 2022 Georgia Football media guide and get the latest player profiles, coaching bios, team history, records, stats, and more. Download your exclusive Media Guide. Only avaliable on this site!</p>
                    <button className="bg-red-600 text-sm text-white rounded-md px-4 py-2 custombtn">Learn More</button>
                </div>
                <div className="bg-stone-300 rounded-md px-4 py-4 items-stretch h-full">
                    <img className="h-60 w-90 mx-auto rounded-t-md" src={Commit} alt="Commit to the G" />
                    <h2 className="tracking-widest text-xs mb1">New</h2>
                    <h1 className="title-font text-lg text-black mb3">Commit to the G</h1>
                    <p className="leading-relaxed text-sm mb3">The University of Georgia Athletic Association announced that it will undertake a $300 million comprehensive fundraising campaign to support key department priorities over the next five years. Article Continues.</p>
                    <button className="bg-red-600 text-sm text-white rounded-md px-4 py-2 custombtn">Learn More</button>
                </div>

            </div>

        </div>

    )
}
export default Content;