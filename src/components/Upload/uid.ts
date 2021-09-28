const now = Date.now();
let index = 0;
export default function getUid() {
  return `upload-file-${now}-${++index}`;
}
