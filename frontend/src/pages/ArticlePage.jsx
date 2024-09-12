import React from 'react'
import heroBG from "../assets/article1.jpg";
import editorImage1 from "../assets/blog-1.jpg";
import editorImage2 from "../assets/blog-1.jpg";
import editorImage3 from "../assets/blog-1.jpg";
import popularImage1 from "../assets/blog-1.jpg";
import popularImage2 from "../assets/blog-1.jpg";
import popularImage3 from "../assets/blog-1.jpg";
import img1 from "../assets/girls1.jpg";
import img2 from "../assets/boy1.jpg";

const ArticlePage = () => {
    return (
        <>
            <div>
                <div className="relative bg-black bg-opacity-100 ">
                    <div className="">
                        <img src={heroBG} alt="" className=" h-full w-full object-cover opacity-40 -z-10" />
                    </div>
                    <div className="absolute w-4/5 top-1/2  text-white left-1/2 -translate-x-1/2 -translate-y-1/2  z-10">
                        <h4 className="text-center uppercase py-4  lg:text-xl">Interiors</h4>
                        <h1 className="text-center leading-10 text-white text-xl lg:text-5xl uppercase font-bold ">
                            Another Big Apartment Project Slated for Broad Ripple Company</h1>
                        <div className="flex w-1/2 font-bold text-sm m-auto justify-center uppercase list-none gap-3 py-4">
                            <li className='px-6 py-2 ' >August 7, 2019</li>
                            <li className='px-6 py-2 border-x border-x-white' >comments 1</li>
                            <li className='px-6 py-2 ' >armin vans</li></div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto w-4/5 py-8">
                <div className="flex py-8 gap-5">
                    <article className="text-left w-3/4">

                        <p className='leading-relaxed py-2'>We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining room for breakfast.</p>

                        <h3 className='leading-relaxed py-2'>Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a beautiful picture.</h3>

                        <p className='leading-relaxed py-2'>We were making our way to the Rila Mountains, where we were visiting the Rila Monastery where we enjoyed scrambled eggs, toast, mekitsi, local jam and peppermint tea</p>

                        <img src={img1} alt="" className='w-full mt-7' />
                        <caption className='w-full text-left text-sm py-1'>Adderall and flirting with bulimia in an attempt to whittle herself</caption>

                        <p className="leading-relaxed py-2">
                            We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I’m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn’t venture far from the main church, but I didn’t feel overwhelmed by tourists in the monastery.
                        </p>


                        <div className='flex gap-1'>
                        <aside className='leading-loose'>
                            <p>   We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I’m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn’t venture far from the main church, but I didn’t feel overwhelmed by tourists in the monastery.</p>

                            <p>
                            Feeling refreshed after an espresso, we walked a short distance to the small but welcoming Banya Bashi Mosque, then descended into the ancient Serdica complex.
                            </p>

                            <p>
                            We were exhausted after a long day of travel, so we headed back to the hotel and crashed.
                            </p>

                            <p> I had low expectations about Sofia as a city, but after the walking tour I absolutely loved the place. This was an easy city to navigate, and it was a beautiful city – despite its ugly, staunch and stolid communist-built surrounds. Sofia has a very average facade as you enter the city, but once you lose yourself in the old town area, everything changes.</p>

                        
                            </aside>
                                <img src={img2} alt="" className='object-cover max-h-96 max-w-52' />
                        </div>


                    </article>
                    <div className="text-left px-10">
                        <div>

                            <div className="border-b-2 py-1 border-black">
                                <span className="bg-black text-white uppercase px-3 py-2 w-1/4 ">most popular</span>
                            </div>
                            <div className='py-5'>
                                {/* <h2 className="text-xl font-bold mb-4 uppercase">Popular Posts</h2> */}
                                <ul className="space-y-6">
                                    <li className="flex gap-3 items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                                        <img src={popularImage1} alt="Popular Post 1" className="w-28 md:w-24 md:h-16 object-cover" />
                                        <div>
                                            <h4 className="hover:text-blue-500">Discover the Most Magical Sunset in Santorini</h4>
                                            <p className="text-sm text-gray-400">August 7, 2019</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3  items-center space-y-4 md:space-y-0 md:space-x-4">
                                        <img src={popularImage2} alt="Popular Post 2" className="w-28 md:w-24 md:h-16 object-cover" />
                                        <div>
                                            <h4 className="hover:text-blue-500">Game Changing Virtual Reality Console</h4>
                                            <p className="text-sm text-gray-400">August 7, 2019</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                                        <img src={popularImage3} alt="Popular Post 3" className="w-28 md:w-24 md:h-16 object-cover" />
                                        <div>
                                            <h4 className="hover:text-blue-500">Computer Filters Noise to Make You a Better Listener</h4>
                                            <p className="text-sm text-gray-400">August 7, 2019</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3  items-center space-y-4 md:space-y-0 md:space-x-4">
                                        <img src={popularImage2} alt="Popular Post 2" className="w-28 md:w-24 md:h-16 object-cover" />
                                        <div>
                                            <h4 className="hover:text-blue-500">Game Changing Virtual Reality Console</h4>
                                            <p className="text-sm text-gray-400">August 7, 2019</p>
                                        </div>
                                    </li>

                                    <li className='text-center'>

                                        <button className='p-2 border text-center text-sm mx-auto'> Load more  </button>
                                    </li>
                                </ul>
                            </div>


                            <div>

                                <div className="border-b-2 py-1 border-black">
                                    <span className="bg-black text-white uppercase px-3 py-2 w-1/3 ">recent comments</span>
                                </div>
                                <div className='py-5'>
                                    <ul>
                                        <li className='py-2'>

                                            <span className="text-sm text-gray-800">Lorem, ipsum.</span >
                                            <span className="hover:text-blue-500"> Another Big Apartment Project Slated for Broad Ripple Company</span>
                                        </li>
                                        <li className='py-2'>

                                            <span className="text-sm text-gray-800">Lorem, ipsum.</span >
                                            <span className="hover:text-blue-500"> Another Big Apartment Project Slated for Broad Ripple Company</span>
                                        </li>
                                        <li className='py-2'>

                                            <span className="text-sm text-gray-800">Lorem, ipsum.</span >
                                            <span className="hover:text-blue-500"> Another Big Apartment Project Slated for Broad Ripple Company</span>
                                        </li>
                                        <li className='py-2'>

                                            <span className="text-sm text-gray-800">Lorem, ipsum.</span >
                                            <span className="hover:text-blue-500"> Another Big Apartment Project Slated for Broad Ripple Company</span>
                                        </li>
                                        <li className='py-2'>

                                            <span className="text-sm text-gray-800">Lorem, ipsum.</span >
                                            <span className="hover:text-blue-500"> Another Big Apartment Project Slated for Broad Ripple Company</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </div>



        </>
    )
}

export default ArticlePage