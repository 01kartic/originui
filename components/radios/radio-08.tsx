import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio08() {
  return (
    <RadioGroup className="gap-2" defaultValue="r1">
      {/* Radio card #1 */}
      <div className="relative items-top flex space-x-2 space-x-reverse p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground">
        <RadioGroupItem value="r1" id="radio-08-r1" aria-describedby="radio-08-r1-description" className="order-1 after:absolute after:inset-0" />
        <div className="grow grid gap-1">
          <Label htmlFor="radio-08-r1">
            Label <span className="font-normal text-xs leading-[inherit] text-muted-foreground">(Sublabel)</span>
          </Label>
          <p id="radio-08-r1-description" className="text-xs text-muted-foreground">
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
      {/* Radio card #2 */}
      <div className="relative items-top flex space-x-2 space-x-reverse p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground">
        <RadioGroupItem value="r2" id="radio-08-r2" aria-describedby="radio-08-r2-description" className="order-1 after:absolute after:inset-0" />
        <div className="grow grid gap-1">
          <Label htmlFor="radio-08-r2">
            Label <span className="font-normal text-xs leading-[inherit] text-muted-foreground">(Sublabel)</span>
          </Label>
          <p id="radio-08-r2-description" className="text-xs text-muted-foreground">
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}