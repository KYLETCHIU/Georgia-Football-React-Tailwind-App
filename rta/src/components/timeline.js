import React from "react";

const Timeline = () => {
    return (
     
        <><div className /><div className="container mx-auto rounded-xl shadow border p-8 m-10 bg-stone-300">
            <ol className="border-l border-gray-800">
                <li>
                    <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-800 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-red-600 text-sm">09.04.2021</p>
                    </div>
                    <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Historic Beginnings</h4>
                        <p className="text-gray-800 mb-3">The Bulldogs opened up their legendary season with a neutral ground showdown vs Clemson in Charlotte, North Carolina. In a powerful case of foreshadowing, the first touchdown of this historic season was scored by the Bulldog defense. Dawgs prevailed 10-3 over the Tigers.</p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-start items-center pt-2">
                        <div className="bg-gray-800 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-red-600 text-sm">10.30.2021</p>
                    </div>
                    <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">World's Largest Outdoor Cocktail Party</h4>
                        <p className="text-gray-800 mb-3">The annual Georgia-Florida battle in Jacksonville marked a milestone in the Bulldog's historic season. The Dawgs scored a remarkable 24 for a complete shutout of the Gators in the second quarter. Georgia won the game 34 to 7, and thus made the possibility of a championchip run all too real.</p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-start items-center pt-2">
                        <div className="bg-gray-800 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-red-600 text-sm">12.21.2021</p>
                    </div>
                    <div className="mt-0.5 ml-4 mb-6">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">Orange Bowl</h4>
                        <p className="text-gray-800 mb-3">There was alot being said about Michigan going into the game, but it was all quiet on the westen front after. The Bulldogs brought the heat in a cold december game and brutalized Michigan 34-11 to win the Orange bowl and secure their spot in the National Championchip game vs the Alabama Crimson Tide.</p>
                    </div>
                </li>
                <li>
                    <div className="flex flex-start items-center pt-2">
                        <div className="bg-gray-800 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-red-600 text-sm">01.10.2022</p>
                    </div>
                    <div className="mt-0.5 ml-4 pb-5">
                        <h4 className="text-gray-800 font-semibold text-xl mb-1.5">"There's gonna be some property destroyed tonight"</h4>
                        <p className="text-gray-800 mb-3">Victory. Finally on top of the Mountain. The Georgia Bulldogs defeated the Alabama Crimson Tide 33 - 18 in Indianapolis to secure their first national title in 41 years. The deal was sealed by a end of the game pick 6 by Kelee Ringo. The Dawg defense thus scored the first and final touchdowns of this historic season.</p>
                    </div>
                </li>
            </ol>
        </div></>
    )
}
export default Timeline;

