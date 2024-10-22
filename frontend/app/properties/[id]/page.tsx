import ReservationSidebar from "@/app/components/property/ReservationSidebar";
import Image from "next/image";

function PropertyDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="relative w-full h-[64vh] mb-4 overflow-hidden rounded-xl">
        <Image
          fill
          src="/2.JPG"
          className="object-cover w-full h-full"
          alt="Gusto and Nkunku"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>

          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/15.JPG"
              width={50}
              height={50}
              className="rounded-full"
              alt="The username"
            />

            <p>
              <strong>Belinda Paintsilwaa</strong> is your host
            </p>
          </div>

          <hr />

          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            qui harum, voluptatum eum minima doloremque corrupti? Quis explicabo
            magnam, incidunt itaque delectus blanditiis sint. Quidem pariatur
            molestias quae cum neque? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eius autem recusandae voluptatum omnis cum
            perferendis illum? Pariatur ipsam autem beatae doloribus cum, nulla,
            voluptatem libero eum consequuntur quod ratione commodi! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Dolorum dolores aut
            doloremque labore perferendis quo repellat fugiat aperiam laborum
            nihil unde quod reprehenderit eaque nam assumenda possimus, est
            quidem optio! Lorem ipsum dolor sit, amet consectetur adipisicing
          </p>
        </div>

        <ReservationSidebar />
      </div>
    </main>
  );
}

export default PropertyDetailPage;
