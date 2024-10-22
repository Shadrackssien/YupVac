import Image from "next/image";

function PropertyListItems() {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/1.jpg"
          sizes="{max-width: 760px} 760px, {max-width: 1200px}: 760px, 760px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="sark"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Property Name</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>$200</strong> per night
        </p>
      </div>
    </div>
  );
}

export default PropertyListItems;
