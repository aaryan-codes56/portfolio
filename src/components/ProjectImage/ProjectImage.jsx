import { imageSources } from '../../data/projectMedia';

const FULL_WIDTH = 1440;

export default function ProjectImage({ image, sizes, loading = 'lazy', className }) {
  const { src, srcSet } = imageSources(image.name);

  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={image.alt}
      width={FULL_WIDTH}
      height={image.height}
      loading={loading}
      decoding="async"
    />
  );
}
