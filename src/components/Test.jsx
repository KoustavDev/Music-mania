import React from 'react'

function Test() {
    return (
        <div>
            <TracingBeam className='px-6'>
                <div className='div relative flex items-start px-4'>
                    {
                        musicSchoolContent.map((item, index) => (
                            <div key={`content-${index}`} className="my-20">
                                {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2> */}

                                <h2 className="text-2xl font-bold text-slate-100">
                                    {item.title}
                                </h2>

                                <div className="text-sm  prose prose-sm dark:prose-invert">
                                    {/* {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )} */}
                                    <p className="text-kg text-slate-300 max-w-sm mt-10">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </TracingBeam>
        </div>
    )
}

export default Test