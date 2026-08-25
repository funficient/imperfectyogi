import Image, { type ImageProps } from 'next/image';

export type AppImageProps = ImageProps & {
  className?: string;
};

export default function AppImage({ className = '', ...props }: AppImageProps) {
  return (
    <Image
      {...props}
      className={className}
      unoptimized={props.src.toString().startsWith('http')}
    />
  );
}
