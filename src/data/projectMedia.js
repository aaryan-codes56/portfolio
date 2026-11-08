// Resolves image names in projects.js to the hashed files Vite emits.
const files = import.meta.glob('../assets/projects/*.webp', { eager: true, import: 'default' });

const fileFor = (name, width) => files[`../assets/projects/${name}-${width}.webp`];

export function imageSources(name) {
  return {
    src: fileFor(name, 1440),
    srcSet: `${fileFor(name, 720)} 720w, ${fileFor(name, 1440)} 1440w`,
  };
}
