'use client';
import Card from '@/componenet/Card';

const CourseSection: React.FC = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl text-sky-900 sm:text-left text-center text-main font-extrabold mt-10">
        Class-10 Assignment:
      </h1>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <Card
          imageSrc="/images/core-img-1.jpg"
          altText="Artificial Intelligence"
        />
        <Card
          imageSrc="/images/core-img-2.jpg"
          altText="Web 3 and Metaverse"
        />
        <Card
          imageSrc="/images/core-img-3.jpg"
          altText="Cloud-Native Computing"
        />
        <Card
          imageSrc="/images/core-img-4.jpg"
          altText="Ambient Computing and IoT"
        />
        <Card
          imageSrc="/images/core-img-5.jpg"
          altText="Genomics and Bioinformatics"
        />
        <Card
          imageSrc="/images/core-img-6.jpg"
          altText="Cyber Security"
        />
      </div>

      {/* Paragraph with Description */}
      <div className="text-center mt-10 px-4">
        <h1 className="lg:text-4xl sm:text-4xl text-2xl text-sky-900 sm:text-center text-center text-main font-extrabold mt-10">Responsive Product Card Component.</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-sky-600">
          1. On lg devices there should be 3 card per row.
          <br />
          2. On md devices there should be 2 card per row.
          <br />
          3. On sm devices there should be 1 card per row.
        </p>
      </div>
    </div>
  );
};

export default CourseSection;
