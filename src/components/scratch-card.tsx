import { Button } from "@/components/ui/button";

// Scratch component for a live test of fixed-finding marks. Not used anywhere.
export function ScratchCard() {
  return (
    <div className="rounded-[12px] border p-[18px]">
      <p className="text-destructive">One</p>
      <p className="text-amber-600">Two</p>
      <p className="bg-red-500">Three</p>
      <div className="mt-4">Four</div>
      <div className="flex gap-2 px-[18px]">Six</div>
      <div className="py-4">Seven</div>
      <div className="rounded-[14px]">Nine</div>
      <div className="rounded-[10px]">Ten</div>
      <p className="text-orange-600">Eleven</p>
      <p className="bg-amber-500">Twelve</p>
      <p className="border-red-500">Thirteen</p>
      <Button>Save</Button>
      <div className="pt-4">Fifteen</div>
      <div className="flex pl-[18px]">Seventeen</div>
      <div className="pr-4">Eighteen</div>
      <div className="flex mx-[18px]">Twenty</div>
    </div>
  );
}
