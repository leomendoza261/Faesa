import { montserrat } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${montserrat.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="font-bold">FAESA</p>
    </div>
  );
}