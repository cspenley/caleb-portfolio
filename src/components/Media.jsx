// Renders an <img> or a <video> depending on the file extension of `src`.
// Drop either a photo path or an .mp4 path into the same slot (gallery
// arrays, project section "...Image" fields) and this figures out which
// tag to use — nothing else in the calling code needs to know.
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function isVideo(src) {
  if (!src) return false;
  const clean = src.split("?")[0].toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => clean.endsWith(ext));
}

export default function Media({ src, alt = "", className }) {
  if (isVideo(src)) {
    return (
      // controls + no autoplay: visitors click play themselves, so a
      // gallery full of clips doesn't try to download/decode all of them
      // at once. preload="metadata" grabs just enough to show a first
      // frame and duration without pulling the whole file.
      <video
        src={src}
        className={className}
        controls
        preload="metadata"
        playsInline
      />
    );
  }

  return <img src={src} alt={alt} className={className} />;
}
