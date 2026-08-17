import kioskImage from "../../assets/kiosk-comp.avif";

export default function KioskPage() {
  return (
    <section className="flex w-full items-start justify-center pt-[100px] sm:min-h-screen sm:items-center sm:px-5 sm:py-20">
      <img
        src={kioskImage}
        alt="TapGo Kiosk"
        className="block h-auto w-[85%] max-w-[900px] object-contain sm:w-[50%]"
      />
    </section>
  );
}