import { FC, SVGProps } from "react"; // Importing FC and SVGProps

interface InfoCardProps {
  roundedCircle?: boolean;
  cardIcon: FC<SVGProps<SVGSVGElement>>; // Ensure this accepts props correctly
  cardTitle: string;
  cardKpi: string;
  circleColor: string;
}

export default function InfoCard({
  roundedCircle = true,
  cardIcon: CardIcon,
  cardTitle,
  cardKpi,
  circleColor,
}: InfoCardProps): JSX.Element {
  return (
    <div className="flex flex-col items-start justify-start py-4 px-4 border border-t-gray-100 shadow-md bg-white w-full max-w-[200px]  h-36">
      <div
        className={`${
          roundedCircle ? "rounded-full" : "rounded-lg"
        } w-10 h-10 p-2 flex items-center justify-center mb-2 bg-${circleColor}`}
       
      >
        <CardIcon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h4 className="text-secondary mb-1 text-[14px] leading-[16.42px] font-medium">
        {cardTitle}
      </h4>
      <p className="text-[24px] leading-[28.15px] font-semibold text-primary">
        {cardKpi}
      </p>
    </div>
  );
}
