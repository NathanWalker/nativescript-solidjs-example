import { useRouter } from "../router";

export const GrowingPlant = () => {
  const router = useRouter();
  return (
    <>
      <actionbar title="Rive Alive!" className="bg-[#06070e] text-white">
        <navigationbutton text="Back"/>
      </actionbar>
      {/* @ts-ignore */}
      <gridlayout rows="2*,*" className="bg-[#06070e]">
        <riveview row="0" src="~/assets/rive/growing-plant.riv" autoplay="true" className="align-top" iosOverflowSafeArea="true" />
        <button
          rowSpan="2"
          className="rounded-full bg-gray-500 text-white w-[100] p-2 text-lg font-bold h-[45] text-center capitalize" iosOverflowSafeArea="false" sharedTransitionTag="button2" translateY="105"
          text="Back"
          on:tap={() => {
            router.goBack();
          }}
        />
        <image rowSpan="2" src="~/assets/solid.png" width="200" height="200" className="align-bottom mb-2" sharedTransitionTag="logo"/>
      </gridlayout>
    </>
  );
};
