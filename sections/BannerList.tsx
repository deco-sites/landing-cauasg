import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Banner {
  image: ImageWidget;
}

export interface Props {
  banners?: Banner[];
}

export default function BannerList(props: Props) {
  return (
    <div className="flex gap-4 container my-4">
      {props.banners?.map((banner) => {
        return <Image width={640} src={banner.image} alt={banner.image} />;
      })}
    </div>
  );
}
