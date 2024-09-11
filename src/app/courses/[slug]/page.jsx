// src/app/courses/[slug]/page.jsx

import CoursesDetails from '@/components/Course-details';

const Page = ({ params }) => {
    const { slug } = params; // Directly access params from the props
    console.log(params);

    return (
        <>
            <CoursesDetails slug={slug} />
        </>
    );
};

export default Page;
