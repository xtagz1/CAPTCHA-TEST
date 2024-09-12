import ActionContainer from "./ActionContainer";

export default function MainBoxLayout() {
    return (
        <div className="border p-6 lg:h-[75dvh] w-[100vw] sm:w-[90dvw] md:w-[75dvw] lg:w-[55dvw] bg-gray-200 ">
            <div className="border w-full h-full bg-blue-900 py-10 px-10">
                <div className="p-10 border h-full bg-white">
                    <ActionContainer/>
                </div>
            </div>
        </div>
    );
  }
  