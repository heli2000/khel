import { getKhelText } from "@/models/khelModel";

export function getKhelMessage() {
  const msg = getKhelText();
  return msg;
}
