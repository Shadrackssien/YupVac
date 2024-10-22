"use client";

import CustomButton from "../forms/CustomButton";

function ConversationDetail() {
  return (
    <>
      <div className="max-h-[400] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">Belinda Paintsilwaa</p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quidem necessitatibus et, nihil sequi cum qui cumque error dolorum,
            molestiae vel mollitia at. Excepturi, dicta! Quaerat fugiat
            repellendus alias architecto.
          </p>
        </div>

        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Shadrack Essien</p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            quidem necessitatibus et, nihil sequi cum qui cumque error dolorum,
            molestiae vel mollitia at. Excepturi, dicta! Quaerat fugiat
            repellendus alias architecto.
          </p>
        </div>
      </div>

      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message"
          className="w-full p-2 bg-gray-200 rounded-xl"
        />

        <CustomButton
          label="Send"
          onClick={() => console.log("clicked")}
          className="w-[100px]"
        />
      </div>
    </>
  );
}

export default ConversationDetail;
