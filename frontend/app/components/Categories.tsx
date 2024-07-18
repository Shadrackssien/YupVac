import Image from "next/image";

function Categories() {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/amazing_views.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Amazing Views</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/cabins.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Cabins</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/castles.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Castles</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/designs.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Designs</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/earth_homes.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Earth Homes</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/farms.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Farms</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/mansions.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Mansions</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/sheperds_hut.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Sheperds Hut</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/rooms.jpg"
          alt="Amazing views pic"
          width={20}
          height={20}
        />
        <span className="text-xs">Rooms</span>
      </div>
    </div>
  );
}

export default Categories;
